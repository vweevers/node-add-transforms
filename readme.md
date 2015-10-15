# add-transforms

**Browserify plugin to add transforms to dependencies, by mutating the in-memory packages before transforms are applied.** Does not merge with existing transforms and the transforms must be installed somewhere in the hierarchy of node modules.

[![npm status](http://img.shields.io/npm/v/add-transforms.svg?style=flat-square)](https://www.npmjs.org/package/add-transforms) [![Dependency status](https://img.shields.io/david/vweevers/node-add-transforms.svg?style=flat-square)](https://david-dm.org/vweevers/node-add-transforms)

## usage

```js
var b = browserify('index.js')

// Add the envify transform to react-bootstrap and friends
b.plugin('add-transforms', {
  'react-bootstrap': ['envify'],
  'uncontrollable': ['envify']
})
```

## install

With [npm](https://npmjs.org) do:

```
npm install add-transforms
```

## license

[MIT](http://opensource.org/licenses/MIT) © [Vincent Weevers](vincentweevers.nl)
