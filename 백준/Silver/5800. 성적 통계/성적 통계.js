const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

input.forEach((v, i) => {
  const [num, ...point] = v.split(' ').map(Number);
  const sort = point.sort((a, b) => a - b);
  let gap = 0;

  sort.forEach((value, index) => {
    if (index !== 0) {
      gap = Math.max(gap, value - sort[index - 1]);
    }
  });

  console.log(`Class ${i + 1}`);
  console.log(`Max ${sort[num - 1]}, Min ${sort[0]}, Largest gap ${gap}`);
});