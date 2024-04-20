const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [start, end] = input.map(Number);

let primeCheck = new Array(end + 1).fill(true);
primeCheck[0] = false;
primeCheck[1] = false;

for (let i = 2; i <= Math.sqrt(end); i++) {
  if (primeCheck[i]) {
    for (let j = i * i; j <= end; j += i) {
      primeCheck[j] = false;
    }
  }
}

let primes = [];

for (let i = start; i <= end; i++) {
  if (primeCheck[i]) {
    primes.push(i);
  }
}

primes.length === 0
  ? console.log(-1)
  : console.log(primes.reduce((acc, cur) => acc + cur, 0) + '\n' + primes[0]);