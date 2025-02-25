const { response } = require("express")

console.log("\n")
console.log(" Day 16 ")
/*
    JSON - JavaScript Object Notation 
    light weight & easy to use alternate to XML
    JSON.parse() => json to object
    JSON.stringify() => object to JSON

 */


console.log("==============-End-==============")


console.log("\n")
console.log(" Day 17 ")
/*

    Web Storage:
    Cookies : we have to send these in headers in every request

    sessionStorage: available in browser, will be lost once we close that tab
    window.sessionStorage
    localStorage: available even after close/reopen, data shared between tabs and windows
    window.localStorage
    methods: localStorage.clear() => to remove everything from local storage
    localStorage.setIterm() => stores data key, value pair
    localStorage.getITem() => takes key as parameter to give value
    localStorage.removeItem() => remove item from local storage
    localStorage.key() => display data store in localstorage, index as parameter

 */

    // localStorage.setItem('key', 'value')
    // Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.
    // localStorage.getItem('key')



console.log("==============-End-==============")

console.log("\n")
console.log(" Day 18 ")
/*

    // Promise : A way to handle asynchronous operations in js => return with success or failure
    // pending : initial state, neither fulfilled nor rejected 
    // fullfilled : completed successfully
    // rejected : operation failed with a reason(error)
    => once any operation is done it will call the attached handler to execute the code

    Promise.prototype.then(), .catch()
    // Promises can be used to replace callbacks in many scenarios, providing a more elegant and maintainable solution.
    // A promise can be settled (resolved or rejected) with a value, and the then() and catch() methods can be used to handle the success or failure of the asynchronous operation.

    promise.all() => all promises has to pass
    
    Fetch API
    Interface to fetch resources, fetch method to request url, API

    async and await are built on top of promise
    con in using async await - we can only call await under async functions (some cases we don't need to convert the whole function to async)

    async : infront of function will return a promise
    await : to access data from promise we use await

 */

    // const promise = new Promise((resolve, reject) => {
    //     resolve('success')
    //     reject('failure')
    //   })

    // const url = '...'
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {console.log(data)})
    // .catch(error => console.error(error))



console.log("==============-End-==============")

console.log("\n")
console.log(" Day 19 ")
/*

    Closure
    We can write as many inner functions as we want in a function (outer function)
    If inner function access the variables of outer function then it is called closure


 */

    function outerFunction() {
        let count = 0;
        function innerFunction() {
            count++
            return count
        }
    
        return innerFunction
    }
    const innerFunc = outerFunction()
    
    console.log(innerFunc()) // accessing outer variable count inside other function => closure
    console.log(innerFunc())

console.log("==============-End-==============")

console.log("\n")
console.log(" Day 20 ")
/*

    // style guide - standards
    1. Airbnb standards
    2. Javascript standards
    3. Google Standards

 */


console.log("==============-End-==============")

