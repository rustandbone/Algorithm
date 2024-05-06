const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

const grade = [];

const people = input.map((v) => v.split(' ').map(Number));

people.forEach((person) => {
  let count = 0;
  people.forEach((opponent) => {
    if (person[0] < opponent[0] && person[1] < opponent[1]) count++;
  });
  grade.push(count + 1);
});

console.log(grade.join(' '));