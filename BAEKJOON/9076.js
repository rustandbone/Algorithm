const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const answer = input.map((v) => {
  const arr = v
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .slice(1, 4);

  if (arr.at(-1) - arr[0] >= 4) {
    return 'KIN';
  } else {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
});

console.log(answer.join('\n'));
