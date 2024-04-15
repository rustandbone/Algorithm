const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const points = {};

input.forEach((v, i) => {
  points[+v] = i + 1;
});

const selectArr = input.sort((a, b) => b - a).slice(0, 5);

const questionNum = selectArr.map((v) => points[+v]).sort((a, b) => a - b);

console.log(selectArr.reduce((acc, cur) => acc + +cur, 0));
console.log(questionNum.join(' '));