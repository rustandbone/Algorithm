const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const arr = input.map((v) => {
  const [name, score] = v.split(' ');
  return [name, Number(score)];
});

const sort = arr.sort((a, b) => {
  return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
});

console.log(sort[0][0]);
