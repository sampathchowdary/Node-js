// Kafka Inteview Questions

/*

    What is Apache Kafka?
        distributed streaming platform used for building real-time data pipelines and streaming applications


    What is the difference between Kafka and RabbitMQ?
        distributed event streaming -- distributed message delivery in complex routing
        log based focues in streaming (time)  -- Queue based 
        can retain messages for configurable duration -- deletes them after consuption
        useful for building data pipelines -- useful for message delivery


    key components of kafka 
        Producer - produce the streaming data (produces and send messages)
        Consumer - consumes the streaming data
        Broker - stores the data 
        Topic - category to which record from producers
        Partition - a way to distribute the data across multiple brokers
        Zookeeper (kafka controller) 


    What is the purpose of the Kafka broker?
        stores the dataStores data 


    What is the purpose of the Kafka producer?
        produces and sends messages

    What is the purpose of the Kafka consumer?
        reads messages from topics 

    What is the difference between a Kafka topic and a Kafka partition?


    What is the purpose of the Kafka cluster?
        a group of brokers that work together to store and manage data

    What is the purpose of the Kafka ZooKeeper?
        co-ordinates and manages brokers and keeps meta data for older versions

    What are offsets in kafka?
        a way to track the position of a consumer in a topic (unique identified to each message within partition)

    How does Kafka handle message durability?
        messages are stored in the broker and replicated to other brokers for redundancy

    Explain the concept of kafka consumer group
        a group of consumers that subscribe to the same topic and partition, and work together to read messages

    ISR (In-Sync Replica)
        a list of brokers that are in sync with the leader broker for a particular partition

    kafka message ordering?
        messages are stored in partitions and each partition is ordered, but there is no ordering across partitions

    What is log compaction in kafka?
        a feature that allows for the removal of old messages from a topic, while keeping the most recent (like most recent cache)

    how does kafka handle backpressure?
        kafka can handle backpressure by limiting the number of messages that can be sent to a consumer at a time (not a push based model)
    
    kafka connect and kafka streams?
        framework to integrate external systems  -- library to stream processing

    kafka's at-least-once, at-most-once, exactly-once
        at-least-once: messages are delivered at least once, but may be delivered more than
        at-most-once: messages are delivered at most once, but may be lost
        exactly-once: messages are delivered exactly once, no duplicates or losses

    consumer lag and how to monitor it?
        lag - last offset produced and consumed
        monitior - kafka-consumer-group.sh
    
    what happens if the kafka broker hosting the partition leader crashes?
        A new leader is elected from the ISR

    
    How does kafka achieve high troughput?
        Multiple brokers, replication, sequential disk I/O, batching of messages
    
    How does kafka handle rebalancing in consumer groups?
        When a new consumer joins or leaves a group, the group coordinator will rebalance the group (partition)

    how would you secure a kafka cluster?
        use TLS for Encryption, OAUth, authroize actions using ACLs
    
    What is idempotence in Kafka, and how does it work?
        Ensures producers don't produce duplicate messages (enable.idempotence configuration)

    EOS (exatly only semantics) in kafka
        Exactly once delivery of messages, even in the presence of failures or retries
    
    message compression techniques in kafka?
        Gzip, Snappy, LZ4, Zstd

    kafka quotas?
        limits the amount of data that can be produced or consumed by a client

    kafka transaction API?
        Atomic writes across multiple partitions (exactly-once semantics for producers and consumers)




    What is the purpose of the Kafka producer configuration?
    What is the purpose of the Kafka consumer configuration?
    zero-copy transfer for data replication and sending

*/