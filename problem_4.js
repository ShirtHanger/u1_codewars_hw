function sumOfArray(nums) {
    let sum = 0
    for (element of nums)
        sum += element
    return sum
}

nums = [1, 5.2, 4, 0, -1]


answer = sumOfArray(nums)
console.log(answer)