const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const change = { quarter: 0, dime: 0, nickel: 0, penny: 0 };
const MONEY = { quarter: 25, dime: 10, nickel: 5, penny: 1 };

for (let i = 1; i < input.length; i++) {
  let money = input[i];

  money = makeChange(money, 'quarter');
  money = makeChange(money, 'dime');
  money = makeChange(money, 'nickel');
  money = makeChange(money, 'penny');

  console.log(Object.values(change).join(' '));
}

function makeChange(money, unit) {
  change[unit] = Math.floor(money / MONEY[unit]);
  money %= MONEY[unit];
  return money;
}
