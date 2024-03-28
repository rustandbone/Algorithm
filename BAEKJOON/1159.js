const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

const player = {};
const answer = [];

input.forEach((v) => {
  if (player[v[0]]) {
    player[v[0]] += 1;
  } else {
    player[v[0]] = 1;
  }
});

Object.entries(player).forEach((v) => {
  const [key, value] = v;
  if (value >= 5) answer.push(key);
});

console.log(answer.length === 0 ? 'PREDAJA' : answer.sort().join(''));
