console.log(' ======= REACT LEARNING ========')
/*
    React version 

    current 18 
    used 16.14

    new features in 18
    1. concurrent rerender
    2. suspense in data frameworks (next.js server side)
    3. Automatic Batching (some func render twice , but now it will render only once at the end)

*/

// Higher order components

/*
    A higher-order component is a function that takes a component and returns a new component.

    What are Higher-Order Components (HOCs) in React, and how can they be used? Are there any alternatives to HOCs in modern React?
        Higher-Order Components (HOCs) are a design pattern in React that allows the reuse of component logic by wrapping components with a function.
        HOCs take a component and return a new enhanced component with additional features or behaviors. 

    Alternates to HOC:
        direct renders
        Hooks
        

*/

console.log(' ======= REACT Limitations ========')
// https://iq.js.org/react/2




/*

    WebSocket API: enables two way interactive communication session between browser and server.
    mechanisms:
    1. WebSockets : sends messages, when more messages comes in than processing it will end up buffering in device memory
    2. WebSocketStream : promise based alternative to webSocket, it streams receiving and sending messages, it will regulate the speed


*/

console.log(' ======= REACT Server Side Rendering ========')
/*

    React Server components are added in 18.0, this helps to render react components on the server rathen than client. This result in efficient rendering process, improving performance.

    Features: 
    Server-side rendering of components: components rendered on server only final HTML is sent to client. (this reduces js bundle size)
    Client side interactivity: client interaction is same, react hydrates these components by adding event listeners and all client side behaviours
    No client side JS for rendering : 
    Integrations with React Existing features: these components integrates with react features like Suspense, hooks and context

    Benefits:
    1. SEO fiendly
    2. Faster page loads
    3. Better user experience
    4. smaller bundle sizes

    When to use React Server Components?
    1. Static or content-heavy pages 
    2. Data heavy components
    3. SEO is a priority
    4. Faster inital page loads are a priority



*/

console.log(' ======= Web Worker ========')

/*

    Web worker is a javascript that runs in the background, separate from the main browser thread, allowing to perform computations without blocking the user interface(UI).
        1. Parallel processing 
        2. No access to DOM
        3. Message-based communication
        4. Limited Enivornment

        most use cases:
        1. Heavy computations
        2. Long running tasks
        3. Background tasks
        4. parallel data fetching

*/

console.log(' ======= Service Worker ========')

/*

    Service worker is simialr to web worker that acts as a proxy between webapp and the network.
    1. Offline support
    2. Push notifications
    3. Background sync
    4. Caching
    5. network requests

    usecases
    1. Offline support
    2. Push notifications
    3. Background sync
    4. Caching


*/