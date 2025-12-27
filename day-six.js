// Challenge
// Write a function `myReplace(str, before, after)` that performs a search and replace on a sentence, preserving the case of the first character of the original word.

// ## Rules
// - The function will take 2 arguments the sentence, the word to find and the word to replace
// - Replace the first word with the second in the sentence
// - The first character's case must match the original word
// - Ignore the original case of the second - match it to the first instead
// - You may not use String methods `.replace()` or `.replaceAll()`

// ## Examples

// ```javascript
// searchReplace("Let's go to the store", "store", "shop");
// // "Let us go to the shop"

// searchReplace("He is Sleeping on the sofa", "Sleeping", "sitting");
// // "He is Sitting on the sofa"

// ```

// ## Test Your Solution

// ```javascript
// function searchReplace() {

// }

// // Tests
// console.log(searchReplace("Let's go to the store", "store", "shop"), "→ Expected: 'Let's go to the Shop'");
// console.log(searchReplace("He is Sleeping on the sofa", "Sleeping", "sitting"), "→ Expected: 'He is Sitting on the sofa'");
// console.log(searchReplace("I think we should look up there", "up", "Down"), "→ Expected: 'I think we should look down there'");
// console.log(searchReplace("This has a spellngi error", "spellngi", "spelling"), "→ Expected: 'This has a spelling error'");
// console.log(searchReplace("His name is Tom", "Tom", "john"), "→ Expected: 'His name is John'");
// ```
