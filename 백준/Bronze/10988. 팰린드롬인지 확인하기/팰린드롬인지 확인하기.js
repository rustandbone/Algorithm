const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

if (input.length % 2 === 1) {
  const half = input.split('').slice(0, input.length / 2);
  const half2 = input
    .split('')
    .slice(input.length / 2 + 1)
    .reverse();

  console.log(half.every((v, i) => v === half2[i]) ? 1 : 0);
} else {
  const half = input.split('').slice(0, input.length / 2);
  const half2 = input
    .split('')
    .slice(input.length / 2)
    .reverse();

  console.log(half.every((v, i) => v === half2[i]) ? 1 : 0);
}
