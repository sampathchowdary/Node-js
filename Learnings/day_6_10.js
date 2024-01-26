console.log("\n")
console.log(" Day 6")

/*
    Loops
     -- For loop
    for(let i = 0; i <= 5; i++){
        console.log(i)
    }

     -- while loop 
    while(){

    }

     -- do while loop
    do {

    } while()
    
     -- for of loop
    for (const num of numbers) {
        console.log(num)
    }

     -- break 
     -- continue


*/
console.log('check about loops here')


console.log("==============-End-==============")

console.log("\n")
console.log(" Day 7")

/*
    Functions
    1. Regular function
        function square(n) { }
    2. Arrow function => it's alternative to write a function, it uses => instead of function keyword
        const square = n => { }

    3. Anonymous Function
        function without name, we need to keep inside parentheses. we have to assign to a variable to use it
        let anyFunc = (function() {  // ... });
            to call this (function() {  // ... }) (args) ;
    4. self invoking Functions
        anonymous functions, it has to call itself above line by passing args next to will call the function it self and store in variable for use
    

    

    unlimited number of parameters
    in function we use arguments objects to retrive data
    in arrow we use spread operator and any name
*/
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square()

function squares(num = 2) {
    return(num * num)
}
  
square()
console.log(squares(), squares(5))

// unlimited number of parameters
function sumAllNumfunc() {
    let sum = 0
    for(let num=0;num<arguments.length;num++){
        sum +=arguments[num]
    }
    return sum
}

console.log(sumAllNumfunc(1,2,3,4,5))

const sumAll = (...args) => {
    let sum = 0
    for(const num of args){
        sum +=num
    }
    return sum
}

console.log(sumAll(1,2,3,4,5))

// Anynomous function
let show = function () {
    console.log('Anonymous function');
};
let shows = (function() { console.log('Anonymous function')});

console.log(show, shows())

console.log("==============-End-==============")

console.log("\n")
console.log(" Day 8")

/*
    Variable Scope & types
   types 1. let, var, const
   scope 2. global, local

   var - function scoped
   let - block scoped (const value is immutable but let value can be changed)
   const - block scoped

    window global scope: any varibale declared without let/var/con any type is considered as global scope
    Globally declared variable can be accessed everywhere in the same file. (relative to file or block of code)

    object - immutable - modification possible
    const person = {} // key value pairs
    methods -- Object.assign(target, source) => copy of object, Object.keys(obj), Object.values(obj), Object.entries(obj) => both key,value pairs
            -- Object.hasOwnProperty('key') => boolean

*/
const rectangle = {
    length: 20,
    width: 20
}
rectangle.area = 'lw'
rectangle['perimeter'] = '2lw'

console.log(rectangle)

// object.assign 
const rect = Object.assign({}, rectangle)
rect.length = 40
console.log(rect)

console.log("==============-End-==============")


console.log("\n")
console.log(" Day 9")

/*
    Callback: A callback is a function passed as an argument to another function. Refer(https://www.w3schools.com/js/js_callback.asp)
    Higher order function : return function as a value

    setInterval : setInterval(callback, duration) -- works at every duration of time
    setTimeout : setTimeout(callback, duration)  -- works only once the duration is meet

    Functional Programming : instead of writing regular loop, js has lot of built in methods like
        forEach, map, filter, reduce, find, every, some, sort

        every :  Check if all the elements are similar in one aspect.
        find : Return the first element which satisfies the condition
        findIndex: Return the position of the first element which satisfies the condition
        some: Check if some of the elements are similar in one aspect.
        reduce: It takes a special function called a "reducer" that you provide. 
            This function is used to perform a calculation on each element of the array, one after another. The result of each calculation is passed to the next one. In the end, you get a single value as the final result.
            When the reducer runs for the first time, there's no previous result to pass along. If you provide an initial value, it is used as the starting point.
            If not, the first element of the array becomes the initial value, and the calculation starts from the second element instead of the first.

    Sorting 
        Strings: ar.sort() => works well for strings
        Numbers: In general it will consider as string to avoid that we need to make a callback  (see below example)


*/

// callback

function myDisplayer(some) {
    console.log('console from callback function', some)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
myCalculator(5, 5, myDisplayer);

// if we are sending an argument to time function we have to send in arrow function or it will throw error -- check below working examples
//  reference: (https://bobbyhadz.com/blog/settimeout-not-working-in-javascript)
// setInterval(() => myDisplayer(25), 1000) 
setInterval(myDisplayer, 1000, 25)  // this way works as well without arrow function
setTimeout(() => myDisplayer(35), 2000)

// forEach
// arr.forEach((element, index, arr) => console.log(index, element, arr))
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

// map
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log('map example', namesToUpperCase)

//filter
const countriesHaveFiveLetters = names.filter(
    (country) => country.length === 5
  )
  console.log('filter example', countriesHaveFiveLetters)

// reduce : read above about reducer

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);

// every :  Check if all the elements are similar in one aspect.
let areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
console.log('every example', areAllStr)

// find : Return the first element which satisfies the condition
let result = names.find((name) => name.length > 7)
console.log('find example', result)

// findIndex: Return the position of the first element which satisfies the condition
result = names.findIndex((name) => name.length > 7)
console.log('find index', result) 

// some: Check if some of the elements are similar in one aspect. 
areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log('some example', areAllStr)

// sorting

const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log('ascending order', numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log('descending order', numbers) //[100, 37, 9.81, 3.14]

console.log("==============-End-==============")

console.log("\n")
console.log(" Day 10")

/*
    Set
    = new Set()  => we can send array directly to make it as a set
    set.add(element)
    set.delete(element)
    set.size()
    set.has(element)
    set.clear() => remove all elements from a set
    
    union 
    c = [...a, ...b]
    C = new Set(c)

    Intersection => using filter
    Difference => using filter with other condition
    c= a.filter((n)=>b.has(n))
    C= new Set(c)

    Map
    = new Map() => key value pairs
    map.set(key,value)
    map.get(key) => value
    map.has(key) => boolean
    map.keys() => all keys map iterator object
    map.values() => all values map iterator object
    map.entries() => all key,value pairs in iterator object => a.next().value
    map.delete(key)

*/
const numbes = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbes)

console.log(setOfNumbers)

console.log("==============-End-==============")