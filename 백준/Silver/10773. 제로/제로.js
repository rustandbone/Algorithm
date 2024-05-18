const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

const nums = input.map(Number);

const answer = [];

nums.forEach((num) => {
  if (num === 0) {
    answer.pop();
  } else {
    answer.push(num);
  }
});

console.log(nums.length ? answer.reduce((a, b) => a + b, 0) : 0);