// Iteration 1: Names and Input
let hacker1 = "Gonçalo"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Rodrigo"

console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 

if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let resultName = ``
for (let i=0; i<hacker1.length; i++) {
    let capitalLetter = `${hacker1[i].toUpperCase()}`
    
    if (i === 0) {
        resultName = `${resultName}${capitalLetter}`
    } else {
        resultName = `${resultName} ${capitalLetter}`
    }
}

console.log(resultName)

for (let i=hacker1.length; i>=0; i--) {
   resultName = `${resultName} ${hacker1[i]}`
    
}
console.log(resultName)

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
} else {
    console.log("Yo, the navigator goes first definitely.")
}
