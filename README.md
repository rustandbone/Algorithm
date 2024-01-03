# Algorithm

This is a auto push repository for Baekjoon Online Judge created with [BaekjoonHub](https://github.com/BaekjoonHub/BaekjoonHub).

## Node.js fs모듈 사용법

### 입력값(input)의 종류에 따른 fs 모듈 사용법

#### 입력값이 하나일 때

```JS
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

/*
예시>
3
*/
```

#### 입력값 사이에 공백에 끼여있을 때

```JS
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

/*
예시>
1 3 5

input = ['1', '3', '5']
*/
```

#### 여러 줄로 입력값이 나열되어 있을 때

```JS
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

/*
예시>
1
2

input = ['1', '2']
*/
```

#### 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때

```JS
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const [n,...arr] = input;

/*
예시>
3
1 2 3

n = '3'
arr = ['1', '2', '3']
*/
```

#### parseInt로 입력값을 정수로 만들고 싶을 경우

```JS
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const [n,...arr] = input;
n = parseInt(n);
arr = arr.map((item) => parseInt(item));

/*
예시>
3
1 2 3

n = 3
arr = [1, 2, 3]
*/
```

#### 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때

```JS
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n,...arr] = input;

/*
예시>
2
4
1

n = '2'
arr = ['4', '1']
*/
```

[참고](https://valueengine.tistory.com/2)
