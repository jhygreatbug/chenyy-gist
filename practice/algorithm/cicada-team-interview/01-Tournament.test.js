const tournament = require('./01-Tournament');

const testCase = [
  {
    input: `
Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win`,
    output: `
Team                           | MP |  W |  D |  L |  P
Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6
Blithering Badgers             |  3 |  1 |  0 |  2 |  3
Courageous Californians        |  3 |  0 |  1 |  2 |  1`,
  },
  {
    input: `
Allegoric Alaskans;Blithering Badgers;win
Allegoric Alaskans;Blithering Badgers;win
Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win`,
    output: `
Team                           | MP |  W |  D |  L |  P
Allegoric Alaskans             |  5 |  4 |  0 |  1 | 12
Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
Blithering Badgers             |  5 |  1 |  0 |  4 |  3
Courageous Californians        |  3 |  0 |  1 |  2 |  1`,
  },
];
test('base', () => {
  testCase.forEach(caseItem => {
    const output = tournament(caseItem.input.trim());
    expect(output.trim()).toBe(caseItem.output.trim());
  })
})
