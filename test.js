'use strict';

/* deps: mocha */
var assert = require('assert');
var should = require('should');
var pascalcase = require('./');

describe('pascalcase', function () {
  it('should uppercase a single character string:', function () {
    pascalcase('a').should.equal('A');
  });

  it('should work with spaces:', function () {
    pascalcase('foo bar baz').should.equal('FooBarBaz');
  });

  it('should work with other non-word-characters:', function () {
    pascalcase('foo_bar-baz').should.equal('FooBarBaz');
    pascalcase('foo.bar.baz').should.equal('FooBarBaz');
    pascalcase('foo/bar/baz').should.equal('FooBarBaz');
    pascalcase('foo[bar)baz').should.equal('FooBarBaz');
    pascalcase('#foo+bar*baz').should.equal('FooBarBaz');
    pascalcase('$foo~bar`baz').should.equal('FooBarBaz');
  });

  it('should strip leading non-word-characters:', function () {
    pascalcase('_foo_bar-baz-').should.equal('FooBarBaz');
  });

  it('should throw an error when invalid args are passed:', function () {
    (function () {
      pascalcase();
    }).should.throw('expected a string.');
  });
});
