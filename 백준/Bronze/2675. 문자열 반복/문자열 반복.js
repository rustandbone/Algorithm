const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const answer = [];

for (let i = 1; i < input.length; i++) {
  const [repeat, word] = input[i].trim().split(' ');

  answer.push(
    word
      .split('')
      .map((v) => v.repeat(repeat))
      .join('')
  );
}

console.log(answer.join('\n'));
