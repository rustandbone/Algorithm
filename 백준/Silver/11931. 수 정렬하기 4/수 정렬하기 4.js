const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

const sortNum = input
  .map(Number)
  .sort((a, b) => b - a)
  .join('\n');

console.log(sortNum);