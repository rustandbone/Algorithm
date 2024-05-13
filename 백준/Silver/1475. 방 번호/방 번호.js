const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').toString().trim();

const num = input.split('').map(Number);

const numCheck = {};

num.forEach((n) => {
  if (n === 6 || n === 9) numCheck[69] = (numCheck[69] || 0) + 0.5;
  else numCheck[n] = (numCheck[n] || 0) + 1;
});

console.log(Math.ceil(Math.max(...Object.values(numCheck))));