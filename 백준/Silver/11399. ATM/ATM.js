const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

arr.reduce((acc, cur) => {
  answer += acc + cur;
  return acc + cur;
}, 0);

console.log(answer);