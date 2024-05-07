const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').toString().trim();

const num = +input;
let answer = null;

for (let i = num; i >= 4; i--) {
  let num = i.toString();
  num = num.replaceAll('4', '').replaceAll('7', '');
  if (num === '') {
    answer = i;
    break;
  }
}

console.log(answer);