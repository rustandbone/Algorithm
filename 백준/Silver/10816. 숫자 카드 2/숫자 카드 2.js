const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const count = new Map();

const numbers = input[3].split(' ');

input[1].split(' ').forEach((v) => {
  count.set(+v, count.get(+v) + 1 || 1);
});

const answer = numbers.map((v) => {
  if (count.get(+v)) return count.get(+v);
  else return 0;
});

console.log(answer.join(' '));
