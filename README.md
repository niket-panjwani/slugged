# Slug-Craft

A lightweight, easy-to-use npm package for generating URL-friendly slugs from strings. Perfect for blogs, e-commerce platforms, and any web application that requires readable URLs.

## Features

- **String Sanitization**: Removes or replaces characters not allowed in URLs.
- **Case Conversion**: Supports transforming strings to lowercase, uppercase, or maintaining original case.
- **Custom Separators**: Allows specification of custom character separators.
- **Slug Uniqueness**: Option to ensure slugs are unique by appending identifiers.
- **Slug Truncation**: Supports setting maximum lengths for slugs.
- **Slug Validation**: Validates slugs against a set of predefined rules.
- **Slug Normalization**: Ensures consistency in slug format.
- **Customizable Rules**: Supports defining custom rules for slug generation.

## Installation

Install via npm:

```bash
npm install slug-craft
```

or yarn
```bash
yarn add slug-craft
```

## Usage

To use `slug-craft` in your project, first import or require it at the top of your file:

```javascript
const { generateSlug } = require('slug-craft');
const title = "How to Create a Slug Craft in JavaScript";
const options = {
  caseStyle: 'lowercase', // Converts the slug to lowercase. This is the default behavior.
  separator: '-',         // Uses a hyphen as the separator between words in the slug.
  maxLength: 50,          // Limits the slug to 50 characters.
};

const slug = generateSlug(title, options);
console.log(slug); // Output: "how-to-create-a-slug-craft-in-javascript"
```

## Contributing

Contributions are welcome! If you have an idea for improving slug-craft, please follow these steps:

1. Fork the repo on GitHub.
2. Clone your forked repo and run `npm install`.
3. Create a new branch for your feature or fix.
4. Make your changes, ensuring the project's coding standards are followed.
5. Write or update tests as necessary.
6. Submit a pull request detailing your changes.

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for more detailed information.

## License

slug-craft is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
