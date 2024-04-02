const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [x, y] = input[0].split(' ').map(Number);

input.shift();

let xCount = 0;
let yCount = 0;

input.forEach((v) => {
  if (!v.includes('X')) xCount++;
});

for (let i = 0; i < y; i++) {
  const arr = [];
  for (let j = 0; j < x; j++) {
    arr.push(input[j][i]);
  }
  if (!arr.includes('X')) yCount++;
}

console.log(Math.max(xCount, yCount));
