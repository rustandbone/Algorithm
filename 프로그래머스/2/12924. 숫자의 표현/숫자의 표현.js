function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if(i * (i + 1) / 2 > n) break;
        
        if((n - (i * (i - 1) / 2)) % i === 0) {
            answer++;
        }
    }
    return answer;
}
