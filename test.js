/* eslint-disable import/no-extraneous-dependencies */

import test from 'ava';
import 'babel-core/register';
import walk from './lib';

test('walk empty array', t => {
  walk({ components: [] }, () => {
    t.fail('callback should not be run');
  });
});

test('walk simple anf', t => {
  const input = { components: [{ role: 'photo', URL: 'bundle://image-1' }] };
  const expected = input.components[0];
  walk(input, obj => {
    t.is(obj, expected);
  });
});

test('walk nested anf', t => {
  const input = {
    components: [{
      role: 'container',
      components: [{
        role: 'container',
        components: [{
          role: 'photo',
          URL: 'bundle://image-1'
        }]
      }]
    }]
  };
  const expected = [
    input.components[0],
    input.components[0].components[0],
    input.components[0].components[0].components[0]
  ];
  const actual = [];
  walk(input, obj => { actual.push(obj); });

  t.is(actual[0], expected[0]);
  t.is(actual[1], expected[1]);
  t.is(actual[2], expected[2]);
});
