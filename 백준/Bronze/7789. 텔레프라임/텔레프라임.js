const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split(' ');

const [oldTel, newNum] = input;

const newTel = newNum + oldTel;

console.log(isPrime(+oldTel) && isPrime(+newTel) ? 'Yes' : 'No');

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}