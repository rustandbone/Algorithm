const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.trim());

const [songsNum, questionsNum] = input[0].split(' ').map(Number);

const songs = {};

const songsArr = input.slice(1, songsNum + 1);
const questions = input.slice(songsNum + 1);

songsArr.forEach((song) => {
  const [, title, ...code] = song.split(' ');
  songs[title] = code.slice(0, 3).join(' ');
});

questions.forEach((question) => {
  const titleList = [];

  Object.entries(songs).forEach(([title, code]) => {
    if (code.includes(question)) {
      titleList.push(title);
    }
  });

  titleList.length === 0
    ? console.log('!')
    : titleList.length > 1
    ? console.log('?')
    : console.log(titleList[0]);
});