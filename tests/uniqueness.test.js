const { ensureUniqueSlug } = require('../src/uniqueness')

describe('ensureUniqueSlug', () => {
  test('should return the same slug if it does not exist in existingSlugs', () => {
    const slug = 'hello-world'
    const existingSlugs = ['test-1', 'test-2']
    expect(ensureUniqueSlug(slug, existingSlugs)).toBe(slug)
  })

  test('should append a numeric suffix if the slug exists in existingSlugs', () => {
    const slug = 'test'
    const existingSlugs = ['test', 'test-1']
    expect(ensureUniqueSlug(slug, existingSlugs)).toBe('test-2')
  })

  test('should handle an empty array of existingSlugs', () => {
    const slug = 'hello-world'
    const existingSlugs = []
    expect(ensureUniqueSlug(slug, existingSlugs)).toBe(slug)
  })

  test('should handle custom separators', () => {
    const slug = 'test'
    const existingSlugs = ['test', 'test_1']
    const separator = '_'
    expect(ensureUniqueSlug(slug, existingSlugs, separator)).toBe('test_2')
  })
})
