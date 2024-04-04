const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

const member = input
  .map((v) => v.trim().split(' '))
  .sort((a, b) => a[0] - b[0]);

console.log(member.map((v) => v.join(' ')).join('\n'));