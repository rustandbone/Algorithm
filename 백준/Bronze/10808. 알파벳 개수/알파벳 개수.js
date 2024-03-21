const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

const answer = {};

Array(26)
  .fill()
  .forEach((v, i) => (answer[String.fromCharCode(i + 97)] = 0));

input.split('').forEach((v) => answer[v]++);

console.log(Object.values(answer).join(' '));