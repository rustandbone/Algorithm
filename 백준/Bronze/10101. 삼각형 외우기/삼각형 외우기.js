const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

solution(input);

function solution(arr) {
  arr = arr.map(Number);

  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  if (sum !== 180) return console.log('Error');

  new Set(arr).size === 3
    ? console.log('Scalene')
    : new Set(arr).size === 2
    ? console.log('Isosceles')
    : console.log('Equilateral');
}