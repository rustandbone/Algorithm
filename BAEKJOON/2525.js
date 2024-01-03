const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

let a = parseInt(input[0].split(' ')[0]);
let b = parseInt(input[0].split(' ')[1]);
let c = parseInt(input[1]);

let hour = a;
let minute = b + c;

if (minute / 60 >= 1) hour = a + parseInt(minute / 60);
if (hour >= 24) hour -= 24;

minute %= 60;

console.log(hour, minute);
