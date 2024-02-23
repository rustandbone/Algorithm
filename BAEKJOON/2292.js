const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

console.log(countPath(+input));

function countPath(room) {
  let r = room;
  let count = 1;
  const HEXA = 6;

  while (r > 1) {
    r -= HEXA * count;
    count++;
  }
  return count;
}

// 1 7 19 37 61
// 6 12 18 24
