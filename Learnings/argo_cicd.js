console.log(" =========== ARGO CD ==============")

/*
    Argo CD
    Declarative GitOps continious delivery tool for Kubernetes.

    Argo CD is implemented as a kuberenetes controller which continiously monitors running applications 
    and compares the current, live state against the desired target state.

    App definitions, configurations and environments should be declarative and version controlled.
    App development and lifecycle management should be automated, auditable and easy to understand.

    Argo cd follows gitops pattern of using git repos as defining the desired app state.
    kubrenetes manifests can be specified in several ways like yaml/JSON maninfests

    Argo cd automates the deployment of the desired application states in the specifed target environments.
    app deployments can track updates to the branches, tags or specific versions of manifests at a git commit.

    Argo CD is implemented as a kuberenetes controller which continiously monitors running applications and compares the current, live state against the 
    desired target state. (sync, OutOfSync). It reports & visualizes the diferrences while providing facilities to automatically 
    or manually sync the live state back to the desired target state.

    Features:
        1. Automeated deployment of applications to sepcified environments
        2. multiple config management tools (kustomize, Helm, jsonnet, yaml)
        3. manage and deploy multiple clusters
        4. SSO, webhook integrations  (oauth, smal2, git)
        5. Rollback, health status analysis of application
        6. automated / manual sync of applications
        7. web ui / cli for automation and integration
        8. Prometheus metrics (open-source monitoring and alerting toolkit that collects and stores metrics as time series data)





*/