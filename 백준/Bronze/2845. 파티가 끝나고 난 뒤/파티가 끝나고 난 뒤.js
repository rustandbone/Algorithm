const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [info, newspaper] = input;

let actualPeople = info.split(' ')[0] * info.split(' ')[1];

console.log(
  newspaper
    .split(' ')
    .map((v) => v - actualPeople)
    .join(' ')
);