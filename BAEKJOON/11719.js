const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').split('\n');

for (let i = 0; i < input.length; i++) {
  input[i] = input[i]
    .split('')
    .filter((v) => v !== '\r')
    .join('');
  console.log(input[i]);
}
