const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const cowCount = {};
let count = 0;

input.forEach((cow) => {
  const [cowNum, position] = cow.split(' ').map(Number);
  if (cowCount[cowNum] === undefined) cowCount[cowNum] = position;
  else if (cowCount[cowNum] !== position) {
    cowCount[cowNum] = position;
    count++;
  }
});

console.log(count);