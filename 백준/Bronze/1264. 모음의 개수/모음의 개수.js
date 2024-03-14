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
      const before = v.length;
      v = v.replace(/[aeiou]/gi, '');
      const after = v.length;
      return before - after;
    })
    .join('\n')
);