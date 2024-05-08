const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

const slide = input[0].split(' ').map(Number);

const uphill = [];
let check = 0;

slide.forEach((v, i) => {
  if (i === 0) return;

  const uphillNum = v - slide[i - 1];

  if (i === slide.length - 1) {
    if (uphillNum > 0) {
      check += uphillNum;
    }
    uphill.push(check);
    return;
  }

  if (uphillNum <= 0) {
    uphill.push(check);
    check = 0;
  } else {
    check += uphillNum;
  }
});

console.log(Math.max(...uphill));