const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

let point = input.map(Number).sort((a, b) => a - b);

if (point.length === 0) {
  console.log(0);
} else {
  const deletePortion = Math.round(point.length * 0.15);

  point = point.slice(deletePortion, point.length - deletePortion);

  console.log(
    Math.round(point.reduce((acc, cur) => acc + cur, 0) / point.length)
  );
}