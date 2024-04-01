const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [a, b] = input.map((v) => Rev(v));

console.log(Rev(String(a + b)));

function Rev(x) {
  const reversedNum = x.split('').reverse().join('');
  return +reversedNum;
}
