console.log("JavaScript Learning")

console.log("\n")
console.log("Start Day 1")
/*
 setup + running js
 comments
 variables + console + typeof
 */
let name = 'Asabeneh', job = 'teacher', live = 'Finland', undef, num = 10
console.log(name, job, live,undef)
console.log(typeof(name), typeof(job), typeof(undef),typeof(num))
console.log("==============-End-==============")

console.log("\n")
console.log(" Day 2")
/*
    Data Types
    1. primitive - Numbers, Strings, Booleans, Null, Undefined, Symbol (once a datatype is created not able to modified)
    2. Non primitive - Objects, Arrays (not able to compare directly any two due to reference)
    Type casting

*/

let age = 25
const gravity = 9.81
const pi = 2.1413
console.log(age, 'gravity', gravity, "Pi values: ", pi)

// Math Object
console.log("math func PI", Math.PI,"round", Math.round(Math.PI),"round upper:", Math.round(gravity),"ceil:", Math.ceil(Math.PI),"floor:", Math.floor(Math.PI))
console.log("random:",Math.random(),"abs :", Math.abs(-10),"sqrt:", Math.sqrt(100), "power:", Math.pow(3, 2), "log 10", Math.log(10),"sin 0:", Math.sin(0), "cos 60", Math.cos(60))

// Strings
let FName = "Sampath Chowdary"
let LName = " Gundapuneni"
console.log(FName+" "+LName)
console.log(`${FName} age is ${age}`)
// \ to indicate continue to next line
/*
    \n : new Line
    \t : tab space
    \\ Back slash
    \' , \" : display quotes
*/

console.log("UPPERCASE: ", FName.toUpperCase(), " lowercase: ", FName.toLowerCase(), "subString: ", FName.substr(0,7), "Split: ", FName.split(" "))
console.log("Trim: ", LName.trim(''), " includes: ", LName.includes('pun'), LName.includes("GUNDA"), LName.replace('i', 'ii'), "index At", LName.charAt(3), " char code ASCI value: ", LName.charCodeAt(3))
// IndexOf , lastIndexOf , concat (strings) , startsWith('abc') , endsWith('abc') , search(substring) , string.repeat(10) (repeat same string 10 times)

/*
     String to Int
     1. parseInt
     2. Number
     3. + sign

     String to float
     1. parseFloat
     2. Number
     3. + sign

     Float to Int
     1. parseInt

*/

/*
                Exercise:

    let a = '10'
    let b = 10
    console.log(a==b, typeof(a), typeof(b), typeof(a)==typeof(b), typeof(+(a)) == typeof(b))

*/
console.log("==============-End-==============")

console.log("\n")
console.log(" Day 3")

/*
    Booleans
    1. Truthy values - expect zero, empty string
    2. Falsy values - 0, 0n, null, undefined, NaN
    Arithemetic operators : +, -, *, /, %. **, ++,--
    Comparision operators: ==, ===, !=, <,>,<=,>=
    Ternary operator

    Window Methods:
    1. alert()
    2. prompt('display text', 'opitional text) ==> let number = prompt('Enter number', 'number goes here') -- used to take input
    3. confirm('')  -- user confimation => let userchoice = confirm(' ') => gets user choice

    Date object:
    = new Date()
    getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()

*/

const now = new Date()
console.log(now, now.getFullYear(), now.getMonth(), now.getDate(), now.getDay(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds(), now.getTime(), now.getDay())
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(` Today Date & Time: ${date}/${month}/${year} ${hours}:${minutes}`) 
console.log("==============-End-==============")


console.log("\n")
console.log(" Day 4")

/*
    Conditionals
    1. If
    2. If else
    3. If else if else
    4. switch
    5. ternary operator
*/

// switch case:
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}


console.log("==============-End-==============")


console.log("\n")
console.log(" Day 5")



const ar = Array() // constructor
const tempAr = []

// Array can have items with different data types
tempAr[0] = 'Sam'
tempAr[1] = 100
tempAr[13] = true
tempAr[2] = {'cricket': 'india'}
tempAr.push('ssss')
tempAr.push('last')
console.log(tempAr, tempAr.length, tempAr.toString())
tempAr.pop()
tempAr.shift() // remove from beginning
tempAr.unshift('newSam') // add at beginning
console.log(tempAr.reverse(), tempAr.sort())

/*
    Methods to manipulate Array:
    1. Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

    const ar = Array() 
    ar.length
    ar.concat(ar2) => [ar , ar2]
    const eightXvalues = Array(8).fill('X') => fill [ eight places with X]
    ar.indexOf(element) => it will return index else -1
    ar.includes() => boolean
    Array.isArray(ar)  ==> boolean
    ar.toString() => converts to String
    ar.join(string) == > all elemts will be joined with the given string
    ar.shift() => pop from beginning
    push, pop = at the end
    ar.unshift() => add at the beginning



*/

const numbers = [1,2,3,4,5]
// slice => gives only that particular defined slice
console.log(numbers.slice()) // empty defines everything
console.log(numbers.slice(0, 4)) // start , end
console.log("splice", numbers)
// splice => removes that particular slice - if user provides data it will update that new info in that place
console.log(numbers.splice(0,1)) // starting position, no of items - it will remove 1
console.log(numbers.splice(0,1,9)) // it will update 1st element at 0th place to 9 here it is 2
console.log("splice", numbers)
console.log("==============-End-==============")
console.log("\n")





console.log("==============-SCSS-==============")

// SCSS -> Sassy CSS -> compiled to css ( manual conversion or gulp -> automatic convertion scss to css )

// Gulp : command line task runner in node.js (javascript)
/*
    
    uses:
    1. Variables   (using $ sign)
    2. Nesting
    3. you can import variable from files (partials)
    4. Mixins (reusable declarations)
    5. it allows functions

    @include derivative for mixins
    @exclude derivative for selectors
*/