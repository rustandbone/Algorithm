const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

function numChanger(str) {
  const num = str.charCodeAt();

  if (num >= 65 && num <= 67) {
    return 3;
  }
  if (num >= 68 && num <= 70) {
    return 4;
  }
  if (num >= 71 && num <= 73) {
    return 5;
  }
  if (num >= 74 && num <= 76) {
    return 6;
  }
  if (num >= 77 && num <= 79) {
    return 7;
  }
  if (num >= 80 && num <= 83) {
    return 8;
  }
  if (num >= 84 && num <= 86) {
    return 9;
  }
  if (num >= 87 && num <= 90) {
    return 10;
  }
}

console.log(input.split('').reduce((acc, cur) => acc + numChanger(cur), 0));
