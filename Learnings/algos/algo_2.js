/*

    Hash Table:
    Key - value pair

    Hashing (Hash Function): index were processed using hash functions
    when hash function generates same keys for multiple keys then there will be a conflit called Hash Collision.

    Hash collision  (can be stopped by)
    1. Chaining : when we get same index then we store all the values (using double linked list)
    2. Open Addressing 
        1. Linear Probing : when we get same index then we search for next available index
        2. Quadratic Probing : similar to linear but space between the index is increased by using a some auxilary functions
        3. Double Hashing : we use two hash functions and use the second hash function is used to find index

    Good Hash Functions:
    1. Division Method:  (k mod m)
    2. Multiplication method:
    3. Universal Hashing: chosen at random independent of keys

    Applications: lookup, cryptographic apps, indexing data 


*/