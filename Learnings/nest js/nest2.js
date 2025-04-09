/*

    1. nest js and different form node js
        built on top of express frameworks, built in support for typescript, dependncy injection, lot of built in library support

    2. core features of nest.js 
        modules, cotrollers, providers, services , dependency injection (pipes, guard, execption filter, interceptors)

    3. roles of modules. how do they help in building scalable apps?
        its more like grouping a set of related components, services and controllers is called module. it allows better seperation of conerns
        dependency injection (create seperately and use whereever you need)

    4. depdency injection in nest.js
        create module/contorller/method and use decorator @injectible() - this makes that specific to injectable 
        @inject() to manage dependencies and inject services into controller

    5. decorator in nestjs
        decorator are used to annotate the classes, method or parameters for api @get, @body for request ..
    
    6. guards in nestjs and how do they work?
        used for authentications and authorizations - role based access, canactivate interface based on access

    7. handle exception filetering in nestjs
        builtin authentionfilter is avaible - any missed or uncaught exceptions will be caught by this.

    8. concept of interceptors in nestjs
        used to manipulater request & response like transforming data, logging or headers

    9. validation in nestjs
        object validations using class-validator (isstring, isnotempty...), Zod (schema validation)

    10. handle asynchronous operations in nestjs?

    11. purpose of middleware in nestjs, how would you implement?
        middleware is something when a request comes in do some necessary checks and pass to next functions like logging, authtications etc.
        we can write our own middleware or use builtin like logger, using injectable decorator we can use

    12. database transctions in nestjs
        ORM like typeORM, Sequelise in nestjs

    13. pipes in nestjs, how are they useful in request handling?
        piper are like something that take data and transform into reuqired parameters and send to routes 
        like validationpipe, parseintpipe  -- like validations

    14. implement caching in nestjs
        
    15. logging in nestjs
        winston logger for logging
        open telemetry for tracing the logs info

    16. 





*/