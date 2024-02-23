const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

const base = 2;

console.log(countDots(base, +input) ** 2);

function countDots(base, step) {
  let s = step;
  let dots = base;
  while (s > 0) {
    dots = dots * 2 - 1;
    s--;
  }
  return dots;
}

// 1 3 9
// 2 5 25
// 3 9 81
// 4 17 289
// 5 33 1089
