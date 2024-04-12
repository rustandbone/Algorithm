const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length; i++) {
  if (input[i] === '***') break;
  input[i] = input[i]
    .split('')
    .filter((v) => v !== '\r')
    .reverse()
    .join('');
  console.log(input[i]);
}