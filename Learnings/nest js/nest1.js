// Nest.js

/*
    powerful, extensible framework, scalable server-side applications for Node.js
    Developed using angular principles, typescript default, Dependency injection pattern

    Modular Structure, Typescript First, Extensibility, Well-documented

    core:
    1. Modules ()
    2. Controllers - handles incomming requests & responses
    3. Providers - classes responsible for handling bussiness logic (mulitple services to db)
    4. Services - same as provided (controller to services )
    5. Dependency Injection


    Routing & Request Handling:
    1. @Get, @Post, @Put, @Delete
    2. @Param, @Query, @Body, @..(':id') for dynamic

    Pipes:
    validation and Transformation (authorization)

    Middleware:

    Guards
        Authorization
    
    Interceptors

    Asynchronous operations:

    Database Integrations

    Testing

    CLI

    WebSockets

    GraphQL support

    MicroServices Architecture

*/

// decorator: special kind of function, can be attached to any module, controller, class, method any  == this will help to identify how the class or method behaviour
// inside decorators - you can import and exports all related modules or classes and all


/*
    Modules : module is a class with @module({}) -- decorator
        Every underlying service or controller anything relevant can be created as modules like
        1. Products modules 2. order modules 3. payments modules 4. configuration module ....

    Decorator takes a single object with properties like
        providers, controllers, imports, exports

    @Global() => used for module global-scoped (registed only once)

*/

/*
    Controllers: (request - response)
        To create controller we need classes and decorators
        Decorators link classess with necessary metadata, allowing nest to create a routing map that connects request


        import { Controller, Get } from '@nestjs/common';

        @Controller('cats')                                     == Decorator
        export class CatsController {                           == class
        @Get()                                                  == request
        findAll(): string {                                     == method
            return 'This action returns all cats';
        }
        }

    Decorators:
        @Request() or @Req(), @Response() or @Res() = for request, response

        @Next => next
        @session(), @Param(key?:string), @Body(..), @Headers(...), @IP(), @HostParam()
*/

/*
    Providers : handles bussiness logic (services, repos, factories, helpers)

    @Injectable()                                       == making it injectable for other classes
    export class CatsService {

    inject as dependency 

    provider registration - like services and controllers
        

*/

/*
    MiddleWare (middlewareconsumer is a helper class)
        before route, request & response objects
        loggin, authentication

    => Routing -- Route wildcards, direct controller, excluding routes 

    Multiple middleware - comma seperated middle wares
    global middleware - binding the middle ware at applications level

*/

/*

    @nestjs/common package

    Exceptions filters:
        built-in exceptions layer responsible for processing all unhandled exceptions across the application. 
        when a exception is not handled by your application code, it is cauhgt by this layer.

    Default : 500, internal server error

    statusCode, message


    BuiltinExceptions:
        badrequest, unauthorized, internalservererror, payloadtoolarge, methodnotallowed, preconditionsfailed




        

*/

/*

    Pipes:
        transformation : transform input data to the desired form
        validation: evaluate input data or exception

    Builtinpipes 
        validationpipe, parseintpipe,parsefloatpipe, parseboolpipe, parseuuidpipe, parsefilepipe, datepipe, ....

        @nestjs/common package

    Custom pipe:
        validations specific to user needs

    
        Zod schema validation

        {Z } from 'zod'

*/

/*

    Guards: (authorization & authenitcation)

    general authentication by middle ware don't knwo which handler to execute after next(), guards have access to executioncontect instance what going to be executed next.

    AuthorizationGuard : AuthGuard, ValidateRequest, canActivate(), Execution Context, Role-based authentication, Global Guards
    @Roles => used to define to roles and access this role.
        

*/