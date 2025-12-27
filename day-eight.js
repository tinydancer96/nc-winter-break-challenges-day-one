// Challenge
// Write a function `largestNumber(nums)` that takes an array of non-negative integers and arranges them to form the largest possible number.

// Return the result as a string.

// ## Rules
// - All input numbers are non-negative integers
// - Arrange the numbers to create the largest final value
// - Return the result as a string

// ## Examples

// ```javascript
// largestNumber([4, 50, 8, 145]);
// // "8504145"
// // Order: 8-50-4-145

// largestNumber([4, 40, 7]);
// // "7440"
// // Order: 7-4-40 (not 7-40-4)

// largestNumber([5, 2, 1, 9, 50, 56]);
// // "95655021"
// // Order: 9-56-5-50-2-1
// ```

// ## Test Your Solution

// ```javascript
// function largestNumber(nums) {
//   // Your code here
// }

// // Create tests for these cases (you can choose to make your own):
// // Clear ordering
// // [4, 5, 8] → "854"

// // Numbers with same starting digit
// // [3, 30, 34] → "34330"

// // Similar numbers with different optimal arrangement
// // [4, 46, 7] → "7464"

// // Multiple mixed nubmers
// // [5, 60, 299, 56] → "60565299"

// // Longer array
// // [5, 2, 1, 9, 50, 56] → "95655021"

// // Edge case: all zeros
// // [0, 0, 0] → "0"

// // Edge case: single number
// // [42] → "42"
// ```
