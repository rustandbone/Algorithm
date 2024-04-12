const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

input.forEach((v) => {
  const arr = v
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  console.log(arr[2]);
});