import assert from 'assert';
import oxc from 'oxc-transform';

const { code, declaration, errors } = oxc.transform(
  'test.ts',
  'class A<T> {}',
  {
    typescript: {
      // @ts-ignore -- invalid type definitions
      declaration: true,
    },
  },
);

assert.equal(code, 'class A {}\n');
assert.equal(declaration, 'declare class A<T> {}\n');
assert(errors.length == 0);

console.log(code);
console.log(declaration);
