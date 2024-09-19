## Return Negative

```js
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
```

## Sum of Positive

```js
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
```

## Function 2

```js
function numSquared(num) {
    num *= num
    return num
}

answer = numSquared(9)
console.log(answer)
```

## Sum Arrays

```js
function sumOfArray(nums) {
    let sum = 0
    for (element of nums)
        sum += element
    return sum
}

nums = [1, 5.2, 4, 0, -1]


answer = sumOfArray(nums)
console.log(answer)
```

## Reversed Strings

```js

// Struggled with this until I discovered .join() on Stackoverflow
// https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place
// Rather than copy the code, I incorporated .join() into the loop I was already attemping to create

function reverseWord(string) {
    let junkArray = [] // Create array to store all individual letters
    for (element of string)
        junkArray.push(element) // Loop to fill array with letters
    junkArray.reverse() // Reverse order
    // Here is where I incorporated .join() into my function
    reversedString = junkArray.join('') // Turns new array into string...
    return reversedString
}

answer = reverseWord("funny")
console.log(answer)

// Previously, I attempted to use .toString() to turn the reversed array
// to a string, but I couldn't figure out how to get
// rid of the commas between each letter
```

## Reversed Strings .split() and .join() practice

```js
let agents = ['Agent 47', 'Jason bourne', 'The Killer', 'Deathstroke', 'The Bride']

let fleshyAbomination = agents.join('')

console.log(fleshyAbomination) // Prints a single string
// Agent 47Jason bourneThe KillerDeathstrokeThe Bride

let abominationWithTheLetterE = agents.join('e')

console.log(abominationWithTheLetterE) // Prints a string, with an e in between each array item
// Agent 47eJason bourneeThe KillereDeathstrokeeThe Bride

// I also saw .split(''), I played around with it after submitting homework. 
// Something I did with it

let curedAgents = fleshyAbomination.split('')

console.log(curedAgents) // Prints an array of each individual letter
/* (50) ['A', 'g', 'e', 'n', 't', ' ', '4', '7', 'J', 'a', 's', 'o', 'n', ' ', 
    'b', 'o', 'u', 'r', 'n', 'e', 'T', 'h', 'e', ' ', 
    'K', 'i', 'l', 'l', 'e', 'r', 
    'D', 'e', 'a', 't', 'h', 's', 't', 'r', 'o', 'k', 'e', 'T', 'h', 'e', ' 
    ', 'B', 'r', 'i', 'd', 'e'] */

curedAgentsWithoutLetterE = fleshyAbomination.split('e')

console.log(curedAgentsWithoutLetterE) // Prints a less crazy array, at every single 'e' it 
// deletes the E and seals off that portion of the string as an array item
/* (9) ['Ag', 'nt 47Jason bourn', 'Th', ' Kill', 'rD', 'athstrok', 'Th', ' Brid', ''] */
```