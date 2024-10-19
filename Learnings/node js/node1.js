console.log(' ======= Node js ========')

/*
    Benefits:
    1. Asynchronous
    2. Event driven
    3. Single threaded, but highly scalable : event looping
    4. very fast - js v8
    5. No buffering - data will be sent as chunks  (we have the buffer when we have to deal with binary data)

*/

console.log(' ======= how node works internally ========')
/*

    Node js uses v8 runtime engine same as chrome,
    it compiles js code directly into assembly level code
    compiler : dissects the js code
    optimizer: crankshaft create abstract syntax tree later to SSA (static single assignment)
    garbage collector: it removes unused and dead objects. (runs automatically taken care by v8)
    base library c++ (http, socket, fs, net, dns, socket.io.http)
    libuv/libio -> helps to run asynchronous I/O operation and event loops, thread allocation for i/o

    Event loop decide when which code has to run, workers(thread pool) helps to work I/O operations

*/


console.log(' ======= Node JS Architecture ========')

/* 

    node js event driven and single threaded with background workers. event loop is single threaded but most of the i/o works on seperate threads, this won't block main thread.

    node js event loop keeps running, whenever any async request comes in event loop, if it is free it will execute and return back 
    for multiple async requests then it pushed all requests to event queue and start processing request one by one without blocking the code execution

    Event loop (queue of callback functions)
    keeps running and executing as long as active process in memory
    it has 6 phases, runs in a loop 
    1. Timers => setTimeout(), setInterval will execute 
    2. pending I/O callbacks => executes callbacks deferred to the next loop iteration
    3. waiting / preparation => used for internally
    4. I/O polling  => managing functions in queue to exexute synchronousy till empty, if any set immediate is not available
    5. SetImmediate() callbacks => setImmediate(), its callbacks are executed, regardless of how many things are present
    6. Close events => all close events (process.exit())

    worker threads:
    



*/

console.log(' ======= Event driven architecture ========')

/*
    Event-driven 
    node js is having event loop on single thread and there is always one event running and there will be one handle to handle that event without interruption
    it performs two actions
    1. event detection   ==> occurance of some event human interaction, system trigger etc
    2. event handler triggering ==> when some event dectected, some specific action has to trigger for that event




        An event-driven architecture uses events to trigger and communicate between decoupled services and is common in modern applications built with microservices.
        An event is a change in state, or an update, like an item being placed in a shopping cart on an e-commerce website.
        Event-driven architectures have three key components: 
        event producers, event routers, and event consumers. 
        A producer publishes an event to the router, which filters and pushes the events to consumers. 
        Producer services and consumer services are decoupled, which allows them to be scaled, updated, and deployed independently.
*/




/*
    Event emitter is synchronous, it blocks others things to execute

    when event emitter is synchronous, how nodejs archives async capability ?
    In Node.js, while the core of the event emitter is synchronous, the overall asynchronous capability is achieved through a non-blocking, event-driven architecture. 
    key elemnts that contribute to async behaviour is 
    1. call back, promice, event looping, async await, event emitters with async patterns, libuv

*/

/*
    Stream chaining in Node js
    sending of one output to other pipe input, here we use .pipe(s2).pipe(s2)
    linux (a | b)
    creating steams : fs.createWriteStream(), fs.createReadStream()

*/

/*
    Blocking call in node.js => synchronous call, once the process is completely then it will unblock

*/

/*
    Event loop

    => Event Queue  (stack)   => some operations(blocking) to work as non blocking => worker threads


         event queue it will do the call back action   <= once operations is done it will return call back to event queue        <=
*/



console.log('=========libuv==============')
/*
    Libuv
    libuv is a cross-platform c library that provides support for an asynchronous, event-driven programming.
    its job is to provide event loop and callback based notification i/o and other activities.
    libuv offers timers, non-blocking network support, async file access, child process and more.

    libuv manages thread pool(workers) to handle costly operations that may block the event loop, by offloading these operations
    nodejs is hight available and responive even under heavy workloads


    default size of libuv's thread pool is 4 (UV_THREADPOOL_SIZE => max 128)

*/

console.log(' ======= ========')

/*

for(const file of files) {
    const data = await fs.readFile(file, 'utf8');
    console.log(data);
}
*/

console.log(' =======  Garbage Collection ========')

/*
    Two types of garbage collection in node.js
    1. Young generation collection: short lived, frequent, quickly idenify and garbage them
    2. Old Generation collection: long lived, less frequent..

    frequency of garbage collection cycles depends on memory pressure, rate of object allocation, size of heap
    
    To manually trigger garbage collection:

    if (typeof global.gc === 'function') {
        global.gc();
    } else {
        console.warn('Garbage collection unavailable. Add --expose-gc when launching Node.js.');
    }


*/