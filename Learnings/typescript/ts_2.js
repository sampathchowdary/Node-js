//
console.log("================ Typescript ================")

/*

    What is typescript & different from javascript
        TypeScript is a superset of JavaScript with (ECMA features), focus on static typing, intefaces, enums and compilaton. built on top of ECMAScript features.
        

    What are the benifits of using TS?
        Better code quality, error detection, better tooling and enhanced maintainability.

    Datatypes of Typescript ?
        Basic: string, number, boolean, void, null, undefined, symbol, object, never
        userDefined types : arrays, Enums, classes, interfaces, tuple

    interfaces in typescript, how are they used?
        iterface in ts is a way to define the structure of an object. It enfore type checking on objects. Used to shape object, function signatures and more

    enums in ts, when would we use them?
        enums = set of names constants, used to represent a collection of related values like fruits, directions, 

    tuples in typescript
        tuple in ts is a special type of array that can hold elements of different types. useful incase of fixed-size collection of values, where each element has a specific type.

    type inference in TS 
        type interface is an ability to automatically determine the type of varaible based on its value. ts will infer the type at compilation time.

    purpose of tsconfig.json
        configuring ts compiler options & files to include/exclude. 
        compiler options include - strictness, module resolution, output directory.

    difference between any and unknown
        both are used to represent types that colud be anything. difference comes in type safety
        any : when we use any, ts disable type checking for that variable, no errors -- usecase - when input is unknow but you want to bypass ts strict ness
        unknown : when we use unknown, ts will not allow any operations on that variable until we narrow. it is a type-safe counterpart -- when inout need to enforce for safety even for unknown
    

*/