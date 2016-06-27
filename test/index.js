/* @flow */

import assert from 'assert';

import MockWebStorage from '../src';

describe('MockWebStorage', function() {
  it('setItem works', function() {
    const foo = new MockWebStorage();
    foo.setItem('a', 'A');
    foo.setItem('b', 'B');
    assert.strictEqual(foo.getItem('a'), 'A');
    assert.strictEqual(foo.getItem('b'), 'B');
  });

  it('removeItem works', function() {
    const foo = new MockWebStorage();
    foo.setItem('a', 'A');
    foo.setItem('b', 'B');
    foo.removeItem('a');
    assert.strictEqual(foo.getItem('a'), null);
    assert.strictEqual(foo.getItem('b'), 'B');
  });

  it('clear works', function() {
    const foo = new MockWebStorage();
    foo.setItem('a', 'A');
    foo.setItem('b', 'B');
    foo.clear();
    assert.strictEqual(foo.getItem('a'), null);
    assert.strictEqual(foo.getItem('b'), null);
  });

  it('length works', function() {
    const foo = new MockWebStorage();
    assert.strictEqual(foo.length, 0);
    foo.setItem('a', 'A');
    assert.strictEqual(foo.length, 1);
    foo.setItem('b', 'B');
    assert.strictEqual(foo.length, 2);
    foo.removeItem('a');
    assert.strictEqual(foo.length, 1);
    foo.removeItem('a');
    assert.strictEqual(foo.length, 1);
    foo.clear();
    assert.strictEqual(foo.length, 0);
  });

  it('key works', function() {
    const foo = new MockWebStorage();
    assert.strictEqual(foo.key(0), null);
    foo.setItem('a', 'A');
    assert.strictEqual(foo.key(0), 'a');
    assert.strictEqual(foo.key(1), null);
    foo.setItem('b', 'B');
    assert.strictEqual(foo.key(0), 'a');
    assert.strictEqual(foo.key(1), 'b');
    assert.strictEqual(foo.key(2), null);

    foo.removeItem('a');
    assert.strictEqual(foo.key(0), 'b');
    assert.strictEqual(foo.key(1), null);

    foo.setItem('a', 'A');
    assert.strictEqual(foo.key(0), 'b');
    assert.strictEqual(foo.key(1), 'a');
    assert.strictEqual(foo.key(2), null);

    assert.strictEqual(foo.key(-1), null);
    assert.strictEqual(foo.key(1.9), 'a');
    assert.strictEqual(foo.key('1.9'), 'a');

    foo.clear();
    assert.strictEqual(foo.key(0), null);
  });
});
