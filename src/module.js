/**
 * module.js
 */
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Next line will need babel loader for the webpack
export const createObject = o => ({ ...o, anotherOption: 'Hi!' });
