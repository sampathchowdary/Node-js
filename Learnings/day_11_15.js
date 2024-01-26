console.log("\n")
console.log(" Day 11")

/*

    Destructuring: const obj = { 'name' : 'sampath', 'age':25} => let { name, age:personage, school= 'uhcl', aaa } = obj

    Spread or Rest operator (...)


*/

// Destructuring
const obj = { 'name' : 'sampath', 'age':25}
let { name, age:personage, school= 'uhcl', aaa } = obj
console.log(name , personage, school, aaa, obj.name)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)

// Rest + destructuring
const numbers = [1, 2, 3,4,5,6,7]
let [numOne, , numThree, ...rest] = numbers //2 is omitted
console.log(numOne, numThree,rest)

// spread operator to copy
const tech = {...frontEnd, ...backEnd} // target, source => updated with source elements 
console.log(tech)
console.log([...frontEnd, ...backEnd])





console.log("==============-End-==============")

console.log("\n")
console.log(" Day 12")

/*

  Regular Expression creation :  https://30dayjavascript.js.org/12-day/#replacing-a-substring
  new RegExp(pattern)
  Methods
  pattern.test(string) => boolean, string.match(pattern) => array of all matches, string.search(pattern) => index, string.replace(pattern, newtext) => returns updated string


*/

console.log("==============-End-==============")

console.log("\n")
console.log(" Day 13")

/*
    Console methods
    1. console.log() => substitution -- %d, %s number , string , we can style logging messages using css 
    2. console.warn() => it displays warning
    3. console.error() => shows error messages
    4. console.table() => display output in table format
    5. console.time() => display time end when we call same with timeend - below example available
    6. console.info() => displays information
    7. console.assert(check, message) => check the assetion and give print message output on console if check satisfies
    8. console.group() => it logs different longs into a single group -- group(groupname) then you can log in general way at the end console.groupend() to end the group messages
    9. console.count() => it prints number of times its called
    10.console.clear() => cleans the browser console

*/

console.time('Regular for loop')
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
console.timeEnd('Regular for loop')


console.log("==============-End-==============")

console.log("\n")
console.log(" Day 14")

/*

    Error Handling
    try {
        // code that may throw an error
    } catch (err) {
        // code to be executed if an error occurs
    } finally {
        // code to be executed regardless of an error occurs or not
    }

    Error Types:
    1. ReferenceError : An illegal reference has occured
    2. SyntaxError : 
    3. TypeError : 


*/

console.log("==============-End-==============")

console.log("\n")
console.log(" Day 15")

/*

    class creation for object

    class + CamelCase name 
    use constructor for adding data using this keyword

    check get & set functions and calling of those functions diff from java
    static keyword is used to call utility functions / static methods

    Inheritance using extends keyword
    class Student extends Person {}


*/

class Person {
    constructor(firstName, lastName, age=0, country, city='Houston') {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getAge() {
        return this.age
    }
    
    set setAge(age) {
        this.age += age
    }
}
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2 = new Person('Asabeneh', 'Yetayeh', 0,'Finland', 'Helsinki')
  console.log(person1)
  console.log(person2.getFullName())
  person2.setAge = 11
  console.log(person2.getAge)


//   Inheritance using extends keyword
//   class Student extends Person {}
//   overriding methods
class Student extends Person {
     
    getFullDetails() {
        const fullName = this.firstName + ' ' + this.lastName + " age "+this.age + " he is "+ this.gender
        return fullName
    }

    constructor(firstName, lastName, age,country,city, gender){
        super(firstName,lastName,age,country,city)
        this.gender = gender
    }


}
  const stu = new Student('Asabeneh', 'Yetayeh', 25, 'Finland', 'Helsinki', 'Male')
  console.log(stu.getFullDetails())
  

console.log("==============-End-==============")