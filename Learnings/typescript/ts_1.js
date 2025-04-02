console.log("=========== Typescript =============")

/*

    Basic Data types:
    
        string: sequence of unicode characters
            let name:string;
            properties : Contructor, Length, Prototype
            methods: charAt(), charCodeAt(), concat(), indexOf(), lastIndexOf(), localeCompare(), match(), replace(), search(), slice(), split(), substr(), subsring()
            toLocaleLowerCase(), toLocaleUpperCase(), toLowerCase(), toUpperCase, toString(), valueOf()
        
        number: double 64-bit floating point values - both intergers, fractions
            let age:number;
            properties: MAX_VALUE, MIN_VALUE, NaN, NEGATIVE_INFINITY, POSTIVE_INFINITY
            available methods : toFixed(), toLocaleString(), toPrecision(), toString(), valueOf(), toExponential()
     
        boolean: logical values - true or false (falsy values - false , 0, empty string, null, undefined, NaN)
            let isAdmin:boolean;
            !! -> converts non-boolean value to boolean
        
        void : function return type
            function greet():void
        null : 
        undefined: all uninitialized variables
        symbol : unique and immutable (ES2015)
            let first_sym = Symbol("sym");
            let second_sym = Symbol("sym");
            console.log(first_sym === second_sym); // false => both are different

        object: classes, arrays, functions
            array => var arrayname[:datatype];
            object => var objectname:{key1:datatype, key2:datatype}
            function => function functionname(datatype):datatype

            array methods: same as js

        never: represents values that never occur

    -> If a variable is declared but not initialized, undefined is automatically assigned.
    -> null must be explicitly assigned to represent the absence of a value.

    Type Annotations:
        refers to explicit defination of type of variable, function, parameter, return type or object property.
        let name:string; -> here string is annotation, funct greet(name:string):void -> void is annotation, numbers: Array<number> -> array type
        object type:
            interface Person { 
                name: string;
                age: number;
            }
            const person:Person = { name: 'sam', age:25}
    
    Type Inference
        its a feature in ts that allows the compiler to automatically determine (infer) the type of variable, function or expression.
        typescript is static type but it support dynamic like js as it is built on top of js

    
    Enums: set of names constants (like http requests , error types)
        enum Color { red, green, blue }
        heterogenous enums => combination of both numberic and string enums.
        Ambient enums => used to describe the shape of the already existing enum types.

    
    any : when we don't know the type we use any
    unknown : used when we don't know the type
    any vs unknown : any can be any but for unknown atleast at compile time it will be into some type

    void: no return type => store undefined as a value
    never: values never occur => never can't store any value

    Union: Type1 | Type2 | Type3 ... 
            string | number | boolean
            data should match atleast one type
            function display(name: string | string[]){
                // function body;
            }
        
    Literal Types: subtypes of primitive data types
        // Defining a custom-type Direction
        type Direction = "North" | "East" | "South" | "West";

    Type alias => multiple user defined value types
        type StringOrNumber = string | number;
        user defined types:
            type RGBColor = [number, number, number];
            let red: RGBColor = [255, 0, 0];

*/


/*

    Loops:
        for in loop: (in works on index)
            for(j in n) {
            console.log(n[j])  
            }
        
        For of loops : (works on value)
        for (let value of n) {
            console.log(value)
            }

*/

/*

    Functions:
        function function_name(param1[:type],param2[:type] = default_value) { 
        }
        var res = function( [arguments] ) { ... }

        var res = new Function( [arguments] ) { ... }.

        optional, default, anonymous, Rest, parameter destructuring, arrow functions


*/

/*

    Interfaces:
        interface interface_name { }
        interface IPerson { 
            firstName:string, 
            lastName:string, 
            sayHi: ()=>string 
        } 

*/