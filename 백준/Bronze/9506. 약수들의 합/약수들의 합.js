const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const number = input.slice(0, -1);

number.map((v) => {
  let divisor = [];

  makeDivisor(v, divisor);

  const sum = divisor.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  if (sum === +v) console.log(`${+v} = ${divisor.join(' + ')}`);
  else console.log(`${+v} is NOT perfect.`);
});

function makeDivisor(num, arr) {
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
}