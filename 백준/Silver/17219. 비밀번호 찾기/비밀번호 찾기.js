const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const password = {};

input.slice(1, n + 1).forEach((v) => {
  const [a, b] = v.trim().split(' ');
  password[a] = b;
});

input.slice(n + 1).forEach((v) => {
  console.log(password[v.trim()]);
});