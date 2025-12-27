// Challenge
// Write a function `toKebabCase(str)` that converts any string to kebab-case format.

// Kebab case is all-lowercase-words-joined-by-dashes.

// ## Rules
// - Convert all letters to lowercase
// - Replace spaces with dashes
// - Handle special characters and multiple separators
// - Remove any extra dashes (no double dashes)

// ## Examples

// ```javascript
// toKebabCase("Hello World");
// // "hello-world"

// toKebabCase("JavaScript is AWESOME");
// // "javascript-is-awesome"

// toKebabCase("I love pizza!");
// // "i-love-pizza"

// toKebabCase("camelCaseString");
// // "camel-case-string"
// ```

// ## Test Your Solution

// ```javascript
// function toKebabCase(str) {
//   // Your code here
// }

// // Create tests for these cases:
// // Single words should be returned as is
// // "hello" → "hello"

// // Multiple words will be skewered
// // "boxing day buffet" → "boxing-day-buffet"

// // Should return in undercase
// // "Leftover Surprise" → "leftover-surprise"

// // Should remove punctuation
// // "Cheese and Crackers!" → "cheese-and-crackers"

// // camelCase input
// // "wallaceAndGromit" → "wallace-and-gromit"

// // PascalCase input
// // "TooManyPuddings" → "too-many-puddings"

// // String with multiple spaces
// // "too    many    spaces" → "too-many-spaces"

// // String with underscores
// // "snake_case_example" → "snake-case-example"

// // Mixed separators
// // "Mixed_separators and-Dashes" → "mixed-separators-and-dashes"

// // String with numbers
// // "version2Update" → "version2-update"
// ```

// ## Hints
// - Dont try and do the whole thing in one, you could try writing just enough code to pass each test in turn.
