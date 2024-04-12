const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

let prize = [];

input.forEach((v) => {
  const arr = v.split(' ');
  solution(arr.map(Number));
});

console.log(Math.max(...prize));

function solution(arr) {
  const set = new Set(arr);

  if (set.size === 3) {
    prize.push(Math.max(...set) * 100);
  } else if (set.size === 1) {
    prize.push(10000 + arr[0] * 1000);
  } else {
    let count = {};
    arr.forEach((v) => {
      count[v] = (count[v] || 0) + 1;
    });
    for (let key in count) {
      if (count[key] === 2) {
        prize.push(1000 + key * 100);
      }
    }
  }
}