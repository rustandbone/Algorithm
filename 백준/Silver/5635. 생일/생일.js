const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split('\n');

input.shift();

const studentInfo = {};

input.forEach((student) => {
  const [name, ...birthday] = student.trim().split(' ');
  studentInfo[name] = birthday.map(Number);
});

const answer = Object.entries(studentInfo).sort((a, b) => {
  const [nameA, birthdayA] = a;
  const [nameB, birthdayB] = b;

  if (birthdayA[2] === birthdayB[2]) {
    if (birthdayA[1] === birthdayB[1]) {
      return birthdayA[0] - birthdayB[0];
    }
    return birthdayA[1] - birthdayB[1];
  }

  return birthdayA[2] - birthdayB[2];
});

console.log(answer.at(-1)[0] + '\n' + answer[0][0]);