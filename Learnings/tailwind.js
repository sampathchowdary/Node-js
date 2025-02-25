// TailWind CSS

/*

    1. What is Tailwind CSS?
        it is a utility-first CSS framework that provides low-level utility classes to help us design custom ui without custom css

    2. How Tailwind is different from bootstrap and regular css ?
        tailwind css is utility first css - it won't come with predefined css
        bootstarp has prebuilt components and a more opinionated approach to layouts
        regular css is just a language for styling web pages

    3. How does Tailwind css work ?
        uses utility classes to apply specific CSS properties directly to HTML elements. This makes it faster to style elements without writing custom css.

    4. utility classes in tailwind css ?
        utility classes are small, single-purpose classes that apply one css rule.

    5. @tailwind directive ? and base, components, utilities
        directive imports tailwind's predefined styles into css. it is used to pull
        base - base styles, componets - predefined compoent styles, utilities - all utility classes

    6. Tailwind CSS installation
        npm install tailwindcss
        configure  : create tailwind.config.js / adding a html cdn link in html
        -- using config file we can customize design like colors, spacing, fonts, breakpoints, and more.

    7. flex, spacing, ... 
        tailwind provides utility classes for common layout and spacing tasks. - m-4,p-4,mt-4 ....
        flex - flexbox utility classes - flex-row, flex-col, justify-center, items-center


    9. How to create a responsive layout with tailwind css ?
        class="flex sm:flex-col md:flex-row" = these are rhe responsive utilities

    10. @apply directive
        allows us to apply mutliple utility class to a custom class (this is useful for reusablity and keeping html cleaner)

    11. custom themes ? or design systems
        using config

    12. PurgeCSS in Tailwind CSS
        removed unused css from the final build, reducing the file size. 

    13. center an element
        mx-auto, text-center, items-center, justify-center 
        class="flex items-center justify-center h-screen"

    14. diffrence between px-4, p-4
        x, y are horizonatal and vertical - x padding on left and right

    15. process of extending tailwind css with custom plugins
        npm install tailwindcss-plugin-extend
        it will allows to added new utilities like color palette or custom rules

    16. how would you handle a situation where tailwind default configuration doesn't meet a design requirement?
        we can udpdate the config file and add new values or override defaults to meet specific design needs.

    17. impact of !importatnt
        it forces the applied style to override other conflicting styles

    18. Tailwind with react, vue, angular
        we can add all utilities to classname in react and vue components

    19. optimize tailwind for performance in production
        Enable JIT mode which generates CSS on-demand as we use classes ensuring that only the necessary stles are included.
        PurgeCSS to remove unused CSS

    20. reusable components with tailwind
        @apply to create and reuse 

    21. what is tialwind JIT (Just In Time) mode? and it benefit performance?
        JIT compiles only the CSS in that html files, Instead of generating all possible classes upfront, it generates them dynamically during development
        and removes unused ones in production. This improves performance and reduces build size.


*/