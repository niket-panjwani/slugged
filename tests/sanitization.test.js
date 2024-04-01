const { sanitizeString } = require('../src/sanitization');

describe('sanitizeString', () => {
  it('should remove non-alphanumeric characters except for hyphens and spaces', () => {
    const input = 'a$b#c@d!e-f g';
    const expected = 'a-b-c-d-e-f g';
    expect(sanitizeString(input)).toBe(expected);
  });

  it('should trim leading and trailing spaces', () => {
    const input = '   hello world   ';
    const expected = 'hello world';
    expect(sanitizeString(input)).toBe(expected);
  });

  it('should return an empty string if the input only contains non-alphanumeric characters', () => {
    const input = '!@#$%^&*()';
    const expected = '';
    expect(sanitizeString(input)).toBe(expected);
  });

  it('should return the same string if it only contains alphanumeric characters, hyphens, and spaces', () => {
    const input = 'abc-123 def';
    const expected = 'abc-123 def';
    expect(sanitizeString(input)).toBe(expected);
  });
});