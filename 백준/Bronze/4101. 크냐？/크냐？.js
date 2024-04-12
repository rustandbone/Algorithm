const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

input.forEach((v) => {
  const [a, b] = v.split(' ').map(Number);
  console.log(a > b ? 'Yes' : 'No');
});