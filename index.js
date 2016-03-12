import babelRequire from 'babel-require2';

console.log(babelRequire('./a/b/index.js', {
  sourceRoot: './a/b/',
  filenameRelative: './index.js'
}).default);
