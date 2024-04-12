const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [a, b] = input.map(Number);

let answer = 0;

a = String(a).split('');
a.splice(a.length - 2, 2);

outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    a.splice(a.length, 2, i, j);
    if (a.join('') % b === 0) {
      answer = `${i}${j}`;
      break outer;
    }
    a.splice(a.length - 2, 2);
  }
}

console.log(answer);