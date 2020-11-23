'use strict';

const { isObject, makeOptionsArray } = require('../src/helpers.js');

test('isObject returns boolean', () => {
  expect( isObject( {} ) ).toBe(true);
  expect( isObject( 10 ) ).toBe(false);
});

test('makeOptionsArray returns an array', () => {
  expect( makeOptionsArray() ).toStrictEqual( [] );
});

test('makeOptionsArray combines objects', () => {
  const results = makeOptionsArray(
    {
      a: 'a',
    },
    {
      b: 'b',
    },
  );

  expect( results ).toStrictEqual(
    [
      {
        a: 'a',
        b: 'b',
      },
    ],
  );
});

test('makeOptionsArray combines multiple objects', () => {
  const results = makeOptionsArray(
    {
      a: 'a',
    },
    [
      {
        b: 'b',
      },
      {
        c: 'c',
      },
    ],
  );

  expect( results ).toStrictEqual(
    [
      {
        a: 'a',
        b: 'b',
      },
      {
        a: 'a',
        c: 'c',
      },
    ],
  );
});

test('makeOptionsArray removes non-objects', () => {
  const results = makeOptionsArray( {}, [ {}, 'a', 1, null, undefined ] );

  expect( results ).toStrictEqual( [ {} ] );
});

test('makeOptionsArray quick array wrap', () => {
  const options = {};
  const results = makeOptionsArray( options, options );

  expect( results ).toStrictEqual( [ options ] );
});
