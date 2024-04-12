const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [price, count, money] = input;

let needMoney = price * count - money;

if (needMoney < 0) needMoney = 0;

console.log(needMoney);