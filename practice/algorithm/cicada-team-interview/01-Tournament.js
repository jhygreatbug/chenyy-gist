const RESULT_KEYWORDS = ['win', 'draw', 'loss'];
const RESULT_NAME_MAP = {
  win: 'W',
  draw: 'D',
  loss: 'L',
};

module.exports = function tournament(list) {
  const competitions = list.split('\n');
  const teamMap = {};
  function updateTeamPoint(team, result) {
    if (!(team in teamMap)) {
      teamMap[team] = {
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
      };
    }
    const teamPoint = teamMap[team];
    teamPoint.MP++;
    teamPoint[RESULT_NAME_MAP[result]]++;
  }
  function format() {
    const teamResults = Object.keys(teamMap).map(key => {
      const teamResult = teamMap[key];
      teamResult.Team = key;
      teamResult.P = teamResult.W * 3 + teamResult.D;
      return teamResult;
    });
    teamResults.sort((a, b) => (a.P < b.P ? 1 : -1));

    let maxTeamLen = 0;
    let maxCol = {
      MP: 0,
      W: 0,
      D: 0,
      L: 0,
      P: 0,
    };
    teamResults.forEach(result => {
      maxTeamLen = Math.max(maxTeamLen, result.Team.length);
      for (const col in maxCol) {
        maxCol[col] = Math.max(maxCol[col], result[col]);
      }
    });

    for (const col in maxCol) {
      maxCol[col] = Math.max(2, `${maxCol[col]}`.length);
    }
    maxTeamLen += 7;

    let out = `${'Team'.padEnd(maxTeamLen, ' ')}`;
    for (const col in maxCol) {
      out += ` | ${col.padStart(maxCol[col], ' ')}`;
    }

    teamResults.forEach(result => {
      out += '\n';
      out += result.Team.padEnd(maxTeamLen, ' ');
      for (const col in maxCol) {
        const colStr = `${result[col]}`;
        const max = maxCol[col];
        out += ` | ${colStr.padStart(max, ' ')}`;
      }
    });
    return out;
  }
  competitions.forEach(competition => {
    const [team1, team2, result, outer] = competition.split(';');
    if (RESULT_KEYWORDS.includes(result) && typeof outer === 'undefined') {
      updateTeamPoint(team1, result);
      let team2Result;
      if (result === 'win') {
        team2Result = 'loss';
      } else if (result === 'loss') {
        team2Result = 'win';
      } else {
        team2Result = 'draw';
      }
      updateTeamPoint(team2, team2Result);
    }
  });
  return format();
};
