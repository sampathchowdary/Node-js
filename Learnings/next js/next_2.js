
/*
    1. What is next.js and why should we use it?
        built on top of react.js framework. It has built-in features like server-side rendering(ssr), static site generation (ssg) and API routes.
        SEO-friendly, Fast, Scalable 

    2. difference between next.js vs react
        next.js support all react features, moreover it supports SSR, SSG and easy routing

    3. how does next.js handle routing?
        file-based routing, pages are automatically routed based on file structure (/pages directory). any pages under this directory act as routing.

    4. Difference between SSR and SSG
        SSR: server-side rendering, server generates the html for the page. suitable for dynamic content that needs to be up-to-date.
        SSG: static site generation, server generates the html for the page at build time. suitable for pages that won't change frequently

    5. getStaticProps vs getServerSideProps
        getStaticProps: used for static site generation. returns props that are used to pre-render the component
        getServerSideProps: used for server-side rendering. returns props that are used to render the component

    6. getInitialProps
        getInitialProps is used to fetch data in both SSR and SSG, but this less efficient compared to getStaticProps and getServerSideProps.
        getInitialProps won't allow static optimization.

    7. what is next/head and why is it useful?
        next/head is a component that allows you to add metadata to the head of the HTML document.
        useful for SEO, adding meta tags, and other metadata.

    8. how can we implement dynamic routing in next.js?
        pages/[id].js -- using square brakets in file names. this part is accessed via useRouter() or getServerSideProps()

    9. How do you handle API routes in Next.js?
        It allows us to create API routes inside /pages/api directory. these routes behave as serverless functions and are used to handle backend logic or data fetching.

    10. purpose of next/link and how does it work?
        next/link is a wrapper component that provides client-side navigation. It helps in navigating between page without loading full pages (like single page app experience using routing)

    11. Incremental Static Regeneration (ISR) and how does it work?
        ISR allows us to update static content after the build without having to rebuild entire site. pages can be rerendered in the background.

    12. useEffect vs getServerSideProps
        useEffect to create on component update event and mount to fetch or any other behaviour (same as react)
        getServerSideProps to fetch data on server side and return props to be used in component (specific to next.js)

    13. next/image component and why it is different from regular <img> tag?
        next/image component optimizes images automatically by resizing, lazyloading and serving them in modern format like webP. this improves performance.

    14. Hybrid Pages
        SSR and SSG combined, can be combined with client side rendering too

    15. How does next.js optimize performance?
        Automatic code splitting
        Automatic optimization of images (lazy laoding)
        SSR and SSG
        Incremental Static Regeneration
        buitin support for lazy loading and dynamic imports
        support for webp and other modern image formats

    16. _app.js file in next.js?
        _app.js is the top level component in next.js. it is the entry point (root layout) for the next app (wrap around all pages in next.js)
        basically like theme, authentication, ...
    
    17. getStaticPaths in next.js?
        used in dynamic routes with static generation. defines the path to pre-render at built time. (useful in blogs, any static content pages)

    18. next.js Router API and how does it work?
        Router API allows to handle routing programmatically, navigate using router methods like 
        push, replace, back, forward, etc.
    
    19. _document.js and _app.js in next.js
        _document.js : customize html document structure (eg. adding custom metadata tags or some more)
        _app.js : customize app wide components (root layout) (eg. adding authentication, theme, etc)

    20. deploy next.js app?
        vercel - next.js company , aws, digitalocean,...
    
    21. Concept of Static Optimization in Next.js
        static optimization is a technique where it automatically determines the SSG page and keep it ready in build time, even if your pages use getServerSideProps.

    22. next.config.js in next.js
        Config file to include redirects, rewrites, custom webpack, configruations, env variable and more.

    23. authentication in next js
        general implementation + third party library NextAuth.js

    24. container component and a presentational component
        container component : responsible for managing the state and logic of a component
        presentational component : responsible for rendering the UI of a component
    
    25.
    
        
*/