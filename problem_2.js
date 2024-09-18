function sumOfPositive(nums) {
    let sum = 0
    for (element of nums)
        if (element > 0) {
            sum += element
        }
    return sum
}

nums = [1, -4, 7, 12]

answer = sumOfPositive(nums)
console.log(answer)