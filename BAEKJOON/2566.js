const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const max = {
  column: 0,
  row: 0,
  num: 0,
};

input.map((v, i) => {
  const columnIndex = i;
  const rowArr = v.split(' ').map(Number);
  const rowMax = Math.max(...rowArr);

  if (rowMax >= max.num) {
    max.num = rowMax;
    max.column = columnIndex + 1;
    max.row = rowArr.indexOf(rowMax) + 1;
  }
});

console.log(max.num + '\n' + max.column, max.row);
