
// React Questions & topics

/*

    1. What is the Virtual DOM, and how does React update the actual DOM efficiently?
        virtual  Dom is an in-memory representation of actual dom, when a change/update happens then dom will create a virtual dom on the side and compares with actual dom, if there is any change in virtual dom that specific elements will be udpated in actual dom. (processing of comparing and identifying the differences is call reconciliation)


    2. What is the reconciliation process in React? How does it determine what to update?
        reconciliation process is the process of comparing the virtual dom with actual dom and identifying the differences. React uses diffing algorithm to find the minimum number of changes requried and update them only 
        
    3. Explain React Fiber. How does it improve React’s rendering performance?
        React Fiber is a new reconciliation algorithm that was introduced in React 16.0. It's primary goal is to enable incremental rendering of virtual dom. this allows react to split the rendening work into chunks and spread it over multiple frames, making updates more efficient. 
        key concepts lying under react fiber are :
            fiber node : basic unit of work, nodes linked to form a fiber tree (mirroring the structure)
            work loop: process units of work in scheduling manner (it can pause, resume, prioritize)
            priority levels: high priority (user interaction), low priority (network responses)
            Phases: render phase - responsible for creating and computing the changes
                commit phase - applies changes computed in the render phase to dom.

    4. What is hydration in React? How does it differ from client-side rendering?
        Generally html elements are rendered from server which don't have ability of react, hydration is the process of attaching event listeners and reattaching event handlers to the server-rendered html. 
        From react 18 - react components (html with react) can be generated from server side.(this is implemented using HyderateRoot())


    5. What are React Portals, and when should they be used?
        React Portal allow us to render a component outside of its parent component's DOM Hireracy. some of the examples are 
        - Modal, Dropdowns, Popup, Tooltips

    6. How does react handle code splitting?
        Code splitting is the process of splitting the code into smaller chunks and loading them on demand.
    
    7. How can you implement it with React.lazy() and React.Suspense
        React.lazy() is used to lazy load a component dynaically when required, and React.Suspense is used to wrap the lazy-loaded component and shows a fallback UI (like spinner)


    8. What is the purpose of react profiler,
        React profilier is a tool used to measure performance of react application. It helps us to identify unnecessary renders, slow components and other performance bottlenecks.
    
    9. how can you optimize performance?
        - Avoiding unnecessary re-renders
        - Using React.memo - skips re-rendering a component when its props are unchanged
        - Using React.useCallback - memoizes the function to prevent it from being recreated unless changes in dependencies
        - Using React.useMemo - memoizes a computed value to avoid recalculating it on every render
        - Avoiding complex computations in render

    10. What are the common causes of unnecessary re-renders in react and how can we prevent them?
        causes :
            props, state changes
            functions, arrow functions
            inline objects arrays
            updating wrong lifecylce methods
        
        Solutions:
            React.memo(), useMemo(), useCallback(), PureComponent

    11. how does useEffect work under the hood? why should you return a clean up function ?
        useEffect: it is called after every render used to perform side effects in a function component such as fetching data or directly manipulating the DOM. 
        cleanup function : returning a function from useeffect is called cleanup function. It allows to clean up side efffects - cancel network requests, removing event listernes, clearing timers etc). this prevents memory leaks

    12. useReducer vs useState.
        useState - managing local state
        useReducer - global state ,managing complex state logic, handling multiple state updates at once, handling async state updates (redux, mobx, recoil, zustand)

    13. React Server Components, how do they improve performance
        Allows to render components on the server side, this will allow us to send only html to the client reducing the size of js bundle and improving performance
        its ideal for content-heavy applications where the user doesn't need dynamic interactions on the client side

    14. React context
        it provides a way to share values from parent to child compoents without sending through props (like authentication, theme, preferences etc) 

    15. Higher-order-component ? how does it differ from a render prop?
        A function that takes a component and return a new component (won't modify, just as added functionality)
        A render prop is a function that is passed as a prop to a component and is called inside

    16. controlled vs uncontrolled ocmponents ? when should you use each?
  
    17. how do you handle form validation in React ?
        controlled components : we can validate input values withing component state
        Libraries: Formik / React Hook Form / React-form

    18. what are compound components? how can they help create fliexible UI components?
        these Allow us to break down complex UI components into smaller, reusuable pieces that can be customized by their parent component. These are used to create flexible ui patterns 
        such as tabs, accordions or form groups

    19. How does React handle concurrent rendering?
        React 18 introduces concurrent rendering, which allows React to render multiple versions of a component tree using
        Suspense
        useTransition
        Server Side Rendering


    20. useEffect vs useLayoutEffect
        useEffect : runs asynchronously after the DOM has been painted, (used for fetching, subscriptions and timers)
        useLayoutEffect : runs synchronously after dom update but before painted. this will block painting (suitable for layout effect , dom manipulations based on measurements)

    21. How does React handle Server-side rendeing (SSR)?
        React Server Components (RSC) - allows to render components on the server side


*/

/*
    multiple api calls uisng promise all and useEffect

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Making multiple API calls in parallel using Promise.all()
                const [postsResponse, usersResponse, commentsResponse] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/posts'),
                fetch('https://jsonplaceholder.typicode.com/users'),
                fetch('https://jsonplaceholder.typicode.com/comments')
                ]);

                // Wait for all the responses to resolve
                const postsData = await postsResponse.json();
                const usersData = await usersResponse.json();
                const commentsData = await commentsResponse.json();
            }catch(err){
                console.log(err)
            } finally {
                setLoading(false);
            }
        }
    })

*/

/*

    Virtual Scroll

    <List
        height={300} // visible area height
        itemCount={1000} // total items
        itemSize={30} // Heigth of each item
        width={300} // visible area width
    >
    {RENDERROW}
    </List>

    Infinity Scroll: its a technique where more data is fetched and appended as the user scroll down the list.

    const handleScroll  = () => {
        const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.ClientHeight;
        if(bottom && !loading){ 
                // load more data
        }
    }

    <div
        onScroll={handleScroll}
        style={{ height:'400px', overflowY:'auto' }}
    >
        <items>
        {loading && <p>loading..</p>}
    </div>



*/