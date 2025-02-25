console.log(' ======= REACT LEARNING ========')
/*

*/
console.log(' ======= Life Cycle Methods ========')
/*
    mainly into 3 phases:
        Mounting
            Updating
        UnMounting

    Mouting: constructor(), getDerivedStateFromProps(), render(), componentDidMount() : (after component got rendered on dom)

    Updating: 
        1. getDerivedStateFromProps() : this is called due to state/props update
        2. shouldComponentUpdate() : based on above it has to update/render or not - boolean (default true)
        3. render()
        4. getSnapshotBeforeUpdate() :  method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
        5. componentDidUpdate() : called once Dom updated

    UnMounting: componentWillUnmount(): about to remove from dom
*/

console.log(' ======= Hooks ========')

/*

    ->  Hooks allow functional components to have access to state and other react features (life cycle)
        1. useState  : allows to change local state
        2. useEffect  : allows to perform side effects (componentDidMount(), componentDidUpdate())
        3. useContext : createContext, useContext()
        4. useRef : used to access dom elemtent directly, store val, update val but not rerender
        5. useReducer  : similar to useState Hook
        6. useCallback  : returns a memoized function (similar to usememo just it will return function)
        7. useMemo  : returns memoized value
        8. Custom Hooks  : same like function to use everywhere, use + funcName (it runs the func and return)


        useEffect(<function>, <dependency>)
        useEffect(() => { ... }, [])  runs only first render
        useEffect(() => { ... }, [prop, state])   runs on any dependency value changes


        useContext: we can add value to provider and 
        UserContext.Provider store the value, useContext to get the value => example below

        useReducer(<reducer>, <initialState>)
        data from reducer, custom state logic

*/

console.log(' ======= REACT rules to follow react hooks ========')

/*
    Rules:

    1. Hooks can only be called inside React function components.
    2. Hooks can only be called at the top level of a component.
    3. Hooks cannot be conditional
*/

console.log(' ======= State ========')

/*  
    this.state  vs setState()
    this.setState() vs updateStateMethod()

    Lifting State Up: Lift state to a common ancestor when multiple components need access to the same state.

*/

console.log(' ======= PROPS ========')
/*
    1. attribute like syntax   =>  propName={propValue}
    2. read only value
    3. Defaultprops   => component.defaultProps ={ }
    4. proptypes of type checking => MyComponent.propTypes = { name: proptypes.string.isRequired }
    5. PropDrilling => deep nesting of prop data
    6. Destructuring props
    7. passing functions as props ==> callback functions
*/
console.log(' ======= REACT router ========')

/*
    NPM - package
    BrowserRouter, Routes, Route, Swith, Link
    BroswerRouter : wraps entire application for routing
    Routes : wraps routes
    Route : maps to a specific path url or component
    Switch : renders the first matching route
    Link : client side routing - navigate between pages

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    Example : 2

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

        { Dashboard Nested Routes }
        <Route path="/dashboard" component={Dashboard}>
          <Route path="/dashboard/settings" component={Settings} />
        </Route>

      </Switch>
    </BrowserRouter>



*/


console.log('============ useContext / context api ========== prop drilling  =========')

/*
            ============ useContext / context api ========== prop drilling

           1.  const UserContext = createContext();
           2.     <UserContext.Provider value={user, ....}>
                        <Component1 />
                </UserContext.Provider>
            3.   const user = useContext(UserContext);
                <Component8 />
*/


console.log(' ======= Custom Hook ========')
/*

useFetch.js

  import { useState, useEffect } from "react";

  const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);

    return [data];
  };

  export default useFetch;

*/