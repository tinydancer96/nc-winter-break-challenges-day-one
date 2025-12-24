function rob(nums) {}

// Tests
// console.log(rob([1, 5, 2, 1, 5, 2, 3, 5])); // Expected: 15
rob([1, 5, 2, 1, 5, 2, 3, 5]); // Expected: 15

//   let counter = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 2; j < nums.length; j++) {
//       if (nums[i] + nums[j] > counter) {
//         counter = nums[i] + nums[j];
//         whilecounter = j;
//       }
//     }
//   }
//   console.log(counter);
