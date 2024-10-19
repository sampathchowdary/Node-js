console.log("GraphQL")

/*

    Graphql is a query language api and a server-side runtime for executing queries.
    it is't tied to any specific database or storage engine

    graphql provides the core logic for parsing and validating graphql queries

    Graphql service is created by defining types and fields on those types, by providing funcs for each field on each type.

    graphql-tag provides gql template literal (converts string to apollo library as required)

    Graphql vs Apollo graphql

    Graphql is a query language for API that allow client to request specific data from the server.
    Apollo is a suite of tools for working with graphql, that includes apollo client and server libraries.

    Apollo Explorer => freee to use and it provides awesome development features like interactive query building, query history, reponses
    like postman
*/

console.log("Apollo - GraphQL")
/*
    major things => schema, client, server, gql

    Server => ApolloServer, startStandloneServer

    client => ApolloClient, InMemoryCache, ApolloProvider

    ApolloProvider uses React's Context API to make a configured Apollo Client instance

    => once query received on server side
    parse, AST (abstract Syntax Tree), validate against the types, fields in our schema
    execute
    resolver => resolve its field by populating it with the correct data from the correct source, db or api
    get the data from data source and transform into the schema that user requested

    how resolver interact with data source?
    resolver function has four optional parameters : parent, args, context, info
    parent : useful while dealing with resolver chains
    args : contains all graphql arguments
    contextValue : object shared across all the resolvers that are executing for a particular operation.
                resolver needs this to share state like auth info, DB connection
    info : about operatio execution state, field name, path to the field from root

    RESTDataSource: 

*/

/*
    Schema Definition language
    syntax:

    type Customer {   => keyword + name in pascalcase
        name : String!  => field, datatype , ! is used for not nullable element
        age : int
        accounts : [account]

    }

    const gql = require("graphql-tag")

    cont typeDefs = gql`
        type Query {
            retriveCustomer: [Customer!]
        }

        type Customer {
            name : String!
            age : int
            accounts : [account]
        }
    `;

    module.exports = typeDefs;

    we can send arguments tooo in the fields



*/

console.log("Queries and Mutations")
/*
    Every graphql service has a query type and may or may not have a mutation type.

    Query: request made by a client to retrive specific data from a server.


*/