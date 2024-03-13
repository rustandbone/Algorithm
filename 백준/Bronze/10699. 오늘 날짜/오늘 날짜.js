const now = new Date(); // 현재 시간
const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // 현재 시간을 utc로 변환한 밀리세컨드값
const K_TIME_DIFF = 9 * 60 * 60 * 1000;
const K_NOW = new Date(utcNow + K_TIME_DIFF);

let month = K_NOW.getMonth() + 1;
let date = K_NOW.getDate();

if (month < 10) {
  month = `0${month}`;
}

if (date < 10) {
  date = `0${date}`;
}

console.log(`${K_NOW.getFullYear()}-${month}-${date}`);