# MockWebStorage

[![Circle CI](https://circleci.com/gh/AgentME/mock-webstorage.svg?style=shield)](https://circleci.com/gh/AgentME/mock-webstorage)
[![npm version](https://badge.fury.io/js/mock-webstorage.svg)](https://badge.fury.io/js/mock-webstorage)

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

[Flow](https://flowtype.org/) type declarations for this module are included! As
of Flow v0.32, you must add the following entries to your `.flowconfig` file's
options section for them to work:

```
[options]
unsafe.enable_getters_and_setters=true
esproposal.class_instance_fields=enable
```
