# day-one - Rotating a matrix
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


# day-two  - Substring finder
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
