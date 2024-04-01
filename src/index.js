const { sanitizeString } = require('./sanitization');
const { convertCase } = require('./caseConversion');
const { customizeSeparator } = require('./separatorCustomization');
const { normalizeSlug } = require('./normalization');
const { truncateSlug } = require('./truncation');
const { ensureUniqueSlug } = require('./uniqueness');
const { isValidSlug } = require('./validation');

/**
 * Generates a URL-friendly slug from a given string.
 * 
 * @param {string} input - The input string to generate a slug from.
 * @param {object} options - Configuration options for generating the slug. Options include:
 * - separator: The character to use as a separator in the slug.
 * - caseStyle: The case style to apply to the slug ('lowercase', 'uppercase').
 * - maxLength: The maximum length of the slug.
 * - preserveWords: Whether to preserve whole words when truncating.
 * - ensureUnique: If provided, should be a function that checks and returns a unique slug.
 * - existingSlugs: An array of existing slugs to check against for uniqueness.
 * @returns {string} - The generated slug.
 */
function generateSlug(input, options = {}) {
  let slug = input;

  // Sanitize the string
  slug = sanitizeString(slug, options);

  // Convert case
  slug = convertCase(slug, options);

  // Customize separator
  slug = customizeSeparator(slug, options);

  // Normalize the slug
  slug = normalizeSlug(slug, options.separator);

  // Truncate the slug if maxLength is specified
  if (options.maxLength) {
    slug = truncateSlug(slug, options.maxLength, options.preserveWords, options.separator);
  }

  // Ensure slug uniqueness if required
  if (options.ensureUnique && typeof options.ensureUnique === 'function') {
    // The ensureUnique option should be a function that accepts the slug and options, and returns a unique slug.
    // This function needs to be provided by the caller and should handle the logic for checking against existing slugs.
    slug = options.ensureUnique(slug, options.existingSlugs || [], options.separator);
  } else if (options.existingSlugs) {
    // If a custom ensureUnique function is not provided but existingSlugs are, use the default uniqueness function
    slug = ensureUniqueSlug(slug, options.existingSlugs, options.separator);
  }

  // Validate the final slug
  if (!isValidSlug(slug)) {
    throw new Error('The generated slug is invalid.');
  }

  return slug;
}

module.exports = { generateSlug };
