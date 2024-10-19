console.log(' Interview Question ')

// https://tkssharma.com/nodejs-top-interview-question/

/*

    1. NPM 
        package manager for Javascript based application , registry with thoussands of js modules.

    2. what is node.js , when to use node.js
        server side language based on google v8 JS engine, scalable apps
        data steaming, live apps, socket communication, non blocking I/O, microservices
        
        not for : cpu intensive, reading huge files, lot of db related

    3. Node.js architecture

    4. package.json & npm scripts
        just json file having meta information about application like local and dev dependencies, script, meta tags,
        npm scripts to automate our tasks and list them, task runners

    5. Event-driven programming
        
    6. how node v8 diff from chrome console
        node 
            server side
            process, require
            file operations, networking, 

        chrome
            client side
            dom, (document), window
            browser storage

    7. async vs sync 
        async : works in a same time
        sync : things wait untill this thing finished

    8. different options to write async code
        setTimeout, callback, Async module, promises, async/await, other libraries

    9. how node handles concurrency with multiple I/O operations

    10. node js callback and helps to run async tasks
        callback is a higher order func, that take func as an argument and return callback func.
        node handles all async calls via callback antively.

    11. setTimeout, setImmediate, setInterval

    12. REPL and how it helps to run code
        REPL (READ - Eval - Print - loop) allows users to write code in terminal and allows to execute immediately

    13. core module vs user defined module

    14. events in node js and create event driven system

    15. sync vs async way of using fs module 

    16. how cmd line args work in node js
        args stored in process.argv (array) => [node, jsfile, .......]
    
    17. error check first in callback handler
        first arg to any callback handler is error object, the reason to pass is to check errors first then deal with callback

    18. module pattern in js
        commonjs (server-side), AMD (asynchronous module definition), UMD (unified module definition), ES6(both client and server) (js wrapped in some form)

    19. callback hell and how to avoid

    20. promise and use of promise for ajax call / s

    21. global object and use to manage env
        global keyword represents global namespace object (console.log(global))
        we can also add things on global object like runtime env, process(global.process.env), buffer

    22. streams and its diff from normal api response
        flow of data from A to B using pipes, sends data as chunks, time, scalable
        for api full data as resp, memory latency, flexibility

    23. how can we have seperate config for development and production
        using .env files, based on env this picks the values
    
    24. differnce between promises, callback & async await

    25. what will be the state of Node JS process when event loop is empty and call stack both are empty
        In such case node js process will exit (when we start node process, it will start event loop, if nothing to execute it exit)
        to prevent this exit, we keep http server to keep listening http requests

    26. how yarn different from npm
        yarn is just another package manager for installing and managing js libraries for apps 
        yarn uses same registry as npm
        yarn is faster while installing packages, stability, putting lock on versions, caching all installed packages

    27. what is the use of cluster module and how to use it.
        provides a way to create child process. In some cases we may need to have a child process runnning independent process
        cluster module is core node js module like fs, net module
        cluster contains a set of functions and properties that help us forking process, mutli core systems
    
    28. what is the use of dns module in node.js
        (node-cares library)provides a way of performing name resolutions (lookup, gerservers, resolve ....) 




    





 
*/