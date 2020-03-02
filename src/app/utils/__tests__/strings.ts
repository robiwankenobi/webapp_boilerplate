import { uppercase } from '../strings';

test('returns string in uppercase', () => {
  expect(uppercase('a bcD')).toBe('A BCD');
});
