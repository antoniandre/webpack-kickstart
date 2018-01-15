# New project with Webpack

This file is about how to create this kickstart project from scratch.

## Basic Setup

First let's create a directory, initialize npm, and install webpack locally:

```bash
mkdir project_root && cd project_root
npm init -y
# style-loader & css-loader are needed in order to import a CSS file from within a JavaScript module.
npm install --save-dev webpack style-loader css-loader
```

Now we'll create the following directory structure and contents:

__project__
```
    project_root
    |- package.json
+   |- webpack.config.dev.js
+   |- /dist
+      |- index.html
+   |- /src
+      |- index.js
```

In package.json add webpack in a start script:

__package.json__
```json
  "scripts": {
    "start": "webpack --config webpack.config.dev.js"
  }
```

__src/index.js__
```javascript
function component() {
  var element = document.createElement('div');

  element.innerHTML = "Hello World!";

  return element;
}

document.body.appendChild(component());
```

__index.html__
```html
<html>
  <head>
    <title>Webpack Kickstart</title>
  </head>
  <body>
    <script src="./bundle.js"></script>
  </body>
</html>
```

__webpack.config.dev.js__
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```

## Ready to test

Run npm start and open your project dist folder in browser!
```bash
npm start
```

## Next

- Pimp your devpack https://webpack.js.org/guides/
- Install Babel

### Using Babel

> _Babel_ let you write JavaScript code in ES6 syntax then it will convert it to ES5-like code for full browser support.

__Install babel__
```bash
# All needed for webpack.
npm install --save-dev babel-cli babel-preset-env babel-loader babel-core
```
__create a `.babelrc` file:__

```json
{
  "presets": ["env"]
}
```

__Update your webpack config__

Add this line to your webpack config modules rules:
```javascript
{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
```

__Use ES6 syntax__

You can now write code in ES6 syntax, let's rewrite `src/index.js`:

```javascript
import path from 'path'
import './style.css'

const component = () => {
    let element = document.createElement('h1')
    element.innerHTML = "Hello World!"

    return element
}

document.body.appendChild(component())
```

__Test that it is working__

At this point, if you comment the line:
```javascript
{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
```
from webpack config and rebuild, the app will still run.

But checking the bundled js file in the network tab of browser dev tools will reveal the exact same code as you wrote.

(you can look for `hello world` and see the wrapping function syntax)

> Now if you uncomment the above line, in the network tab of the browser's dev tool you will see "transpiled" code written in ES5 syntax.