/**
 * Ensures slug uniqueness by appending a numeric suffix if the provided slug already exists.
 * 
 * @param {string} slug - The base slug to ensure uniqueness for.
 * @param {Array<string>} existingSlugs - An array of slugs that already exist.
 * @param {string} [separator='-'] - The separator used between the slug and the numeric suffix.
 * @returns {string} - A unique slug.
 */
function ensureUniqueSlug(slug, existingSlugs, separator = '-') {
  let uniqueSlug = slug;
  let counter = 1;

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${slug}${separator}${counter}`;
    counter += 1;
  }

  return uniqueSlug;
}

module.exports = { ensureUniqueSlug };
