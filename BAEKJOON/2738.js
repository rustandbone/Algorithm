const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ');

const A = [];
const B = [];

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(' ');
  if (i <= N) A.push(arr);
  if (i > N) B.push(arr);
}

const newArr = A.map((v, i) => {
  const arr = v.map((value, index) => {
    return +value + +B[i][index];
  });
  return arr;
});

console.log(newArr.join('\n').replaceAll(',', ' '));
