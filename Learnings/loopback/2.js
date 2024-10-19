
/*


    What is LoopBack and how does it differ from other Node.js frameworks?
        loopback is a opensource, nodejs framework buit based on express
        like a middle ware or bridge between web and db or some services

    Explain the concept of Models in LoopBack and how they are used.
        models are domain model object, with properties (entity)

    How does LoopBack handle data storage and connectivity with databases?
        loopback uses connectors to connect with databases

    What is the role of Middleware in LoopBack, and can you provide examples of middleware functions?
        services that help request to response such as authentication, logging, parsing etc

    Describe the process of creating a REST API using LoopBack.
        create server, route, controller, authitication and all the related services at the connect with data basee or 

    How does LoopBack handle authentication and authorization in applications? 
        loopback has jwt auth services in /repo library to handle authentication
        for authorizations it has different access levels that provide read and write specific operations

    Explain the concept of Remote Methods in LoopBack and their significance.
        remote methods are custom methods attached to models can be invoked remotely via REST or other protocols
        this enhance the flexibilty of injecting other dependency without tightly coupling  

    What is Dependency Injection in LoopBack, and how is it beneficial for application development?
        methods, object, services, repos everything can be written seperately and then inject when ever we need those

    How can you implement validation and data validation in LoopBack Models?
        loopback support validation through model properties we define rules such as 
        required, unique, custom validations

    Discuss the role of LoopBack Connectors and give examples of commonly used connectors.  
        connectors are used as adapated bewteen loopback data models to database
        loopback-connector-mangodb, loopback-connector-rest


*/

/*

    How does LoopBack support the creation of GraphQL APIs?
        loopback support creation of graphql api's over https (loopback-graphql)

    Explain the purpose of Data Sources in LoopBack and provide examples of supported databases.
        data sources are configuration used to connect with differnt types of data bases or external services
        mongodb, mysql, rest

    What is LoopBack's approach to handling file uploads and downloads?
        yes loopback support file uploads and downloads

    How can you customize the error handling and response format in LoopBack applications?
        By identifying the types of possible errors, json format to structer error responses

    Discuss the role of Mixins in LoopBack and provide examples of scenarios where mixins are useful.
        mixins in loopback are reusable functionalities that can be added to models to extend

    Explain the concept of Boot Scripts in LoopBack and their significance in application initialization.
        boot scripts in loopback are used to initlize and start the application. booting will help to load all the 
        required dependencies into the application.

    How does LoopBack support the creation of WebSocket-based APIs?
        yes loopback support creation of websocket based api's (loopback-component-explorer)

    What are the best practices for securing a LoopBack application against common vulnerabilities?
        by proving the access controls at the time of authorization, input validations (parsing)  

    How can you handle database migrations and schema changes in a LoopBack application?
        Model support json schema, those can be handled by updating the model structure
        supports db migrations, by updating the model structure by updating the json schema

    Discuss the role of Hooks in LoopBack and provide examples of situations where you might use them.
        hooks in loopback used to inject custom code at specific points in the request-response cycle.
        'before save', 'after save', 'before remote'
 
*/

/*

    Explain the role of Middleware in LoopBack and provide examples of middleware functions.
        controllers, authorization, authentication, parsing, logging

    How does LoopBack handle authentication and authorization in APIs?
        at controller level

    Discuss the difference between LoopBack 3 and LoopBack 4, highlighting major improvements and changes.
        typescript, strongly typed, ES6+, promises, async await

    Explain the concept of Remote Methods in LoopBack and their use in API development.
        custom methods injecting to models based on the need

    How does LoopBack support the creation of RESTful APIs, and what conventions does it follow?
        support the restful api, loopback-rest
        this enables to do pre processing, post processing, request, responses

    Describe the purpose and usage of Remote Hooks in LoopBack.
        used to inject custom code at specific points

    What is the LoopBack Explorer, and how is it beneficial in API development?
        its a web document where we can see all the api's and their related request repsonse features

    How can you implement data validation and validation constraints in LoopBack models?
        By adding strict models, access specific, validations

    Discuss the role of Observers in LoopBack, and provide examples of scenarios where observers are useful.
        observers allow developers to respond to changes in model instances of data
        observer can trigger additional actions when updated (hooks)

    Explain the process of integrating LoopBack applications with third-party services or APIs.
        configuring sources and connectors in loopback
        seemless communication between applications and external services
        
    How can you optimize the performance of a LoopBack application, especially in terms of database queries?
        by modifing the model schema, optimizing queries, indexing 
    
    Discuss the concept of Change Streams in LoopBack and their application in real-time data updates.
        change streams in loopback provide a way to capture real-time data updates. by subscribing changes in data
        applications can react dynamically making them suitable for live updates, chat applications, realtime monitoring


    What is LoopBack's approach to handling complex relationships between models in the data layer?
        manage complex relationships between models through its ORM capabilities. Developers can define
        relationships such as belongs-to, has-many, hasmany through, polymorphic 

    Explain the concept of Dependency Injection in LoopBack and how it benefits application design.
        modules/function are writtern in such a way that those are loosely coupled and seperately
        to access those when need we inject those, this makes scalable, easy to debug

    How can you handle versioning of APIs in LoopBack, especially when introducing breaking changes?
        versioned endpoints, specify api version in the route, using headers

    Discuss the role of ACLs (Access Control Lists) in LoopBack and how they contribute to security.
        using access control lists we can specific specific access to specific user
        based on the access we can define the read/write access (complete authorization)

    Explain the process of deploying and scaling LoopBack applications in a production environment.
        configuring production-ready settings, db connections, env variables

    What tools and libraries are commonly used alongside LoopBack for testing and documentation?
        mocha used for loopback testing, 
        swagger UI (openapi explorer) for documentations
    
    Describe scenarios where you might choose LoopBack over other Node.js frameworks for API development.
        large application where it has to connect with lot of other services

    How does LoopBack handle the generation of OpenAPI (Swagger) documentation for APIs?
        by using models, by adding annotations and configurations

*/