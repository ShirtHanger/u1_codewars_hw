/*Used this to test code before pasting it in each answer
I decided to leave the line of code I used to test out the .join() function
that I googled (https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place)*/

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