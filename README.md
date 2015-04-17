# skit-react

An example of using skit with React by preprocessing .jsx files and handling server-side prerendering of react components transparently.

## how to run

<code>main.js</code> defines a custom .jsx resource loader for React, so you need to run <code>main.js</code> like so:

    git clone https://github.com/taylorhughes/skit-react.git
    cd skit-react
    npm install
    node main.js

(the <code>skit run</code> command does not know where to get the custom loaders; there is no standard place to put them yet.)
