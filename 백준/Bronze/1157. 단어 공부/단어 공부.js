const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase()
  .split('');

const count = {};

input.forEach((item) => (count[item] = (count[item] || 0) + 1));

const max = Math.max(...Object.values(count));

let checkMaxDupl = 0;

Object.values(count).forEach((item) => {
  if (item === max) checkMaxDupl++;
});

checkMaxDupl >= 2
  ? console.log('?')
  : console.log(Object.keys(count).find((key) => count[key] === max));
