# skit-react

An example of using skit with React by preprocessing .jsx files and handling server-side prerendering of react components transparently.

## how to run

<code>main.js</code> defines a custom .jsx resource loader for React, so you need to run <code>main.js</code> like so:

    git clone https://github.com/taylorhughes/skit-react.git
    cd skit-react
    npm install
    node main.js

(the <code>skit run</code> command does not know where to get the custom loaders; there is no standard place to put them yet.)

## how it works

- [main.js](https://github.com/taylorhughes/skit-react/blob/master/main.js) sets up .jsx preprocessing and injects the react runtime dependency;
- [root/library/BaseController.jsx](https://github.com/taylorhughes/skit-react/blob/master/root/library/BaseController.jsx) handles the React -> string -> DOM -> react lifecycle;
- and [root/public/Home.jsx](https://github.com/taylorhughes/skit-react/blob/master/root/public/Home.jsx) is the page at http://localhost:3001/ if you run the demo. Home inherits from BaseController so it gets the React serialization/reinstantiation from it.
