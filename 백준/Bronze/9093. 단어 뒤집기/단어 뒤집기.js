const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

input.forEach((v) => {
  v = v
    .trim()
    .split(' ')
    .map((v) => v.split('').reverse().join(''));
  console.log(v.join(' '));
});