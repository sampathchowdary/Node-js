

/**

    1. What is JSON, and what does it stand for?
        Java Script Object Notation, light weight data interchange format, to read and write 
        subset of javascript programming language

    2. Describe the basic structure of a JSON object.
        {}, key:value pairs

    3. What are the data types supported by JSON?
        String, Number, Object, Array, Boolean, Null

    4. Differentiate between JSON object and JSON array.
        JSON object : unordered collection of key value pairs
        JSON array : ordered collection of values

    5. How do you represent strings in JSON? Are there any special characters to escape?
        sequence of characters
        using \ for qoutes or any special characters
    
    6. Explain the concept of key-value pairs in JSON.
        key:value
    
    7. Can you nest JSON objects within each other? If so, provide an example.
        yes 
    8. How do you represent numbers in JSON? Is there any distinction between integers and floats?
        All types of numbers in json are represented using number format

    9. What is the significance of true, false, and null in JSON?
        boolean values, absence /  empty value representation

    10. How do you handle dates and timestamps in JSON?
        everything as string (unix timestamp as numbers)
        while retriving we need to take care of those values 

    11. Explain the process of serializing and deserializing JSON data.
        serilazing -> object to string
        deserializing -> string to object 
    
    12. What are some common methods for parsing JSON in different programming languages?
        JSON.parse(), JSON.stringify()
    
    13. How do you access specific elements or values within a JSON object?
        using . or ['key']
    
    14. What is JSON Schema, and how is it used for validation?
        defines structure, data types and constraints, validating the data by comparing the structure

    15. Discuss the differences between JSON and XML.
        json: light weight, faster, easy to understand, few data types
        xml : slower, support more data types, 

    16. Can JSON handle circular references? If not, how do you handle them?
        No , we manually need to identify and resolve them

    17. How do you ensure proper error handling when working with JSON data?
        JSONP - sending data for cross domain issues (try catch for errors)

    18. Explain JSONP (JSON with Padding) and its use case.
        useful to make cross domain AJAX calls 

How do you handle large JSON files efficiently?
What are some security considerations when working with JSON data, especially in web applications?




 */