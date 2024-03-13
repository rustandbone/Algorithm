const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [a, doc] = input;

console.log(a.length >= doc.length ? 'go' : 'no');