/**
 * - We achieve ES6 `import` keyword usage using Dynamic Imports (see ref.)
 * - Following expression is an IIFE: Immediately Invoked Function Expression
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports
 */

(async () => {
    // 1. Get path to content script
    const contentScriptPath = chrome.extension.getURL('js/content.js');

    // 2. Use import keyword to load the content script (as a module)
    const contentScript = await import(contentScriptPath);

    // 3. Execute the `main()` function
    contentScript.main();
})();



// import undom from 'undom';

// let document = undom();

// let foo = document.createElement('foo');
// foo.appendChild(document.createTextNode('Hello, World!'));
// document.body.appendChild(foo);