
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