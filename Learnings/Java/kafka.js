


/*

    Rules to check while working:
        1. Retention policies
        2. Data classification (compaction settings)
        3. Data replication, partitions (disk capacity)

    data loss
        1. replication factor  > 1
        2. acknowledgment settings
        3. disk capacity
        4. ISR to encure replicas in sync
    
    Disk space:
        1. retention policies
        2. verify compaction settings
        3. disk capacity
    
    lagging
        1. check consure processing time
        2. check replication factor 
        3. increase batch size or fetch interval (increase consumers)

    migration:
        1. MirrorMaker 

        check topics and configruations are synchronized


*/