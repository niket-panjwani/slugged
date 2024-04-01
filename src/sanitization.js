/**
 * Sanitizes a string by removing or replacing characters not allowed in URLs,
 * converting non-alphanumeric characters into hyphens, except for spaces
 * and hyphens which are preserved. Returns an empty string if the input
 * only contains non-alphanumeric characters.
 * 
 * @param {string} input - The input string to sanitize.
 * @returns {string} - The sanitized string.
 */
function sanitizeString(input) {
  // Replace non-alphanumeric characters (except spaces and hyphens) with a hyphen
  let sanitized = input.replace(/[^a-zA-Z0-9 -]/g, '-');

  // If the resulting string is solely hyphens (or empty after trim), and the original string had no spaces/hyphens,
  // it means the original was only non-alphanumeric characters that got replaced with hyphens.
  if (sanitized.replace(/-/g, '').trim() === '' && !/[ -]/.test(input)) {
      return '';
  }

  // Consolidate multiple hyphens into a single hyphen, remove hyphens around spaces, and trim the result
  sanitized = sanitized.replace(/-+/g, '-')
                       .replace(/ - /g, ' ')
                       .trim();

  // Remove any potential leading or trailing hyphens left after consolidation
  return sanitized.replace(/^-|-$/g, '');
}

module.exports = { sanitizeString };
