// Debounce 

console.log('=====  Debounce  =====')

/*
    Debounce function makes sure that your code is only triggered once per user input. Search box suggestions, 
    text-field auto-saves, and eliminating double-button clicks are all use cases for debounce.

    Refer: https://www.freecodecamp.org/news/javascript-debounce-example/
*/

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
  const processChange = debounce(() => saveInput());
  console.log(processChange())


console.log('=====  Throttling  =====')

/*

    Throttling is a technique that limits how often a function can be called in a given period of time.
    It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy
    or expensive operations, such as animations, scrolling, resizing, fetching data, etc.

    For example, if you have a function that fetches some data from an API every time the user scrolls the page,
    you might want to throttle it so that it only makes one request every second, instead of making hundreds of requests as the user scrolls.

    Both debounce and throttle techniques are valuable tools in managing performance
     and preventing excessive function calls in response to rapid or continuous events.
    The choice between them depends on the specific use case and desired behavior for your application

*/

// Define a function that fetches some data from an API
function fetchData() {
    console.log("Fetching data...");
    // Simulate an API call with a random delay
    setTimeout(() => {
      console.log("Data fetched!");
    }, Math.random() * 1000);
  }
  
  // Throttle the fetchData function with a delay of 5000 ms
  const throttledFetchData = throttle(fetchData, 5000);
  
  // Add an event listener to the window scroll event that calls the throttledFetchData function
  window.addEventListener("scroll", throttledFetchData);


console.log('=====  Controlled Components Vs uncontrolled Components  =====')

/*
    Controlled components in React
        Controlled components in React are those in which form data is handled by the component’s state.
    
    UnControlled Components in React
        Uncontrolled components are those for which the form data is handled by the DOM itself. 
        “Uncontrolled” refers to the fact that these components are not controlled by React state.
*/

/*
            Controlled Components

        const [name, setName] = useState("");
        function onSubmit() {
            console.log("Name value: " + name);
        }
        <form onSubmit={onSubmit}>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        </form>
*/


/*
            Uncontrolled Component
      function onSubmit() {
        console.log("Name value: " + window.name.value);
        console.log("Email value: " + window.email.value);
    }
    return (
        <form onSubmit={onSubmit}>
        <input type="text" name="name" id="name" required />
        <input type="email" name="email" id="email" required />
        <input type="submit" value="Submit" />
        </form>
    );
*/

console.log('=====  Refs  =====')

/*
        When you want a component to “remember” some information, but you don’t want that information to trigger new renders, 
        you can use a ref.

        import { useRef } from 'react';
        const ref = useRef(0) => here initial value is 0
        -> we can define any value as we need like int/string/bool/object
        -> value is accessed using ref.current

*/

console.log('=====  WeakMap  =====')

/*

    A WeakMap is a collection of key-value pairs, similar to a regular Map in JavaScript.
    It has a specific feature: the keys must be objects, and the references to these objects in the WeakMap 
    do not prevent the objects from being garbage collected if there are no other references to them.

    ==> key is an object, if there is no value assigned to that key it will be added to grabage

    Usefulness:
    Useful when you want to associate additional data with objects without preventing those objects
    from being cleaned up by the garbage collector.
    Provides a way to create private, non-enumerable properties for objects.`

*/
console.log('=====  WeakSet  =====')

/*

    A WeakSet is a collection of unique values, similar to a regular Set.
    Like WeakMap, it only accepts objects as values, and the references to these objects
    do not prevent them from being garbage collected.

    ==> similar to set but it collects only unique objects

    Usefulness:
    Useful when you want to store a set of objects without preventing those objects from being garbage collected.
    Ensures uniqueness among the objects in the set

*/

console.log('=====  React Router  =====')
/*

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

*/

console.log('=====  React memo  =====')

/*

        Imagine you have a function that takes some inputs and produces an output.
        Memoization is like having a magic notebook where you write down the inputs and the corresponding outputs.
        The next time you're asked for the result with the same inputs, instead of recalculating, you check your notebook.

        Now, in React, components are like functions. They take some inputs (props) and produce an output.
        When a component renders, React checks if its inputs (props) have changed.
        If they haven't changed, React usually re-renders the component, even if the output is same.
        But by using memo it will display the cached component, it only rerender when a different props is sent.


        const MyComponent = (props) => {
            console.log('Rendering MyComponent');
            return <div>{props.value}</div>;
        };

        // Memoized component using React.memo
        const MemoizedComponent = React.memo(MyComponent);

*/

console.log('=====  This key word =====')

/*

        In JavaScript, the this keyword refers to the current execution context,
        or more specifically, the object that the function is being called on 
        or the object that the function belongs to. The behavior of this depends on how a function is called.

        => In an object method, this refers to the object.
        => Alone, this refers to the global object.
        => In a function, this refers to the global object.
        => In a function, in strict mode, this is undefined.
        => In an event, this refers to the element that received the event.
        => Methods like call(), apply(), and bind() can refer this to any object.

*/

console.log('=====  Currying in JS =====')

/*

    Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.

    uses:
    Currying is a checking method to make sure that you get everything you need before you proceed
    It helps you to avoid passing the same variable again and again
    It divides your function into multiple smaller functions that can handle one responsibility.
    This makes your function pure and less prone to errors and side effects


    Noncurried version//
    const add = (a, b, c)=>{
        return a+ b + c
    }
    console.log(add(2, 3, 5)) // 10



    Curried version//
    const addCurry =(a) => {
        return (b)=>{
            return (c)=>{
                return a+b+c
            }
        }
    }
    console.log(addCurry(2)(3)(5)) // 10

    // example
    const sendRequest = greet => name => message =>
    `${greet} ${name}, ${message}`
    sendRequest('Hello')('John')('Please can you add me to your Linkedin network?')


*/


