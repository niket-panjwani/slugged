const { normalizeSlug } = require('../src/normalization');

describe('normalizeSlug', () => {
  test('should remove leading and trailing separators', () => {
    expect(normalizeSlug('-my-slug-')).toBe('my-slug');
    expect(normalizeSlug('---my-slug---')).toBe('my-slug');
  });

  test('should replace multiple consecutive separators with a single one', () => {
    expect(normalizeSlug('my--slug')).toBe('my-slug');
    expect(normalizeSlug('my---slug')).toBe('my-slug');
  });

  test('should handle empty slugs', () => {
    expect(normalizeSlug('')).toBe('');
  });

  test('should handle slugs without separators', () => {
    expect(normalizeSlug('myslug')).toBe('myslug');
  });

  test('should handle custom separators', () => {
    expect(normalizeSlug('my_slug', '_')).toBe('my_slug');
    expect(normalizeSlug('_my_slug_', '_')).toBe('my_slug');
    expect(normalizeSlug('my__slug', '_')).toBe('my_slug');
  });
});