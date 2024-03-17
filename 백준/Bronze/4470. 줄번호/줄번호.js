const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

console.log(
  input
    .map((v, i) => {
      const info = v
        .split('')
        .filter((v) => v !== '\r')
        .join('');

      return `${i + 1}. ${info}`;
    })
    .join('\n')
);