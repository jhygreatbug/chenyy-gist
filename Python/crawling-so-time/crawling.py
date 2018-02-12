# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
from requests.exceptions import RequestException
import time
import random
import requests
import re

try:
	from conf import *
except ImportError:
	pass

def is_sumext(tag):
	if not tag.has_attr('class'):
		return False
	for item in tag['class']:
		if item.find('sumext-tpl-') >= 0:
			return True
	return False

def has_date(tag):
	if not tag.has_attr('class'):
		return False
	for item in tag['class']:
		if item == ('res-show-date'):
			return True
		if item == 'info':
			return True
	return False

def get_sumext_tpl(tag):
	for item in tag['class']:
		if item.find('sumext-tpl-') >= 0:
			return item
	return 'null'

re_date = r'(\d{4}-\d{2}-\d{2})|((\d{4}年)?\d{1,2}月\d{1,2}日)|(刚刚)|(\d+分钟前)|(\d+小时前)|(\d+天前)'
def get_date_text(tag):
	result = re.search(re_date, tag.text)
	if result:
		return result[0]
	return None

uas = [
	'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Mobile Safari/537.36',
	'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Mobile Safari/537.36',
	'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
	'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0',
]
def get_query_info(f, query):
	url = URL_TPL.format(query)
	ua = random.choice(uas)
	try:
		r = requests.get(url, headers={ 'User-Agent' : ua })
	except RequestException as e:
		return False

	if str(r.status_code) != '200':
		print(ua)
	# print(r.text.encode(r.encoding).decode('utf-8'))
	soup = BeautifulSoup(r.text.encode(r.encoding).decode('utf-8'), 'html.parser')
	sumext_tags = soup.find_all(is_sumext)
	result = {
		'date_count': 0,
		'sumext_count': len(sumext_tags)
	}

	for sumext_tag in sumext_tags:
		date_tags = sumext_tag.find_all(has_date)
		if date_tags == None:
			continue
		date_text = None
		for date_tag in date_tags:
			date_text = get_date_text(date_tag)
			if date_text == None:
				continue
		if date_text == None:
			continue
		result['date_count'] += 1
		sumext_tpl = get_sumext_tpl(sumext_tag)
		pcurl = ''
		try:
			pcurl = sumext_tag['data-pcurl']
		except Exception:
			pass
		f.write('%s	%s	%s	%s\n' % (query, pcurl , sumext_tpl, date_text))

	return result

def main():
	now = int(time.time())
	f_o1 = open('./result_%d_1.txt' % now, 'w', encoding='utf-8')
	f_o2 = open('./result_%d_2.txt' % now, 'w', encoding='utf-8')
	f_o3 = open('./result_%d_error.txt' % now, 'w', encoding='utf-8')
	error_count = 0
	# status_list = [True * 10]

	with open(DATA_PATH, encoding='utf8') as f:

		i = 0
		for line in f:
			i += 1
			query = line[:-1]
			print('%d	%s' % (i, query))
			try:
				result = get_query_info(f_o1, query)
			except Exception:
				f_o3.write(query + '\n')
				continue
			is_error = 1 if result == False else 0

			# status_list.insert(0, is_error)
			# error_count += is_error
			# error_count -= int(status_list.pop())

			# if error_count >= 7:
			# 	f_out.write('Error')
			# 	break

			if is_error:
				continue
			time.sleep(0.3)
			f_o2.write('%s	%s	%s\n' % (query, result['date_count'], result['sumext_count']))

	f_o1.close()
	f_o2.close()

main()
