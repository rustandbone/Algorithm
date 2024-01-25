const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const submitNum = input.map((v) => +v);

const attendanceNum = Array(30)
  .fill(1)
  .map((x, y) => x + y);

console.log(attendanceNum.filter((v) => !submitNum.includes(v)).join('\n'));
