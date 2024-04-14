const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const queue = [];

const answer = input.map((v) => {
  v = v.trim();

  if (v.includes('push')) {
    const [, num] = v.split(' ');
    push(queue, num);
  }

  switch (v) {
    case 'pop':
      return pop(queue);
    case 'size':
      return size(queue);
    case 'empty':
      return empty(queue);
    case 'front':
      return front(queue);
    case 'back':
      return back(queue);
  }
});

console.log(answer.filter((v) => v !== undefined).join('\n'));

function push(arr, num) {
  arr.push(num);
}

function pop(arr) {
  return arr.length === 0 ? -1 : arr.shift();
}

function size(arr) {
  return arr.length;
}

function empty(arr) {
  return arr.length === 0 ? 1 : 0;
}

function front(arr) {
  return arr.length === 0 ? -1 : arr[0];
}

function back(arr) {
  return arr.length === 0 ? -1 : arr.at(-1);
}