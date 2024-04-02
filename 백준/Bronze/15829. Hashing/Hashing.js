const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

const alphabet = Array(26)
  .fill()
  .map((v, i) => String.fromCharCode(i + 97));

const answer = input[0].split('').reduce((acc, cur, i) => {
  const cal = (alphabet.indexOf(cur) + 1) * 31 ** i;
  return acc + cal;
}, 0);

console.log(answer);