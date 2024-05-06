const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const points = [];

for (let i = 0; i < input.length; i++) {
  if (points[i - 1] >= 100) break;

  if (i === 0) points.push(input[i]);
  else points.push(input[i] + points[i - 1]);
}

Math.abs(points.at(-1) - 100) > Math.abs(points.at(-2) - 100)
  ? console.log(points.at(-2))
  : console.log(points.at(-1));