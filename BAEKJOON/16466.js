const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();
const num = input[0].split(' ');

const end = Math.max(...num);
const arr = new Array(end + 1).fill(false);

num.forEach((v) => {
  arr[v] = true;
});

for (let i = 1; i <= arr.leng; i++) {
  if (!arr[i]) {
    console.log(i);
    break;
  }
}
