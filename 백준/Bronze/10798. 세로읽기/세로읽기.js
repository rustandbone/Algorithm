const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let maxNum = 0;
let answer = '';

const arr = input.map((v) => v.split('').filter((v) => v !== ('\r' || ' ')));

arr.forEach((v) => {
  if (v.length > maxNum) maxNum = v.length;
});

for (let i = 0; i < maxNum; i++) {
  arr.map((v) => (v[i] ? (answer += v[i]) : (answer += '')));
}

console.log(answer);