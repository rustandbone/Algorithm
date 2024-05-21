const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

const [n, k] = input[0].split(' ').map(Number);

const numArr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(numArr[k - 1]);