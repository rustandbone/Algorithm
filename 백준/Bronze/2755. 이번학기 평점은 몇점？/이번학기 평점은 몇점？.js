const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

const grades = {
  'A+': 4.3,
  A0: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B0: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C0: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D0: 1.0,
  'D-': 0.7,
  F: 0.0,
};

let totalGrade = 0;

const calGrade = input.reduce((acc, cur) => {
  const [name, grade, score] = cur.trim().split(' ');
  totalGrade += +grade;
  acc += grades[score] * +grade;
  return acc;
}, 0);

let answer = (calGrade / totalGrade).toFixed(3);

if (answer.at(-1) >= 5) {
  let fixNum = answer.at(-2);
  console.log(answer.slice(0, 3) + ++fixNum);
} else {
  console.log(answer.slice(0, 4));
}