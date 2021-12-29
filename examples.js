'use strict';

const pascalcase = require('.');
const { split } = pascalcase;

const input = 'a bb c ddd';
console.log(input);
console.log(split(input).map(s => s.toLowerCase()));
console.log(split('ABbCDdd', { keepUpperCaseSequences: true }).map(s => s.toLowerCase()));
console.log(pascalcase(input));
