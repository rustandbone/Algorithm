const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

console.log(
  input
    .map((v) => {
      const [a, b, c] = v.split(' ').sort((a, b) => a - b);
      if (c ** 2 - a ** 2 - b ** 2 === 0) return 'right';
      else return 'wrong';
    })
    .join('\n')
);