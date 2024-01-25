const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [N] = input[0].split(' ').map(Number);

const basketArr = Array(N)
  .fill(1)
  .map((x, y) => x + y);

for (let i = 1; i < input.length; i++) {
  const [firstIndex, lastIndex] = input[i].split(' ');
  const reverseArr = basketArr.slice(firstIndex - 1, lastIndex).reverse();

  basketArr.splice(firstIndex - 1, lastIndex - firstIndex + 1, ...reverseArr);
}

console.log(...basketArr);
