# MockWebStorage

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
