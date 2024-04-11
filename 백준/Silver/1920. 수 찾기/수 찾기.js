const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const n = new Set(input[1].trim().split(' '));

const check = input[3].split(' ').map((number) => {
  return n.has(number) ? 1 : 0;
});

console.log(check.join('\n'));