function longestCommonPrefix(strs) {}

// Tests
console.log(
  longestCommonPrefix(["flower", "flow", "flight"]),
  "→ Expected: 'fl'"
);
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "→ Expected: ''");
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"]),
  "→ Expected: 'inters'"
);
console.log(longestCommonPrefix(["throne", "throne"]), "→ Expected: 'throne'");
console.log(longestCommonPrefix([""]), "→ Expected: ''");
console.log(longestCommonPrefix(["a"]), "→ Expected: 'a'");
