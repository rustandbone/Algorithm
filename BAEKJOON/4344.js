const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

input.forEach((v) => {
  const [count, ...grade] = v.split(' ');

  const average = grade.reduce((acc, cur) => acc + +cur, 0) / count;

  const overAverage = grade.filter((v) => +v > average).length;

  console.log(`${((overAverage / count) * 100).toFixed(3)}%`);
});
