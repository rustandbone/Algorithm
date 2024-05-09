const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  const v = input[i];

  if (v === '') {
    continue;
  }

  let [lower, upper, num, blank] = [0, 0, 0, 0];

  let sentence = v.split('');

  sentence.forEach((v) => {
    if (v >= 'a' && v <= 'z') lower++;
    else if (v >= 'A' && v <= 'Z') upper++;
    else if (v >= '0' && v <= '9') num++;
    else if (v === ' ') blank++;
  });

  console.log(lower, upper, num, blank);
}