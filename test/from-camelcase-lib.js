import { strict as assert } from 'assert';
import pascal from '../index.js';

/**
 * These tests were ported from sindresorhus/camelcase, since pascalcase
 * depends on that lib and we need to test for regressions and compat.
 */

const pascalcase = (input, options = {}) => {
  return pascal(input, { ...options, punctuationRegex: false });
};

describe('pascalcase (tests ported from sindresorhus/camelcase)', () => {
  it('should pascalcase a string', () => {
    assert.equal(pascalcase('foo'), 'Foo');
    assert.equal(pascalcase('foo-bar'), 'FooBar');
    assert.equal(pascalcase('foo-bar-baz'), 'FooBarBaz');
    assert.equal(pascalcase('foo--bar'), 'FooBar');
    assert.equal(pascalcase('--foo-bar'), 'FooBar');
    assert.equal(pascalcase('--foo--bar'), 'FooBar');
    assert.equal(pascalcase('FOO-BAR'), 'FooBar');
    assert.equal(pascalcase('FOÈ-BAR'), 'FoèBar');
    assert.equal(pascalcase('-foo-bar-'), 'FooBar');
    assert.equal(pascalcase('--foo--bar--'), 'FooBar');
    assert.equal(pascalcase('foo-1'), 'Foo1');
    assert.equal(pascalcase('foo.bar'), 'FooBar');
    assert.equal(pascalcase('foo..bar'), 'FooBar');
    assert.equal(pascalcase('..foo..bar..'), 'FooBar');
    assert.equal(pascalcase('foo_bar'), 'FooBar');
    assert.equal(pascalcase('__foo__bar__'), 'FooBar');
    assert.equal(pascalcase('foo bar'), 'FooBar');
    assert.equal(pascalcase('  foo  bar  '), 'FooBar');
    assert.equal(pascalcase('-'), '-');
    assert.equal(pascalcase(' - '), '-');
    assert.equal(pascalcase('fooBar'), 'FooBar');
    assert.equal(pascalcase('fooBar-baz'), 'FooBarBaz');
    assert.equal(pascalcase('foìBar-baz'), 'FoìBarBaz');
    assert.equal(pascalcase('fooBarBaz-bazzy'), 'FooBarBazBazzy');
    assert.equal(pascalcase('FBBazzy'), 'FbBazzy');
    assert.equal(pascalcase('F'), 'F');
    assert.equal(pascalcase('FooBar'), 'FooBar');
    assert.equal(pascalcase('Foo'), 'Foo');
    assert.equal(pascalcase('FOO'), 'Foo');
    assert.equal(pascalcase(['foo', 'bar']), 'FooBar');
    assert.equal(pascalcase(['foo', '-bar']), 'FooBar');
    assert.equal(pascalcase(['foo', '-bar', 'baz']), 'FooBarBaz');
    assert.equal(pascalcase(['', '']), '');
    assert.equal(pascalcase('--'), '');
    assert.equal(pascalcase(''), '');
    assert.equal(pascalcase('--__--_--_'), '');
    assert.equal(pascalcase(['---_', '--', '', '-_- ']), '');
    assert.equal(pascalcase('..foo..bar..'), 'FooBar');
    assert.equal(pascalcase('foo bar?'), 'FooBar?');
    assert.equal(pascalcase('foo bar!'), 'FooBar!');
    assert.equal(pascalcase('foo bar$'), 'FooBar$');
    assert.equal(pascalcase('foo-bar#'), 'FooBar#');
    assert.equal(pascalcase('XMLHttpRequest'), 'XmlHttpRequest');
    assert.equal(pascalcase('AjaxXMLHttpRequest'), 'AjaxXmlHttpRequest');
    assert.equal(pascalcase('Ajax-XMLHttpRequest'), 'AjaxXmlHttpRequest');
    assert.equal(pascalcase([]), '');
    assert.equal(pascalcase('mGridCol6@md'), 'MGridCol6@md');
    assert.equal(pascalcase('A::a'), 'A::a');
    assert.equal(pascalcase('Hello1World'), 'Hello1World');
    assert.equal(pascalcase('Hello11World'), 'Hello11World');
    assert.equal(pascalcase('hello1world'), 'Hello1World');
    assert.equal(pascalcase('Hello1World11foo'), 'Hello1World11Foo');
    assert.equal(pascalcase('Hello1'), 'Hello1');
    assert.equal(pascalcase('hello1'), 'Hello1');
    assert.equal(pascalcase('1Hello'), '1Hello');
    assert.equal(pascalcase('1hello'), '1Hello');
    assert.equal(pascalcase('h2w'), 'H2W');
    assert.equal(pascalcase('розовый_пушистый-единороги'), 'РозовыйПушистыйЕдинороги');
    assert.equal(pascalcase('розовый_пушистый-единороги'), 'РозовыйПушистыйЕдинороги');
    assert.equal(pascalcase('РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ'), 'РозовыйПушистыйЕдинороги');
    assert.equal(pascalcase('桑德在这里。'), '桑德在这里。');
    assert.equal(pascalcase('桑德在这里。'), '桑德在这里。');
    assert.equal(pascalcase('桑德_在这里。'), '桑德在这里。');
  });

  it('pascalcase with pascalCase option', () => {
    assert.equal(pascalcase('foo'), 'Foo');
    assert.equal(pascalcase('foo-bar'), 'FooBar');
    assert.equal(pascalcase('foo-bar-baz'), 'FooBarBaz');
    assert.equal(pascalcase('foo--bar'), 'FooBar');
    assert.equal(pascalcase('--foo-bar'), 'FooBar');
    assert.equal(pascalcase('--foo--bar'), 'FooBar');
    assert.equal(pascalcase('FOO-BAR'), 'FooBar');
    assert.equal(pascalcase('FOÈ-BAR'), 'FoèBar');
    assert.equal(pascalcase('-foo-bar-'), 'FooBar');
    assert.equal(pascalcase('--foo--bar--'), 'FooBar');
    assert.equal(pascalcase('foo-1'), 'Foo1');
    assert.equal(pascalcase('foo.bar'), 'FooBar');
    assert.equal(pascalcase('foo..bar'), 'FooBar');
    assert.equal(pascalcase('..foo..bar..'), 'FooBar');
    assert.equal(pascalcase('foo_bar'), 'FooBar');
    assert.equal(pascalcase('__foo__bar__'), 'FooBar');
    assert.equal(pascalcase('__foo__bar__'), 'FooBar');
    assert.equal(pascalcase('foo bar'), 'FooBar');
    assert.equal(pascalcase('  foo  bar  '), 'FooBar');
    assert.equal(pascalcase('-'), '-');
    assert.equal(pascalcase(' - '), '-');
    assert.equal(pascalcase('fooBar'), 'FooBar');
    assert.equal(pascalcase('fooBar-baz'), 'FooBarBaz');
    assert.equal(pascalcase('foìBar-baz'), 'FoìBarBaz');
    assert.equal(pascalcase('fooBarBaz-bazzy'), 'FooBarBazBazzy');
    assert.equal(pascalcase('FBBazzy'), 'FbBazzy');
    assert.equal(pascalcase('F'), 'F');
    assert.equal(pascalcase('FooBar'), 'FooBar');
    assert.equal(pascalcase('Foo'), 'Foo');
    assert.equal(pascalcase('FOO'), 'Foo');
    assert.equal(pascalcase(['foo', 'bar']), 'FooBar');
    assert.equal(pascalcase(['foo', '-bar']), 'FooBar');
    assert.equal(pascalcase(['foo', '-bar', 'baz']), 'FooBarBaz');
    assert.equal(pascalcase(['', '']), '');
    assert.equal(pascalcase('--'), '');
    assert.equal(pascalcase(''), '');
    assert.equal(pascalcase('--__--_--_'), '');
    assert.equal(pascalcase(['---_', '--', '', '-_- ']), '');
    assert.equal(pascalcase('foo bar?'), 'FooBar?');
    assert.equal(pascalcase('foo bar!'), 'FooBar!');
    assert.equal(pascalcase('foo bar$'), 'FooBar$');
    assert.equal(pascalcase('foo-bar#'), 'FooBar#');
    assert.equal(pascalcase('XMLHttpRequest'), 'XmlHttpRequest');
    assert.equal(pascalcase('AjaxXMLHttpRequest'), 'AjaxXmlHttpRequest');
    assert.equal(pascalcase('Ajax-XMLHttpRequest'), 'AjaxXmlHttpRequest');
    assert.equal(pascalcase([]), '');
    assert.equal(pascalcase('mGridCol6@md'), 'MGridCol6@md');
    assert.equal(pascalcase('A::a'), 'A::a');
    assert.equal(pascalcase('Hello1World'), 'Hello1World');
    assert.equal(pascalcase('Hello11World'), 'Hello11World');
    assert.equal(pascalcase('hello1world'), 'Hello1World');
    assert.equal(pascalcase('hello1World'), 'Hello1World');
    assert.equal(pascalcase('hello1'), 'Hello1');
    assert.equal(pascalcase('Hello1'), 'Hello1');
    assert.equal(pascalcase('1hello'), '1Hello');
    assert.equal(pascalcase('1Hello'), '1Hello');
    assert.equal(pascalcase('h1W'), 'H1W');
    assert.equal(pascalcase('РозовыйПушистыйЕдинороги'), 'РозовыйПушистыйЕдинороги');
    assert.equal(pascalcase('розовый_пушистый-единороги'), 'РозовыйПушистыйЕдинороги');
    assert.equal(pascalcase('РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ'), 'РозовыйПушистыйЕдинороги');
    assert.equal(pascalcase('桑德在这里。'), '桑德在这里。');
    assert.equal(pascalcase('桑德_在这里。'), '桑德在这里。');
  });

  it('pascalcase with preserveConsecutiveUppercase option', () => {
    assert.equal(pascalcase('foo-BAR', { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase('Foo-BAR', { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase('fooBAR', { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase('fooBaR', { preserveConsecutiveUppercase: true }), 'FooBaR');
    assert.equal(pascalcase('FOÈ-BAR', { preserveConsecutiveUppercase: true }), 'FOÈBAR');
    assert.equal(pascalcase(['foo', 'BAR'], { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase(['foo', '-BAR'], { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase(['foo', '-BAR', 'baz'], { preserveConsecutiveUppercase: true }), 'FooBARBaz');
    assert.equal(pascalcase(['', ''], { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('--', { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('', { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('--__--_--_', { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase(['---_', '--', '', '-_- '], { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('foo BAR?', { preserveConsecutiveUppercase: true }), 'FooBAR?');
    assert.equal(pascalcase('foo BAR!', { preserveConsecutiveUppercase: true }), 'FooBAR!');
    assert.equal(pascalcase('foo BAR$', { preserveConsecutiveUppercase: true }), 'FooBAR$');
    assert.equal(pascalcase('foo-BAR#', { preserveConsecutiveUppercase: true }), 'FooBAR#');
    assert.equal(pascalcase('XMLHttpRequest', { preserveConsecutiveUppercase: true }), 'XMLHttpRequest');
    assert.equal(pascalcase('AjaxXMLHttpRequest', { preserveConsecutiveUppercase: true }), 'AjaxXMLHttpRequest');
    assert.equal(pascalcase('Ajax-XMLHttpRequest', { preserveConsecutiveUppercase: true }), 'AjaxXMLHttpRequest');
    assert.equal(pascalcase([], { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('mGridCOl6@md'), 'MGridCOl6@md');
    assert.equal(pascalcase('mGridCOl6@md', { preserveConsecutiveUppercase: true }), 'MGridCOl6@md');
    assert.equal(pascalcase('A::a', { preserveConsecutiveUppercase: true }), 'A::a');
    assert.equal(pascalcase('Hello1WORLD', { preserveConsecutiveUppercase: true }), 'Hello1WORLD');
    assert.equal(pascalcase('Hello11WORLD', { preserveConsecutiveUppercase: true }), 'Hello11WORLD');
    assert.equal(pascalcase('РозовыйПушистыйFOOдинорогиf', { preserveConsecutiveUppercase: true }), 'РозовыйПушистыйFOOдинорогиf');
    assert.equal(pascalcase('桑德在这里。', { preserveConsecutiveUppercase: true }), '桑德在这里。');
    assert.equal(pascalcase('桑德_在这里。', { preserveConsecutiveUppercase: true }), '桑德在这里。');
  });

  it('pascalcase with both pascalCase and preserveConsecutiveUppercase option', () => {
    assert.equal(pascalcase('foo-BAR', { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase('fooBAR', { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase('fooBaR', { preserveConsecutiveUppercase: true }), 'FooBaR');
    assert.equal(pascalcase('fOÈ-BAR', { preserveConsecutiveUppercase: true }), 'FOÈBAR');
    assert.equal(pascalcase('--foo.BAR', { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase(['Foo', 'BAR'], { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase(['foo', '-BAR'], { preserveConsecutiveUppercase: true }), 'FooBAR');
    assert.equal(pascalcase(['foo', '-BAR', 'baz'], { preserveConsecutiveUppercase: true }), 'FooBARBaz');
    assert.equal(pascalcase(['', ''], { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('--', { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('', { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('--__--_--_', { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase(['---_', '--', '', '-_- '], { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('foo BAR?', { preserveConsecutiveUppercase: true }), 'FooBAR?');
    assert.equal(pascalcase('foo BAR!', { preserveConsecutiveUppercase: true }), 'FooBAR!');
    assert.equal(pascalcase('Foo BAR$', { preserveConsecutiveUppercase: true }), 'FooBAR$');
    assert.equal(pascalcase('foo-BAR#', { preserveConsecutiveUppercase: true }), 'FooBAR#');
    assert.equal(pascalcase('xMLHttpRequest', { preserveConsecutiveUppercase: true }), 'XMLHttpRequest');
    assert.equal(pascalcase('ajaxXMLHttpRequest', { preserveConsecutiveUppercase: true }), 'AjaxXMLHttpRequest');
    assert.equal(pascalcase('Ajax-XMLHttpRequest', { preserveConsecutiveUppercase: true }), 'AjaxXMLHttpRequest');
    assert.equal(pascalcase([], { preserveConsecutiveUppercase: true }), '');
    assert.equal(pascalcase('mGridCOl6@md', { preserveConsecutiveUppercase: true }), 'MGridCOl6@md');
    assert.equal(pascalcase('A::a', { preserveConsecutiveUppercase: true }), 'A::a');
    assert.equal(pascalcase('Hello1WORLD', { preserveConsecutiveUppercase: true }), 'Hello1WORLD');
    assert.equal(pascalcase('Hello11WORLD', { preserveConsecutiveUppercase: true }), 'Hello11WORLD');
    assert.equal(pascalcase('pозовыйПушистыйFOOдинорогиf', { preserveConsecutiveUppercase: true }), 'PозовыйПушистыйFOOдинорогиf');
    assert.equal(pascalcase('桑德在这里。', { preserveConsecutiveUppercase: true }), '桑德在这里。');
    assert.equal(pascalcase('桑德_在这里。', { preserveConsecutiveUppercase: true }), '桑德在这里。');
  });

  it('pascalcase with locale option', () => {
    assert.equal(pascalcase('lorem-ipsum', { locale: 'tr-TR' }), 'Loremİpsum');
    assert.equal(pascalcase('lorem-ipsum', { locale: 'en-EN' }), 'LoremIpsum');
    assert.equal(pascalcase('lorem-ipsum', { locale: ['tr', 'TR', 'tr-TR'] }), 'Loremİpsum');
    assert.equal(pascalcase('lorem-ipsum', { locale: ['en-EN', 'en-GB'] }), 'LoremIpsum');
    assert.equal(pascalcase('ipsum-dolor', { locale: 'tr-TR' }), 'İpsumDolor');
    assert.equal(pascalcase('ipsum-dolor', { locale: 'en-EN' }), 'IpsumDolor');
    assert.equal(pascalcase('ipsum-dolor', { locale: ['tr', 'TR', 'tr-TR'] }), 'İpsumDolor');
    assert.equal(pascalcase('ipsum-dolor', { locale: ['en-EN', 'en-GB'] }), 'IpsumDolor');
  });
});