const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

if (input % 10 !== 0) {
  console.log(-1);
} else {
  let time = input;

  const a = 300;
  const b = 60;
  const c = 10;

  let aCount = 0;
  let bCount = 0;
  let cCount = 0;

  while (time > 0) {
    if (time >= a) {
      aCount = Math.floor(time / a);
      time %= a;
    } else if (time >= b) {
      bCount = Math.floor(time / b);
      time %= b;
    } else {
      cCount = Math.floor(time / c);
      time %= c;
    }
  }
  
  console.log(aCount, bCount, cCount);
}