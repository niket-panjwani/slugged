const { customizeSeparator } = require('../src/separatorCustomization');

describe('customizeSeparator', () => {
  test('should replace spaces with hyphens by default', () => {
    const input = 'hello world';
    const expected = 'hello-world';
    expect(customizeSeparator(input)).toBe(expected);
  });

  test('should replace spaces with a custom separator if provided', () => {
    const input = 'hello world';
    const options = { separator: '_' };
    const expected = 'hello_world';
    expect(customizeSeparator(input, options)).toBe(expected);
  });

  test('should handle input with multiple consecutive spaces', () => {
    const input = 'hello   world';
    const expected = 'hello-world';
    expect(customizeSeparator(input)).toBe(expected);
  });

  test('should return the same string if it does not contain any spaces', () => {
    const input = 'helloworld';
    const expected = 'helloworld';
    expect(customizeSeparator(input)).toBe(expected);
  });
});