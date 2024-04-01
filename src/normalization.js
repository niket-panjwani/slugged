/**
 * Normalizes a slug to ensure it is consistent. Removes leading and trailing separators, and replaces
 * multiple consecutive separators with a single one.
 * 
 * @param {string} slug - The slug to normalize.
 * @param {string} [separator='-'] - The separator used in the slug.
 * @returns {string} - The normalized slug.
 */
function normalizeSlug(slug, separator = '-') {
  return slug.replace(new RegExp(`^${separator}+|${separator}+$`, 'g'), '')
             .replace(new RegExp(`${separator}{2,}`, 'g'), separator);
}

module.exports = { normalizeSlug };
