const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

let count = 0;

const vowel = ['a', 'e', 'i', 'o', 'u'];

input.split('').forEach((v) => {
  if (vowel.includes(v)) count++;
});

console.log(count);