import { uppercase } from '../strings';

describe('String: uppercase', () => {
  test('returns valid string in uppercase', () => {
    expect(uppercase('a bcD')).toBe('A BCD');
  });

  test('can handle numbers in a string', () => {
    expect(uppercase('jk 23 j2j')).toBe('JK 23 J2J');
  });

  test('can handle empty string', () => {
    expect(uppercase('')).toBe('');
  });

  test('throws an error for undefined input', () => {
    expect(() => uppercase(undefined)).toThrow(
      new Error('Invalid string input'),
    );
  });

  test('throws an error for null input', () => {
    expect(() => uppercase(null)).toThrow(new Error('Invalid string input'));
  });
});
