/**
 * Converts the case of a string.
 *
 * @param {string} input - The input string for case conversion.
 * @param {object} options - Options for case conversion, including the type of case conversion.
 * @returns {string} - The string after case conversion.
 */
function convertCase (input, options = {}) {
  const { caseStyle } = options

  switch (caseStyle) {
    case 'lowercase':
      return input.toLowerCase()
    case 'uppercase':
      return input.toUpperCase()
      // Potentially add more case styles here (e.g., 'camelCase', 'snake_case')
    default:
      return input // Return the input unchanged if no caseStyle is specified
  }
}

module.exports = { convertCase }
