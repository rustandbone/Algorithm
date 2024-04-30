const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const [n, m] = input;

let answer = [];

for (let i = Math.ceil(Math.sqrt(n)); i <= Math.sqrt(m); i++) {
  answer.push(Math.pow(i, 2));
}

answer.length === 0
  ? console.log(-1)
  : console.log(answer.reduce((acc, cur) => acc + cur, 0) + '\n' + answer[0]);