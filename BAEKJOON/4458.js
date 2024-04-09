const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split('').filter((v) => v !== '\r');
  input[i][0] = input[i][0].toUpperCase();
  console.log(input[i].join(''));
}
