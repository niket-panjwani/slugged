/**
 * Replaces spaces with a custom separator in a string.
 * 
 * @param {string} input - The input string.
 * @param {object} options - Options for separator customization, including the chosen separator.
 * @returns {string} - The string with custom separators.
 */
function customizeSeparator(input, { separator = '-' } = {}) {
  return input.replace(/\s+/g, separator);
}

module.exports = { customizeSeparator };