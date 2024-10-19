


/*

    Kubernentes: (also called k8s - letters between k and s is 8)
    1. Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.

    
    Features:
    1. Automatic bin packing: schedules containers based on needs, to maximize utilization
    2. Designed for extensibility: can be extended anytime to add new features
    3. Self-healing: automatically replaces failed containers
    4. Resource management: manages resources like CPU, memory, etc.
    5. Scalability: can scale up or down based on needs
    6. Multi-container pod: allows multiple containers to run in a single pod
    7. Service discovery: allows containers to communicate with each other
    8. Rolling updates: allows for gradual updates to applications
    9. Persistent storage: allows for persistent storage of data
    10. Security: provides security features like network policies, secret management (ipv4/ipv6), etc.



*/

/*

    Google Borg 
    Google's Borg system is a cluster manager that runs hundreds of thousands of jobs, from many thousands of different applications, across a number of clusters each with up to tens of thousands of machines.
    services like Gmail, Drive, Maps, Docs are serviced using Born

*/

/*

    Kubernetes container orchestrator
    Argo workflow engine for Kubernetes
    etcd distributed key-value store
    CoreDNS DNS server
    containerd container runtime
    CRI-O container runtime
    Envoy cloud native proxy
    Fluentd for unified logging
    Flux continuous delivery for Kubernetes
    Harbor registry
    Helm package management for Kubernetes
    Linkerd service mesh for Kubernetes
    Open Policy Agent policy engine
    Prometheus monitoring system and time series DB
    Rook cloud native storage orchestrator for Kubernetes

*/

/*

    Architecture: (control node , worker nodes)
    1. Control plane: responsible for managing the cluster
    2. Worker nodes: run the actual containers



    Control plane runs components and agents: (main thing - can have dashboard, managing cluster)
    1. API server: exposes the Kubernetes API (rest api's to handle requests)
    2. Controller manager: runs the control plane components
    3. Scheduler: schedules pods onto nodes
    4. etcd: stores the cluster state (key - value store)
    5. Kubelet: runs on each node and communicates with the API server
    6. Kube-proxy: provides network connectivity between pods


    worker node:
    1. Kubelet: agent running on each node, communicates to control plane
    2. Kube-proxy: provides network connectivity between pods
    3. Container runtime: runs the containers (docker, containerd, cri-o (lightweight container runtime for kubernetes))

*/