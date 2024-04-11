const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const arr = input.map(Number);

const average = Math.round(arr.reduce((acc, cur) => acc + cur) / arr.length);
const median = arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];

console.log(average);
console.log(median);
