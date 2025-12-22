# Day-One - Rotating a matrix
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
Example 1:
```javascript
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```
Example 2:
```javascript
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

# Day-Two  - Substring finder
Write a function `substringTest(str1, str2)` that returns `true` if the two strings share a common substring of 2+ letters, otherwise `false`.

## Rules
- Only substrings of **2 or more letters** count
- Case insensitive: "A" equals "a"
- Letters must be in the same order

## Examples

```javascript
substringTest("Something", "Fun");    // false
substringTest("Something", "Home");   // true (both have "me")
substringTest("HELLO", "bell");       // true (both have "ell")
```

# Day-Three - Sorted Union Kata

## Challenge
Write a function `uniteUnique(...arrays)` that takes two or more arrays and returns a new array of unique values in the order they first appear.

## Rules
- Include all unique values from all arrays
- Keep them in the order they first appear
- No duplicates in the final array

## Examples

```javascript
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// [1, 3, 2, 5, 4]
// 1, 3, 2 from first array
// 5, 4 are new from second array (2, 1 already seen)
// Nothing new from third array

uniteUnique([1, 2, 3], [5, 2, 1]);
// [1, 2, 3, 5]
```

## Test Your Solution

```javascript
function uniteUnique(...arrays) {
  // Your code here
}

// Tests
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), "→ Expected: [1, 3, 2, 5, 4]");
console.log(uniteUnique([1, 2, 3], [5, 2, 1]), "→ Expected: [1, 2, 3, 5]");
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), "→ Expected: [1, 2, 3, 5, 4, 6, 7, 8]");
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]), "→ Expected: [1, 3, 2, 5, 4, 6]");
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), "→ Expected: [1, 3, 2, 5, 4]");
```
