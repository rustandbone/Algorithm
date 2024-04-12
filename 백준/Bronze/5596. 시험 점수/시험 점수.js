const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [a, b] = input;

const aScore = a.split(' ').reduce((acc, cur) => acc + +cur, 0);
const bScore = b.split(' ').reduce((acc, cur) => acc + +cur, 0);

console.log(Math.max(aScore, bScore));