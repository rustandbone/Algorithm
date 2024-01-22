const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ').map((e) => +e);

const basket = {};

for (let i = 1; i <= N; i++) {
  basket[i] = 0;
}

const putBasket = input.slice(1);

putBasket.map((e) => {
  const [firstBasket, LastBasket, ballNumber] = e.split(' ');

  for (let i = +firstBasket; i <= +LastBasket; i++) {
    basket[i] = +ballNumber;
  }
});

console.log(...Object.values(basket));
