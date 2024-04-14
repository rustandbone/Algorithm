const filePath = process.platform === 'linux' ? 0 : './example.txt';

const input = require('fs').readFileSync(filePath, 'utf-8').trim().split('\n');

input.shift();

const deque = [];

const answer = input.map((v) => {
  v = v.trim().split(' ');

  switch (v[0]) {
    case 'push_front':
      push_front(deque, v[1]);
      break;
    case 'push_back':
      push_back(deque, v[1]);
      break;
    case 'pop_front':
      return pop_front(deque);
    case 'pop_back':
      return pop_back(deque);
    case 'size':
      return size(deque);
    case 'empty':
      return empty(deque);
    case 'front':
      return front(deque);
    case 'back':
      return back(deque);
  }
});

console.log(answer.filter((v) => v !== undefined).join('\n'));

function push_front(arr, num) {
  arr.unshift(num);
}

function push_back(arr, num) {
  arr.push(num);
}

function pop_front(arr) {
  return arr.length === 0 ? -1 : arr.shift();
}

function pop_back(arr) {
  return arr.length === 0 ? -1 : arr.pop();
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
