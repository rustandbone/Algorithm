const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  let totalCount = 0;
  let count = 0;

  input[i].split('').forEach((e) => {
    if (e === 'O') {
      count++;
      totalCount += count;
    }
    if (e === 'X') {
      count = 0;
    }
  });
  console.log(totalCount);
}
