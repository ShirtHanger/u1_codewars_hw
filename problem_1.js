

function makeNegative(num) {
    if (num <= 0) {
        return num
    } else {
        num *= -1
        return num
    }
}

answer = makeNegative(7)
console.log(answer)