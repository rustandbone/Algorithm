const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split(' ')
  .map(BigInt);

const [p, k] = input;

let answer = 'GOOD';

makePrime(Number(k)).some((v, i) => {
  if (!v) return false;
  if (p % BigInt(i) === 0n) {
    answer = `BAD ${Number(i)}`;
    return true;
  }
});

console.log(answer);

function makePrime(n) {
  let primeCheck = new Array(n).fill(true);
  primeCheck[0] = false;
  primeCheck[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primeCheck[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeCheck[j] = false;
      }
    }
  }

  return primeCheck;
}