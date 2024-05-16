const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

const setNum = new Set(input[0].split(' ').map(Number));
const sortNum = Array.from(setNum).sort((a, b) => a - b);

console.log(sortNum.join(' '));