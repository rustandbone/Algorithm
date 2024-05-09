const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath, 'utf-8')
  .toString()
  .trim()
  .split(' ');

const [num, checkCount] = input.map(Number);

console.log(solution(num));

function solution(n) {
  let prime = new Array(n + 1).fill(true);
  prime[0] = false;
  prime[1] = false;

  let count = 0;
  let answer = 0;

  outer: for (let i = 2; i <= n; i++) {
    if (prime[i]) {
      count++;
      if (count === checkCount) {
        answer = i;
        break outer;
      }

      for (let j = i * i; j <= n; j += i) {
        if (!prime[j]) continue;
        prime[j] = false;
        count++;
        if (count === checkCount) {
          answer = j;
          break outer;
        }
      }
    }
  }

  return answer;
}