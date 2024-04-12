const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

input.forEach((v) => {
  const count = {};

  const [a, b] = v.trim().split(' ');

  a.split('').forEach((v) => {
    count[v] = (count[v] || 0) + 1;
  });

  b.split('').forEach((v) => {
    count[v]--;
  });

  const result = Object.values(count).every((v) => v === 0);

  result
    ? console.log([a, b].join(' & ') + ' are anagrams.')
    : console.log([a, b].join(' & ') + ' are NOT anagrams.');
});