const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const point = input.map(Number);

console.log(point.reduce((acc, cur) => acc + cur, 0));
