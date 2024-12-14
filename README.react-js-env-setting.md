# Build React environment without CRA

I am currently focused on reimplementing a web application using React. The goal is to set up a custom development environment from scratch, intentionally avoiding the use of Create React App (CRA) or other frameworks. This approach allows me to gain a deeper understanding of the essential libraries and configurations required to build a React application effectively.

-    gitHub URL: [Noej Ijkus](https://github.com/ijkuS)
-    OOA gitHub URL: [OOA repository](https://github.com/ijkuS/ooa-6)
-    Live Site URL: [OOA](https://ijkus.github.io/ooa-6/)

## Table of contents

-    [My process](#my-process)

     -    [1. Create Folder and Initialize `package.json`](#1-create-folder-and-initialize-packagejson)
     -    [2. Install core dependencies for React](#2-install-core-react-packages-dependencies)
     -    [3. Install and Configure Development Libraries (devDependencies)](#3-install-and-configure-development-libraries-devdependencies)
     -    [4. Install Webpack](#4-install-webpack)
     -    [5. Install Loaders](#5-install-loaders)
     -    [6. Install Plugins](#6-install-plugins)
     -    [7. Setting for Webpack](#7-setting-for-webpack)
     -    [8. Setting for dotenv](#8-setting-for-dotenv)
     -    [9. Build React Components](#9-build-react-components)
     -    [10. Run the Application](#10-run-the-application)

### 1. Create Folder and Initialize `package.json`

```shell
mkdir portfolio-1
cd portfolio-1

npm init -y
```

### 2. Install Core React Packages (Dependencies)

Dependencies required for the application to function:

```shell
npm install react react-dom react-router-dom
```

-    **react**: core library for building user interfaces.
-    **react-dom**: Enables React to render components to the DOM.
-    **react-router-dom**: Provides routing capabilities for React applications (applicable since this is not a Next.js app).

### 3. Install and Configure Development Libraries (devDependencies)

These libraries are not directly related to the functionality of the application but are essential for the development process.

**Babel**

```shell
npm install @babel/core @babel/preset-react @babel/preset-env -D
```

-    @babel/core: Core library for Babel.
-    @babel/preset-env: Babel preset for compiling modern JavaScript to compatible versions.
-    @babel/preset-react: Babel preset for transforming React JSX.

**Babel setting**
To configure Babel, create a `babel.config.js` file in the root directory and set up the presets.

```js
module.exports = {
	presets: ['@babel/preset-react', '@babel/preset-env'],
};
```

### 4. Install Webpack

```shell
npm install webpack webpack-cli webpack-dev-server mini-css-extract-plugin -D
```

-    webpack: The core of Webpack.
-    webpack-cli: Enables using Webpack from the command line.
-    webpack-dev-server: Builds Webpack in memory and runs a development server.
-    mini-css-extract-plugin: Extracts CSS into separate files and loads them into HTML.
     Note: The style-loader inserts CSS code directly into the HTML style tag.

### 5. Install Loaders

Loaders required for Webpack bundling

```shell
npm install babel-loader style-loader css-loader file-loader -D

npm i -D json-loader
```

-    babel-loader: Transpiles JSX and ES6+ syntax.
-    style-loader: Wraps the transformed CSS file in a <style> tag and inserts it into the DOM.
-    css-loader: Transforms CSS files into a format that JavaScript can understand.
-    file-loader: Loads files such as images and fonts.
-    json-loader: Loads JSON files

### 6. Install Plugins

```shell
npm install html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin dotenv -D
```

-    html-webpack-plugin: Inserts bundled JavaScript files into the HTML file and moves it to the folder where the bundled output is stored.
-    clean-webpack-plugin: Removes previous bundling results each time a new bundle is created.
-    mini-css-extract-plugin: Converts CSS into separate files.
-    dotenv: Loads environment variables from a .env file into the application.

### 7. Setting for Webpack

Create `webpack.config.js` file in the root directory and set up the presets.

### 8. Setting for dotenv

Update `webpack.config.js` file to use dotenv

### 9. Build React Components

-    1.   public/index.html
-    2.   src/App.jsx
-    3.   src/index.js

```
public
 ┗ index.html

src
 ┣ styles
 ┃ ┗ test.css
 ┣ App.jsx
 ┣ index.css
 ┗ index.js
```

### 10. Run the Application

Run the application using the script commands defined in `package.json`.

```shell
npm run dev
```
