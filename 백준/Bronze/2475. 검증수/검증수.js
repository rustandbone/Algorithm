const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

console.log(
  input.reduce((acc, cur) => {
    return +acc + cur ** 2;
  }, 0) % 10
);