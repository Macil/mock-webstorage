/* @flow */

import assert from 'assert';

import MockWebStorage from '../src';

describe('MockWebStorage', function() {
  it('works', function() {
    const foo = new MockWebStorage();
    foo.setItem('a', 'b');
    assert.strictEqual(foo.getItem('a'), 'b');
  });
});
