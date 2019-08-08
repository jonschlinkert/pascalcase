'use strict';

require('mocha');
const assert = require('assert').strict;
const pascalcase = require('.');

describe('pascalcase', () => {
  it('should uppercase a single character string', () => {
    assert.equal(pascalcase('a'), 'A');
    assert.equal(pascalcase('Z'), 'Z');
  });

  it('should work with spaces', () => {
    assert.equal(pascalcase('foo bar baz'), 'FooBarBaz');
    assert.equal(pascalcase('foo     baz'), 'FooBaz');
    assert.equal(pascalcase('  foo  bar   baz  '), 'FooBarBaz');
  });

  it('should work with numbers', () => {
    assert.equal(pascalcase(3), '3');
    assert.equal(pascalcase('foo2bar5baz'), 'Foo2bar5baz');
    assert.equal(pascalcase('foo 2 bar 5 baz'), 'Foo2Bar5Baz');
  });

  it('should not lowercase existing camelcasing', () => {
    assert.equal(pascalcase('fooBarBaz'), 'FooBarBaz');
    assert.equal(pascalcase('FooBarBaz'), 'FooBarBaz');
    assert.equal(pascalcase(' FooBarBaz'), 'FooBarBaz');
    assert.equal(pascalcase(' fooBarBaz'), 'FooBarBaz');
  });

  it('should remove non-word-characters', () => {
    assert.equal(pascalcase('foo_bar-baz'), 'FooBarBaz');
    assert.equal(pascalcase('foo.bar.baz'), 'FooBarBaz');
    assert.equal(pascalcase('foo/bar/baz'), 'FooBarBaz');
    assert.equal(pascalcase('foo[bar)baz'), 'FooBarBaz');
    assert.equal(pascalcase('#foo+bar*baz'), 'FooBarBaz');
    assert.equal(pascalcase('$foo~bar`baz'), 'FooBarBaz');
    assert.equal(pascalcase('_foo_bar-baz-'), 'FooBarBaz');
    assert.equal(pascalcase('_A_B_c-'), 'ABC');
  });

  it('should return empty string when value null or undefined', () => {
    assert.equal(pascalcase(null), '');
    assert.equal(pascalcase(), '');
  });

  it('should call .toString() when value is not a primitive', () => {
    assert.equal(pascalcase(['one', 'two', 'three']), 'OneTwoThree');
    assert.equal(pascalcase([]), '');
    assert.equal(pascalcase(function foo_bar() {}), 'FunctionFooBar');
    assert.equal(pascalcase({}), 'ObjectObject');
    assert.equal(pascalcase(/foo/), 'Foo');
  });
});
