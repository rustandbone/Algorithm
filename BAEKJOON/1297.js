const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [d, h, w] = input.map(Number);

const di = d ** 2 / (w ** 2 + h ** 2);

console.log(Math.floor(Math.sqrt(di) * h), Math.floor(Math.sqrt(di) * w));

//D^2 = k(W^2 + H^2)
//k = D^2 / (W^2 + H^2)
