const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const test = input.map(Number);

const science = test.slice(0, 4).sort((a, b) => b - a);
const liberal = test.slice(4).sort((a, b) => b - a);

const sum = science.slice(0, 3);
sum.push(liberal[0]);

console.log(sum.reduce((acc, cur) => acc + cur, 0));