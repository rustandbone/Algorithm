const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

console.log(
  input.map((v) => v.split(' ').reduce((acc, cur) => acc + +cur, 0)).join('\n')
);