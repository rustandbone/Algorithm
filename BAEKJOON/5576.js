const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const wPoint = input
  .slice(0, 10)
  .map(Number)
  .sort((a, b) => b - a);

const kPoint = input
  .slice(10)
  .map(Number)
  .sort((a, b) => b - a);

const wTopThree = wPoint.slice(0, 3).reduce((acc, cur) => acc + cur, 0);
const kTopThree = kPoint.slice(0, 3).reduce((acc, cur) => acc + cur, 0);

console.log(wTopThree, kTopThree);
