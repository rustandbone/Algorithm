const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

let [dayPlus, dayMinus, goal] = input;

let day = 0;

let dayClimbing = dayPlus - dayMinus;
day = (goal - dayMinus) / dayClimbing;

console.log(Math.ceil(day));