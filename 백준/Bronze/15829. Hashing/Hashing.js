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

let answer = 0n;
let r = 1n;

input[0].split('').forEach((v) => {
  let cal = BigInt(alphabet.indexOf(v) + 1) * r;
  cal %= 1234567891n;

  answer += cal;
  answer %= 1234567891n;

  r *= 31n;
  r %= 1234567891n;
});

console.log(answer.toString());