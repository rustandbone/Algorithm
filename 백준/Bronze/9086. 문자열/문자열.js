const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = input.map((v) => v.trim());

for (let i = 1; i < arr.length; i++) {
  console.log(arr[i][0] + arr[i].at(-1));
}
