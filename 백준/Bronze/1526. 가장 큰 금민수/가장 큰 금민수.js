const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').toString().trim();

const num = +input;
let answer = null;

for (let i = num; i >= 4; i--) {
  const numSet = new Set(i.toString().split(''));

  if (numSet.size === 2) {
    if (numSet.has('4') && numSet.has('7')) {
      answer = i;
      break;
    }
  } else if (numSet.size === 1) {
    if (numSet.has('4') || numSet.has('7')) {
      answer = i;
      break;
    }
  }
}

console.log(answer);