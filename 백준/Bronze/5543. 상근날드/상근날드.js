const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [burger1, burger2, burger3, coke, cider] = input.map(Number);

console.log(Math.min(burger1, burger2, burger3) + Math.min(coke, cider) - 50);