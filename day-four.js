# House Robber Kata

## Challenge
You're a robber planning to rob houses along a street. Each house has a certain amount of money, but you can't rob two adjacent houses (they have connected security systems that will alert the police).

Write a function `rob(nums)` that returns the maximum amount of money you can rob without triggering the alarm.

## Rules
- You cannot rob two adjacent houses
- You want to maximize the total money robbed
- `nums` is an array where each number represents money in that house

## Examples

```javascript
rob([1, 2, 3, 1]);
// 4
// Rob house 0 (money = 1) and house 2 (money = 3)
// Total: 1 + 3 = 4

rob([2, 7, 9, 3, 1]);
// 12
// Rob house 0 (money = 2), house 2 (money = 9), and house 4 (money = 1)
// Total: 2 + 9 + 1 = 12
```

## Test Your Solution

```javascript
function rob(nums) {
  // Your code here
}

// Tests
console.log(rob([1, 2, 3, 1]), "→ Expected: 4");
console.log(rob([2, 7, 9, 3, 1]), "→ Expected: 12");
console.log(rob([5, 1, 1, 5]), "→ Expected: 10");
console.log(rob([2, 1, 1, 2]), "→ Expected: 4");
console.log(rob([1]), "→ Expected: 1");
console.log(rob([2, 3]), "→ Expected: 3");
```