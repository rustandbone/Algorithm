const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

const equationA = input.slice(0, 3);
const equationB = input.slice(3);

const [X, Y] = getXY(equationA, equationB);

console.log(`${X} ${Y}`);

function getXY(a, b) {
  const eqA = a.map((v) => (v *= b[1]));
  const eqB = b.map((v) => (v *= a[1]));

  const eqC = a.map((v) => (v *= b[0]));
  const eqD = b.map((v) => (v *= a[0]));

  const x = eqA.map((v, i) => v - eqB[i]);
  const y = eqC.map((v, i) => v - eqD[i]);

  return [x[2] / x[0], y[2] / y[1]];
}