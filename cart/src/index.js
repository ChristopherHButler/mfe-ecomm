// This is an import **function** call (not an import statement).
// By using the `import()` function call inside of `index.js`, this gives webpack the opportunity to realize that before executing the `bootstrap.js` file, we have to go and fetch some code from the cart project.
import('./bootstrap');