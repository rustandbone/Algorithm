function solution(s) {
    let answer = s.split(" ").map((item) => {
        if(item === '') {
            return '';
        } else {
            item = item.toLowerCase().split('');
            item[0] = item[0].toUpperCase();
            return item.join('');
        }
    })
    
    return answer.join(' ');
}