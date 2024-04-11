function solution(n) {
    let answer = 0;
    const check = n.toString(2).replaceAll(0, '').length;

    for(let i = n + 1; i <= 1_000_000; i++) {
        if(i.toString(2).replaceAll(0, '').length === check) {
            answer = i;
            break;
        }
    }
    
    return answer;
}