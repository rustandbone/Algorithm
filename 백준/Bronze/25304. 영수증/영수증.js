const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let total = +input[0];

let menuArr = input.filter((_, i) => i > 1);

const result = menuArr.reduce((acc, cur) => {
  const menuPrice = cur.split(' ')[0];
  const menuCount = cur.split(' ')[1];
  return acc + menuPrice * menuCount;
}, 0);

console.log(total === result ? 'Yes' : 'No');
