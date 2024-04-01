/**
 * Validates a slug against specified criteria, such as ensuring it only contains allowed characters
 * and does not start or end with a separator.
 *
 * @param {string} slug - The slug to validate.
 * @param {RegExp} [allowedCharactersRegex=/^[a-zA-Z0-9-]+$/] - A regular expression defining allowed characters in the slug.
 * @returns {boolean} - True if the slug is valid, false otherwise.
 */
function isValidSlug (slug, allowedCharactersRegex = /^[a-zA-Z0-9-]+$/) {
  return allowedCharactersRegex.test(slug) && !slug.startsWith('-') && !slug.endsWith('-')
}

module.exports = { isValidSlug }
