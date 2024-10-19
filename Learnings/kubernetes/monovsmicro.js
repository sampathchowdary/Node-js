
// monolithic vs microservices

/*
    Monolithic Architecture
    ------------------------
    1. A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications.
    A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. 
    2. monolith application runs as a single process, the scaling of individual features of the monolith is almost impossible. It internally supports a hardcoded number of connections and operations. However,
    scaling the entire application can be achieved by manually deploying a new instance of the monolith on another server, typically behind a load balancing appliance - another pricey solution.


    Advantages:
    1. Easy deployment, development
    2. performance, simplified testing, easy debugging


    Disadvantages:
    1. Scaliability, Reliability, Lack of flexibility
    2. compleex structure, 


*/


/*

    Microservices Architecure:
    -------------------------
    1. A microservices architecture, also simply known as microservices, is an architectural method that relies on a series of independently deployable services. 
    These services have their own business logic and database with a specific goal. Updating, testing, deployment, and scaling occur within each service
    2. Microservices don’t reduce complexity, but they make any complexity visible and more manageable by separating tasks into smaller processes that function independently of each other and contribute to the overall whole. 




*/


/*

    Containers:
    ------------
    Containers are an application-centric method to deliver high-performing, scalable applications on any infrastructure of your choice. 
    Containers are best suited to deliver microservices by providing portable, isolated virtual environments for applications to run without interference from other running applications.

    Containers encapsulate microservices and their dependencies but do not run them directly. Containers run container images.

    A container image bundles the application along with its runtime, libraries, and dependencies, and it represents the source of a container deployed to offer an isolated executable environment for the application.
    Containers can be deployed from a specific image on many platforms, such as workstations, Virtual Machines, public cloud, etc.

    Container orchestrators are tools which group systems together to form clusters where containers' deployment and management is automated at scale while meeting the requirements for different env (dev, prod, QA)
    The clustered systems confer the advantages of distributed systems, such as increased performance, cost efficiency, reliability, workload distribution, and reduced latency.

    usuage of container orchestrators: grouping containers, hosting, managing policies, storage, usuage, scheduling.
*/

