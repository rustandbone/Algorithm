const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

const a = input[0].split(' ').map(Number);
const b = input[1].split(' ').map(Number);

const sortNum = [...a, ...b].sort((a, b) => a - b).join(' ');

console.log(sortNum);