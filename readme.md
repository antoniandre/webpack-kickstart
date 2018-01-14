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

### Install Babel

```bash
# All needed for webpack.
npm install --save-dev babel-cli babel-preset-env babel-loader babel-core
```
__.babelrc__

```json
{
  "presets": ["env"]
}
```

Then add this line to your webpack config modules rules: `{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },`