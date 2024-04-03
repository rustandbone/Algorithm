const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

let arr = input.map((v) => v.replace('\r', ''));

arr = Array.from(new Set(arr));

arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(arr.join('\n'));
