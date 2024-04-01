const { truncateSlug } = require('../src/truncation');

describe('truncateSlug', () => {
  test('should return the same slug if its length is less than or equal to maxLength', () => {
    const slug = 'hello-world';
    const maxLength = 20;
    expect(truncateSlug(slug, maxLength)).toBe(slug);
  });

  test('should truncate the slug to maxLength if preserveWords is false', () => {
    const slug = 'hello-world';
    const maxLength = 5;
    expect(truncateSlug(slug, maxLength, false)).toBe('hello');
  });

  test('should not split words when truncating if preserveWords is true', () => {
    const slug = 'hello-world';
    const maxLength = 9;
    expect(truncateSlug(slug, maxLength)).toBe('hello');
  });

  test('should handle slugs without separators', () => {
    const slug = 'helloworld';
    const maxLength = 5;
    expect(truncateSlug(slug, maxLength)).toBe('hello');
  });

  test('should handle custom separators', () => {
    const slug = 'hello_world';
    const maxLength = 9;
    const separator = '_';
    expect(truncateSlug(slug, maxLength, true, separator)).toBe('hello');
  });
});