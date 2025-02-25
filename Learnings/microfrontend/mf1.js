// MICRO FRONTEND

/*

    What is microfrontend
        Architecture pattern for building a scalable web applications, that allows to scale user interactions.
        splitting complex frontend products into smaller and simpler applications that can delivered all the way to production by independent autonomous teams
        Micro frontends can be built using different programming languages, frameworks, and libraries.
        They can be deployed on different servers or even on the same server.


    Benefits
    1. Scalability
    2. Flexibility (improved user experience)
    3. Autonomy
    4. Reusability
    5. Maintainability
    6. Security
    7. Performance

    Cons:
    1. Complexity (design)
    2. Integration (api contracts, state changes ...)
    3. Communication (deployments, change in features, api contracts)
    4. testing (after any changes, need to test together properly )





*/

/*

    Single - spa:
    Javascript framework allows to use multiple frameworks in a single-page application (mixing of react, angular vue ..)


    Module Federation:
    module federation is a webpack feature that allows to load code for another application in runtime.

*/

/*
    https://module-federation.io/guide/start/index.html

    Module Federation: (support from webpack 5+)
    architecutral pattern for the decentralization of javascript applications

    loads code from other application, share dependencies
    if federated module does not have a dependency needed, webpack will download the missing dependency from that federated build

    we need moduleFederationPlugin is needed & import in webpack.config.js file

    Let’s understand what each option is:
    name: Name of the remote app
    filename: Entry point(remoteEntry.js) for the counter app.
    remotes: Add remotes entry here (relevant for the container)
    exposes: All the component names that you want to expose to the container app.
    shared: container all the dependencies that you want to share between the container and the counter app.

    exposes: All the component names that you want to expose to the container app. (exposing for other apps)

      plugins: [
        pluginModuleFederation({
        name: 'sampthhome',
        filename: 'remoteEntry.js',
        exposes: {
            './button': './src/button.tsx',      == expose whatever you want
        },
        shared: ['react-dom'], // you can add as you need
        }),
    ],



    once this file is added you can see the expose elements using 
    <host>/remoteEntry.js



    importing the components: below is the pattern (using in other apps)

    { "app-name": "name@<remote-host>/remoteEntry.js" }
    // import { Button } from 'sampthhome/button';  == sample how we access in jsx


      plugins: [
        pluginModuleFederation({
        name: 'sampthhome_user',                            == this is a different name
        remotes: {
            sampthhome:'sampathhome@http://localhost:3000/mf-manifest.json',     == <name>@<host>/remoteEntry.js
        },
        shared: ['react-dom'],
        }),
    ],

*/