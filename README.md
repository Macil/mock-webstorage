# MockWebStorage

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Macil/mock-webstorage/blob/master/LICENSE.txt) [![npm version](https://img.shields.io/npm/v/mock-webstorage.svg?style=flat)](https://www.npmjs.com/package/mock-webstorage) [![CircleCI Status](https://circleci.com/gh/Macil/mock-webstorage.svg?style=shield)](https://circleci.com/gh/Macil/mock-webstorage) [![Greenkeeper badge](https://badges.greenkeeper.io/Macil/mock-webstorage.svg)](https://greenkeeper.io/)

This module exports a class implementing the [Storage
interface](https://developer.mozilla.org/en-US/docs/Web/API/Storage). No
persistence strategy is built-in. This class is suitable for use as a
localStorage or sessionStorage mock in unit tests.

To access or set data on the storage instance, you must use the `getItem` and
`setItem` methods. The ability to access arbitrary properties on the native
localStorage object is not supported by this class.

## Usage Examples

If you had a file "fileToTest.js" which expected `localStorage` to be present
as a global, then you could test it in nodejs like this:

```js
var assert = require('assert');
var MockWebStorage = require('mock-webstorage');
global.localStorage = new MockWebStorage();

require('./fileToTest');

assert.strictEqual(localStorage.getItem('foo'), 'bar');
```

## Types

Both [TypeScript](https://www.typescriptlang.org/) and
[Flow](https://flowtype.org/) type definitions for this module are included!
The type definitions won't require any configuration to use.
