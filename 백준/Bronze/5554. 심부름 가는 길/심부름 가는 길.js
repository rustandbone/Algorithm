const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const totalMinute = input.reduce((acc, cur) => acc + +cur, 0);

console.log(parseInt(totalMinute / 60));
console.log(totalMinute % 60);