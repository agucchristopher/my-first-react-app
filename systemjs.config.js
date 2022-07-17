SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: false,
  packages:{
    "/": "js"
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    },
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17/umd/react.production.min.js',
    'react-dom': 'react-dom@17/umd/react-dom.production.min.js',
    'css': 'systemjs-plugin-css@latest/css.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/index.jsx')
  .catch(console.error.bind(console));