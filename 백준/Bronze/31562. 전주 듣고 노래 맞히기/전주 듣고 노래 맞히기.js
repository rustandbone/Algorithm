const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

const [songsNum] = input[0].split(' ').map(Number);

const codeMap = new Map();
const songsArr = input.slice(1, songsNum + 1);
const questions = input.slice(songsNum + 1);

songsArr.forEach((song) => {
  const [, title, ...code] = song.trim().split(' ');
  const codeKey = code.slice(0, 3).join(' ');
  if (!codeMap.has(codeKey)) {
    codeMap.set(codeKey, [title]);
  } else {
    codeMap.get(codeKey).push(title);
  }
});

questions.forEach((question) => {
  question = question.trim();
  const titleList = codeMap.get(question) || [];

  if (titleList.length === 0) {
    console.log('!');
  } else if (titleList.length > 1) {
    console.log('?');
  } else {
    console.log(titleList[0]);
  }
});