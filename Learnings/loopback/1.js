/*
    LoopBack
    1. Opensource Node.js and TypeScript framework based on Express.
    2. useful to create APIs and microservices connected with SOAP or REST or DB
    3. Bridge between incoming requests and outgoing integrations

    ORM for CRUD

    Creating project
    npm i -g @loopback/cli

    lb4 app // used to create project
    => we need to give detailz of project, lint ...

    npm start

    lb4 controller => to create the controller

    dependency injection is used to wire services and repos with controllers dynamically at run time.

    remote meothods are defined in controller classes and configured as api end points with api decorators

    alias => alternate name for model

    wildcard => 
*/
console.log("Server")

/*
    => start, stop and listen on particular port
    => used for REST over HTTP, gRPC over http2, graphQL over https

    => single application can have multiple server instances listening on different ports and working with different protocols

*/

console.log("Sequenece")

/*
    sequenece is a series of steps to control how a sepecific type of server responds to incoming requests.
    like RestServer, GraphQL server, GRPC Server and webSocketServer.

    => cors, Find Route, parsing, Authentication, invoke method,
*/


console.log("Controller")


console.log("Model")
/*  
    https://loopback.io/doc/en/lb4/Model.html#model-decorator

    Model (simple javascript class) describes bussiness domain object => user, order, product

    2 types 
    1. Entity : domain object that has an identity      Ex: user (unique id)
    2. Model : domain object that not have an identity,    Ex: Address

    @model and @property are decorators to annotate to modify class

    lb4 model => to generate model

    models can be created at runtime using the defineModelClass()

    JSON Schema generation

*/

console.log("Relations")

/*

    Relations - between models

    lb4 relation

    1. HasMany => one to many, keyFrom, keyTo, name
        @hasMany(() => Order)
        orders?: Order[];

    2. BelongsTo => many to one, keyFrom, keyTo, name
        @belongsTo(() => Customer, { keyFrom: ''}) ....
        customerId: number;
    
    3. HasOne => one to one, KeyFrom, keyTo, name
        @hasOne(() => Account)
        account?: Account

    4. HasMany Through => Many to many, KeyFrom, KeyTo, name, through.model, through.keyFrom, throug.keyTo
        @hasMany(() => Patient, {through: {model: () => Appointment}})
        patients: Patient[];

    5. ReferencesMany => array of FK to reference other object
        @referencesMany(() => Account)
        accountIds: number[]; 

    6. Polymorphic Relation => more than one other model, on a single association

    

*/

console.log("Repository")

/*
        REPOSITORY
    
    A repository is a service interface that provide a strongly typed data access operations of a domain model to underlying db or service
     @loopback/repository => provides a mixin for application that enables convinence methods that automatically bind
     repository classes. repositories declared by components are also bound automatically.

    controller configuration:
    once datasource defined for repo, juggled witll connect methods unless we overwrite them.
    in controller, we define a repo property and create a new instance of the repo configured.
     

*/

console.log("DataSource")

/*

    DataSource is a named configurations of a connector. configuration properties vary by connectors.

    connector is a provider that implements data access or api calls with specific backend systems 
    such as DB, REST service, SOAP web Service, gRPC micro-service.

    A connector translate LoopBack query and mutation into native api calls supported by the underlying node.js driver for the backend.

    Juggler DataSource:
    datasource juggler is a component of loopback that provides a uniform API for working with different types of data sources.
    It acts as an abstraction layer that allows loopback applications to interact with various databases and other services
    1. unified API: common data access operations regardless of underlying data source
    2. Connector support: connector is responsible for translating loopback queries into quries more compatible with specific data source
    3. Model Definition: loopback models defined are used for data extractions from underlying sources
    4. CRUD operations: provides methods for CRUD (juggler translates them into data source)
    5. Schema Migrations: juggler support schema migrations, allowing developers to define and update schema of their models.

*/

console.log("Express VS loopback")
/*
    Express vs LoopBack
    1. both configurable
    2. builtin models for loopback
    3. swagger(api explorer, documentation)
    4. juggler - unifrom api
    5. access level controls (READ, WRITE, EXECUTE to crud operations)
*/


console.log("Winston logger")
/*
    Winston Logger : logging library to handle and manage runtime logs in loopback, node.js

*/


console.log("access level roles")
/*
    access level roles -> user, app, custom, owner, authenticated, unauthenticated, everyone
                permissions -> deny, allow, default
*/

console.log("Artifacts")

/*

    Booting : discovering artifacts automatically based on convention, processing those artifacts
    
    Artifact: loopback construct usually defined in code as class, controllers, repositories, models etc

    Context: abstraction of states and dependencies in application that loopback use to manage (global registry)
        crucial role in managing dependicies, configuration and other contextual information

    Binding: assocation between key and corresponding value within the application context.
        generally used to store and retrive objects, services (managing dependecing, promoting modularity and injection dependencies)

    Dependency Injection: used to inject particular dependency (generally eveything is seperate to make loosely coupled)

    Component: package that bundles one or more loopback extensions

*/

console.log("Loopback Life cycle at run time")
/*
    boot(): Boot the application
    inti(): Initilize the application
    start(): Start the application, it will automatically call init()
    stop(): Stop the application
*/


/*

    https://loopback.io/doc/en/lb4/Concepts.html


    Existing Examples:
    https://github.com/loopbackio/loopback4-example-shopping
    https://github.com/loopbackio/loopback-next/tree/526e70e9a603d56ef96c5b42347b1d22ec0beac9


*/