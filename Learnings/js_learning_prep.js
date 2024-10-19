
/*

1. What is JavaScript?
    programming language on client side, basically useful for interactive functions on browser side, execute using browser engine.


2. Explain the difference between let, const, and var. 
    scope based on decleration, let & const are block scoped, const is immutable, but var can change, redeclare 

3. How does hoisting work in JavaScript?
    hoisting is like first we can use the variable/function, at the end we delare, but js engine will do the automatic lifting those to the top of scope

4. Describe the concept of closures.
    it allows functions to retain access to variables from their outer scope even after the outer function finished executing


5. Explain the event loop in JavaScript.
    generally every programming language works in following some patterns to execute, js uses event loop (how the events execute)
    it keeps a call stack to execute all the events, when an events like call backs or any functions that works async then they will keep in
    seperate stack to execute, once its execution is done, its call back/return is kept in main call stack, event loop continiously check for the 
    events, when a new event comes it will execute.

    The JavaScript event loop is a mechanism that manages the execution of asynchronous tasks. It continuously checks the call stack for functions to execute. 
    When an asynchronous operation completes, its callback is placed in the task queue, and the event loop schedules it to enter the call stack.

6. What is the difference between == = and ===?
    comparison with data, assignment, comparision with data + data type

7. How do you check the type of a variable in JavaScript?
    typeof(val)

8. What is the use of the this keyword in JavaScript?
    this keyword is completely depends on how you use, generally its a global scope, but if you declare this keyword inside a block/function its a block scoped


9. Explain the difference between function declaration and function expression.
    function declaration = just declaring the function like with some name & parameters
    function expression = full executable functions assigned to a variable / property


10. How does the setTimeout function work?
    settimeout function will run once it meet the required time, it works only once after the required time

*/

/*

11. What is a callback function?
    functions is passed as an argument to another function, basically has to execute after a certain task/tasks.

12. Explain the concept of a pure function.
    pure functions  will return same output for same input = basically not dependent on any external parameters

13. Describe the differences between function.call, function.apply, and function.bind.
    function.call = will call the function
    function.apply =  will call but take params as an array
    function.bind = function will be binded to that scope/funct/variable you can use later

14. What is the purpose of the arguments object in a function?
    we don't need to declare/identify any number of paramets, by using args object it provides flexibility in handling list of params

15. How do you create a closure in JavaScript?
    closure is created by defining a function inside another function, allowing the inner func to access outer func variables

16. What is the use of the bind method?
    by binding a method, we can use it at any point in that particular scope

17. What is the difference between a shallow copy and a deep copy?
    shallow copy = it will be assigned with a varible but its pointed to original value (nested objects)
    deep copy = it will create a whole new copy of the existing 

18. How does the call stack work in JavaScript?
    call stack in js is a data structure useful for executing the js functions/statements in a order (LIFO)

19. Explain the concept of function currying.
    breaking a single func with multiple arguments into, series of functions with related arguments


20. How can you avoid callback hell in JavaScript?
    call back hell (pyramid of doom) - continues nesting
    smaller functionss
    promises
    async/await

    simply write code properly / follow best practices


*/

/*

21. What is prototypal inheritance?
    inherits the object methods from its prototype

22. How do you create an object in JavaScript?
    using {}, new Object()

23. What is the purpose of the prototype property in JavaScript?
    it is useful to share object/method has that specific property to other objects

24. Explain the difference between Object.create and the constructor pattern.
    Object.create is will create object pattern will all proper set like defined functions prototypal properties
    constructor will return a object pattern, we need to explictly write functions to do so

25. How do you add a property to an object in JavaScript?
    we can assign directly the name with . notation or using "[]"  method

26. What is the hasOwnProperty method used for?
    used to identify where the object has that particular property or not

27. How can you prevent modification of object properties in JavaScript?
    using object.freeze method, we can prevent modification of properties

28. Describe the use of the new keyword.
    new keyword is used to create instance of a constructor function. it allocate memory, set protoype for the objects

29. Explain the concept of Object Destructuring in JavaScript. 
    to access specific values to varible form the object we can destructure by assign to some variables

30. What is the difference between null and undefined?
    null is a defined variable 
    undefined is a undefined variable

*/

/*

31. What is the DOM?
    Document object model is the main head/skeleton to the web application to display on a browser.
    it is useful to manipulate and interact with html/xml elements

32. How do you select elements with Vanilla JavaScript?
    getElementById, getElementByName, getelementByClassName, getElementByTagName

33. Explain event delegation in JavaScript.
    Event Deligation involves assining a single event listener to a common ancestor of multiple elements.

34. What is the purpose of the addEventListener method? 
    used to listen event, whenever an event triggers (human interactions)

35. How do you create and remove elements in the DOM? 
    using createElement, remove, removeChild

36. Explain the concept of event propagation.
    Flow of events in DOM hirerachy. capturing (downwards), bubbling (upwards)


37. How can you prevent the default behaviour of an event?
    for some events will in trigger render/action to prevent that we will use prevent default behaviour  to stop useless rendering

38. What is the purpose of the data- attribute in HTML?
    used to store/display data 

39. Describe the difference between innerHTML and textContent.
    innerHtml is used to indetify the specific tag
    textContent is used to identify the data that is available in the text space holder / text attribute

40. How do you handle asynchronous code in JavaScript?
    using async and await methods

*/

/*

41. How can you achieve encapsulation in JavaScript?
    using ES6 classes using private, protected and public

42. What is the purpose of the JavaScript fetch API? How does it differ from AJAX?
    JS fetch api is more flexible to call http requests, simple, promise-based, support for headers, chaining(catch,..), JSON



*/