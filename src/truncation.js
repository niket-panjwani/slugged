/**
 * Truncates a slug to a specified maximum length. If preserveWords is true, it attempts to not split
 * words by looking for the nearest separator before the maxLength.
 * 
 * @param {string} slug - The slug to truncate.
 * @param {number} maxLength - The maximum length the slug should be.
 * @param {boolean} [preserveWords=true] - Whether to avoid splitting words when truncating.
 * @param {string} [separator='-'] - The separator used in the slug.
 * @returns {string} - The truncated slug.
 */
function truncateSlug(slug, maxLength, preserveWords = true, separator = '-') {
  if (slug.length <= maxLength) return slug;

  if (preserveWords) {
    const lastSeparatorIndex = slug.lastIndexOf(separator, maxLength);
    return lastSeparatorIndex > 0 ? slug.substring(0, lastSeparatorIndex) : slug.substring(0, maxLength);
  }

  return slug.substring(0, maxLength);
}

module.exports = { truncateSlug };
