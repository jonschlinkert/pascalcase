import { strict as assert } from 'assert';
import pascalcase from '../index.js';

describe('pascalcase', () => {
  it('should uppercase a single character string', () => {
    assert.equal(pascalcase('a'), 'A');
    assert.equal(pascalcase('Z'), 'Z');
  });

  it('should transform multiple single characters', () => {
    assert.equal(pascalcase('a b c d'), 'ABCD');
    assert.equal(pascalcase('a bb c ddd'), 'ABbCDdd');
    assert.equal(pascalcase('Z'), 'Z');
  });

  it('should work with spaces', () => {
    assert.equal(pascalcase('foo bar baz'), 'FooBarBaz');
    assert.equal(pascalcase('foo     baz'), 'FooBaz');
    assert.equal(pascalcase('  foo  bar   baz  '), 'FooBarBaz');
  });

  it('should work with numbers', () => {
    assert.equal(pascalcase(3), '3');
    assert.equal(pascalcase('foo2bar5baz'), 'Foo2Bar5Baz');
    assert.equal(pascalcase('foo 2 bar 5 baz'), 'Foo2Bar5Baz');
  });

  it('should work with upper case characters', () => {
    assert.equal(pascalcase('fooBARbaz'), 'FooBaRbaz');
    assert.equal(pascalcase('fooBARbaz', { preserveConsecutiveUppercase: true }), 'FooBARbaz');
    assert.equal(pascalcase('FOO_BAR_BAZ'), 'FooBarBaz');
    assert.equal(pascalcase('FOO_BAR_BAZ', { preserveConsecutiveUppercase: true }), 'FOOBARBAZ');
    assert.equal(pascalcase('The IRS Is Mean'), 'TheIrsIsMean');
    assert.equal(pascalcase('The IRS Is Mean', { preserveConsecutiveUppercase: true }), 'TheIRSIsMean');
    assert.equal(pascalcase('We saw a UFO'), 'WeSawAUfo');
    assert.equal(pascalcase('We saw a UFO', { preserveConsecutiveUppercase: true }), 'WeSawAUFO');
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
    assert.equal(pascalcase('foo[bar]baz'), 'FooBarBaz');
    assert.equal(pascalcase('foo(bar)baz'), 'FooBarBaz');
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
    assert.equal(pascalcase(function foo_bar() {}), 'FooBar');
    assert.equal(pascalcase(function foo_bar(a, b) { return a + b; }), 'FooBar');
    assert.equal(pascalcase({}), 'ObjectObject');
    assert.equal(pascalcase(/foo/), 'Foo');
  });
});
