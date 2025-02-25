
console.log('================ Spring boot ==================')
/*

    1. What is Spring boot?
        Spring Boot is a tool/framework built on top of sping framework. it is provided with preconfigured templates, embedded web servers, automatic configurations, less boilerplate code and configuration

    2. Difference between spring and spring boot?
        Spring : A comprehensive framework for building enterprise apps, it provides various modules like spring core, spring mvc, spring data etc
        Spring Boot: A simplied version of spring, with embedded servers, automatic configurations, less boilerplate code and configuration

    3. Benefits of Spring Boot?
        Auto Configuration : automatically configures based on env
        Embedded Servers : Tomcat, Jetty, Undertow
        Production Ready or easy deployment : Applications can be packaged as JARs or WARs and are easy to deploy
        Simplified Configuration : Require minimal XML and configuration files

    4. @SpringBootApplication ?
        @SpringBootApplication is a combination of 3 annotations.
        @Configuration, @EnableAutoConfiguration and @ComponentScan

    5. difference between these annotations
        @Component : general purpose annotation for Spring-managed bean
        @Repository : used for data access objects
        @Service : used for business logic
        @Controller : used for controllers
        @Configuration : used for configuration
    
    6. What is Dependency Injection in Spring Boot ?
        It's a design pattern used by Spring to manage dependencies, Spring allows to inject them into classes that need 
    
    7. Purpose of application.properties or application.yml in spring boot?
        Configure application properties such as server port, database connection details, logging settings and more. These will be loaded in runtime
    
    8. Spring Boot Starter?
        it is a pre-configured set of dependencies and auto-configuration for common use cases.
        spring-boot-starter-web includes dependencies for building web apps including spring mvc and tomcat
    
    9. Spring Boot Auto Configuration?
        It automatically configures based on classpath and the environment. It reduces the need for manual configuration and provides sensible defaults.

    10. @RequestMapping and its variations ?
        used to map http request methods in the controller
        @GetMapping: Maps HTTP GET methods.
        @POSTMapping: Maps HTTP POST methods.
        @PUTMapping: Maps HTTP PUT methods.
        @DeleteMapping: Maps HTTP DELETE methods.
    
    11. @Value annotation in Spring Boot?
        used to inject values from properties files or environment values into beans
        @Value("${property.name}") : injects the value of the property with the name "property

    12. Spring Boot Actuator?
        It provides Production ready features to monitor and manage applications. It exposes endpoint for health, metrics environment properties and more.

    13. @Entity and how does it work with Spring Boot?
        @Entity is used to mark a class as a JPA enitity. (mapping class with db table, request & responses)
    
    14. @Repository ?
        Data Access Layer beans, provides abstractions over data access technologies like JDBC, Hibernate, JPA. translates database-related into Spring DataAccessException.

    15. Spring Boot Profiles.
        applicaiton.properties , application.yml are configurations provfiles that provide environment configurations like prod, stage, dev

    16. configure spring boot port ?
        applicaiton.properties or application.yml with server.port = ..

    17. Spring Boot support for microservices architecture.
        It easily suitable due to integrated features like auto configuration, embedded servers, and service discovery, load balancing and fault tolerance.
    
    18. Spring Security and how do you configure it in Spring Boot ?
        Spring Security is a framework that provides authentication, authorization and protection against common security vulnerabilities. 
        Spring-boot-starter-security dependency 

    19. How does spring boot handle transctions?
        @Transactional annotation to manage transactions. spring handles opening, committing, rolling back of transctions automatically.
    
    20. Spring support for asynchronous programming ?
        @EnableAsync and @Async annotations
        these methods to run asynchronously and return a Future or CompletableFuture

    21. Spring Data JPA and simply database interactions?
        Spring Data JPA for easy access to DB by providing JPA repositories

    22. Support for Messaging ?
        Spring boot supports via JMS (Java Message Service) RabbitMQ, Kafka.
        Spring boot auto-configures the necessary dependencies to integrate messaging systems

    23. Common spring boot best practices.
        use profiles to seperate configuration for different environment (dev, test, stage, prod)
        use spring boot actuator to monitor and manage application
        use spring boot dev tools to hot reload application
        avoid hardcoding the values, use configuration or environment variables
        use spring boot starters to simplify the dependencies
        Keep the application modular by breaking it down into smaller services

    24. spring boot manage application dependencies?
        uses Maven or Gradle as buld tools for managing project dependencies. 
        Spring-boot-starter dependencies allow for easy inclusion of common features like web, data, security and messaging

    25. Caching 
        @cacheable using Ehcache, Redis, Guava

    26. SpringBoot devtools and its benefits
        enhances development experience by providing features like automatic restarts, live reloads and improved logging

    27. error handling in spring boot?
        @ExceptionHandler to handle specific exceptions
        @RestControllerAdvice to handle exceptions globally
        we can also create custom error pages using ErrorController.





*/