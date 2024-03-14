const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

let answer = 1;

for (let i = 1; i <= Number(input); i++) {
  answer = answer * i;
}

console.log(answer);
