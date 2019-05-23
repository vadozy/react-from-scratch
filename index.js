/**
 * index.js
 */
console.log('Hello, world!');

const logSomething = options => ({
  ...options,
  anotherOption: 'Hello!',
});
const options = logSomething({ one: '1', two: '2' });
console.log(options);

class A {
  constructor() {
    console.log('A constructor');
  }

  m1 = el => console.log(el);
}

const a = new A();
a.m1('Vadozy');
