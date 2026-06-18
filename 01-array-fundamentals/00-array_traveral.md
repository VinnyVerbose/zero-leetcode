# Array Traversal

Array Traversal is the process of visiting each element in an array, usually once, from beginning to end.

```js
const nums = [4, 8, 2, 9];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
```

Traversal order:

```text
4 → 8 → 2 → 9
```

This is one of the most important patterns in LeetCode Easy because many problems require examining every element in an array.

Common tasks solved with Array Traversal:

- Finding a maximum value
- Finding a minimum value
- Calculating a sum
- Counting occurrences
- Searching for a value
- Checking conditions

The most common traversal pattern is:

```js
for (let i = 0; i < nums.length; i++) {

    // Process current element

}
```

The key question during traversal is:

> What information do I need to keep track of while visiting each element?

Examples:

```js
let sum = 0;
let count = 0;
let max = nums[0];
let min = nums[0];
```

## Example: Find the Largest Number

```js
function findMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}
```

## Complexity

```text
Time Complexity: O(n)
Space Complexity: O(1)
```

## Interview Explanation

> "I'm traversing the array once while keeping track of the largest value seen so far. Each element is visited exactly once, so the time complexity is O(n). I'm only using a single variable, so the space complexity is O(1)."

## Array Traversal Cheat Sheet

Template:

```js
for (let i = 0; i < nums.length; i++) {

}
```

Common Variables:

```js
let sum = 0;
let count = 0;
let max = nums[0];
let min = nums[0];
```

Typical Complexity:

```text
Time Complexity: O(n)
Space Complexity: O(1)
```