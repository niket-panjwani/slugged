const { isValidSlug } = require('../src/validation');

describe('isValidSlug', () => {
  test('should return true for valid slugs', () => {
    expect(isValidSlug('hello-world')).toBe(true);
    expect(isValidSlug('123-456')).toBe(true);
    expect(isValidSlug('a1-b2')).toBe(true);
  });

  test('should return false for slugs that start or end with a separator', () => {
    expect(isValidSlug('-hello-world')).toBe(false);
    expect(isValidSlug('hello-world-')).toBe(false);
  });

  test('should return false for slugs that contain characters not allowed by the default regex', () => {
    expect(isValidSlug('hello_world')).toBe(false);
    expect(isValidSlug('hello world')).toBe(false);
    expect(isValidSlug('hello.world')).toBe(false);
  });

  test('should handle custom allowedCharactersRegex', () => {
    const allowedCharactersRegex = /^[a-zA-Z0-9-_]+$/;
    expect(isValidSlug('hello_world', allowedCharactersRegex)).toBe(true);
    expect(isValidSlug('hello-world', allowedCharactersRegex)).toBe(true);
    expect(isValidSlug('hello world', allowedCharactersRegex)).toBe(false);
  });
});