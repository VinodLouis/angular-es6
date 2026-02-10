# angular-es6

Small Demo of how to use angular Js with ES6

## Prerequisites

- Node Js https://nodejs.org/
- Webpack http://webpack.github.io/

### Running the Application in development mode

1. Clone the repo on your machine
2. Go into the root folder
3. Do an `npm install` (which will install all the dependencies)
4. Then hit `npm run webpack-dev-server` and wait for the server to run
5. Open your browser pointing at http://localhost:9002/app/dist/index.html#/home

### Running the Application for production

- The concept here is to get all the files in single build i.e in app/dist/js/build-js.js

1. From root folder run `npm run webpack-dev` This will unify all code into common build [ This will uglify all the javascript and html code into a single file build-js ]
2. Now you can run the index.html independently without the src reference
