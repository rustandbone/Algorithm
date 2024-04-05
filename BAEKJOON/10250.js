const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

input.forEach((v) => {
  const [h, w, n] = v.split(' ').map(Number);

  const heightRoom = Math.ceil(n / h);
  const widthRoom = n % h;

  console.log(
    `${widthRoom === 0 ? h : widthRoom}${
      heightRoom > 9 ? heightRoom : '0' + heightRoom
    }`
  );
});

//6 12 10
//402

//30 50 72
//1203
