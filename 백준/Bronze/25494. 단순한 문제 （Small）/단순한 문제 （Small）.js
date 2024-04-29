const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const answer = input.map((v) => {
  const [a, b, c] = v.split(' ').map(Number);
  return Math.min(a, b, c);
});

console.log(answer.join('\n'));