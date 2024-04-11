const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const name = input[0].trim().split('');
const arr = input.slice(2);

const count = { L: 0, O: 0, V: 0, E: 0 };

name.forEach((v) => {
  if (v in count) count[v]++;
});

const answer = {};

arr.forEach((v) => {
  let eachCount = { ...count };

  v.trim()
    .split('')
    .forEach((v) => {
      if (v in count) eachCount[v]++;
    });

  const { L, O, V, E } = eachCount;

  const result =
    ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;

  answer[v.trim()] = result;
});

const sort = Object.entries(answer).sort((a, b) => {
  return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
});

console.log(sort[0][0]);