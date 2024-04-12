const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const alphabet = {};
const answer = [];
let count = 0;

input.forEach((el) => {
  el.split('').forEach((v) => {
    if (v !== ' ' && v !== '\r') alphabet[v] = (alphabet[v] || 0) + 1;
  });
});

const arr = Object.entries(alphabet).sort((a, b) => b[1] - a[1]);
count = arr[0][1];

arr.forEach((el) => {
  if (el[1] === count) answer.push(el[0]);
});

console.log(answer.sort().join(''));