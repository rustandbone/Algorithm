const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

let total = '';

input.forEach((v) => {
  total += v.trim();
});

const answer = total.split(',').reduce((acc, cur) => acc + +cur, 0);

console.log(answer);