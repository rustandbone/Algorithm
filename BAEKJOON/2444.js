const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

let star = [];

for (let i = 1; i <= input * 2 - 1; i++) {
  if (i <= input) {
    star.push(' '.repeat(input - i) + '*'.repeat(i * 2 - 1));
  }
}

console.log(star.join('\n') + '\n' + star.reverse().slice(1).join('\n'));
