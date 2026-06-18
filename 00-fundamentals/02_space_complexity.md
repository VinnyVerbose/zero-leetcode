# Space Complexity (Big O) for LeetCode Easy Interviews

## What is Space Complexity?

Space Complexity measures how much **extra memory** an algorithm uses relative to the size of the input.

Think of it as answering:

> How much additional memory does my algorithm need as the input grows?

Just like Time Complexity, we use **Big O notation** to describe growth.

Important:

Space Complexity typically refers to **auxiliary space**, which means memory used **in addition to the input itself**.

---

## Why Space Complexity Matters

Two solutions can have the same runtime but use very different amounts of memory.

Example:

### Solution A

```js
function sum(nums) {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  return total;
}
```

Extra memory used:

- `total`

Space Complexity:

```text
O(1)
```

---

### Solution B

```js
function doubleValues(nums) {
  const doubled = [];

  for (const num of nums) {
    doubled.push(num * 2);
  }

  return doubled;
}
```

Extra memory used:

- New array containing every element

Space Complexity:

```text
O(n)
```

---

## Common Space Complexities

| Complexity | Name | Example |
|------------|---------|---------|
| O(1) | Constant | Few variables |
| O(log n) | Logarithmic | Some recursive algorithms |
| O(n) | Linear | Hash maps, arrays, sets |
| O(n²) | Quadratic | 2D matrices created from input |

---

## O(1) — Constant Space

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

Extra memory:

- `max`
- `i`

Regardless of whether the input contains:

- 10 elements
- 1,000 elements
- 1 million elements

We only store a few variables.

Space Complexity:

```text
O(1)
```

---

## O(n) — Linear Space

```js
function copyArray(nums) {
  const copy = [];

  for (const num of nums) {
    copy.push(num);
  }

  return copy;
}
```

If:

- n = 10 → store 10 elements
- n = 100 → store 100 elements
- n = 1,000 → store 1,000 elements

Memory grows proportionally with input size.

Space Complexity:

```text
O(n)
```

---

## Hash Maps are Usually O(n)

```js
function containsDuplicates(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}
```

Worst case:

Every element is unique.

The set stores all n elements.

Space Complexity:

```text
O(n)
```

---

## O(n²) — Quadratic Space

```js
const matrix = [];

for (let i = 0; i < n; i++) {
  matrix.push(new Array(n));
}
```

The matrix contains:

```text
n × n elements
```

Space Complexity:

```text
O(n²)
```

---

## How to Calculate Space Complexity

### Step 1: Count Additional Data Structures

Ask:

> Am I creating new arrays, objects, maps, sets, matrices, or recursion stacks?

Example:

```js
const result = [];
```

This grows with input size.

Space Complexity:

```text
O(n)
```

---

### Step 2: Ignore Small Variables

```js
let count = 0;
let max = 0;
let min = 0;
```

Three variables remain three variables no matter how large the input becomes.

Space Complexity:

```text
O(1)
```

---

### Step 3: Focus on Growth

```js
const result = [];
```

If result stores all input elements:

```text
O(n)
```

If result stores pairs:

```text
O(n²)
```

Always focus on how memory grows as n grows.

---

## Example LeetCode Walkthrough

Problem:

> Determine if an array contains duplicates.

```js
function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}
```

### Time Complexity

We visit every element once.

```text
O(n)
```

### Space Complexity

The set may contain every element.

```text
O(n)
```

---

## What Interviewers Want to Hear

After discussing runtime, discuss memory usage.

Example:

> "I'm using a Set to track values I've already seen. In the worst case, the Set stores every element in the array, so the space complexity is O(n)."

---

## A Simple Whiteboard Framework

After writing your solution, explain:

### 1. Approach

> "I'll use a Set to track previously seen values."

### 2. Time Complexity

> "Each lookup and insertion is O(1) on average, and I process every element once, giving O(n) time."

### 3. Space Complexity

> "The Set may store all n elements, so the space complexity is O(n)."


---

## Common Interview Tradeoffs

Interviewers often care about tradeoffs between time and space.

### Example 1: Nested Loops

```js
for (...) {
  for (...) {
  }
}
```

Time:

```text
O(n²)
```

Space:

```text
O(1)
```

---

### Example 2: Hash Set

```js
const seen = new Set();
```

Time:

```text
O(n)
```

Space:

```text
O(n)
```

A common interview explanation:

> "I'm using additional memory to avoid nested loops, reducing runtime from O(n²) to O(n)."

---

## Recursion and Space Complexity

Every recursive call uses memory on the call stack.

Example:

```js
function countDown(n) {
  if (n === 0) return;

  countDown(n - 1);
}
```

If n = 1000:

There are 1000 active function calls.

Space Complexity:

```text
O(n)
```

This becomes important later when you study recursion, trees, and graphs.

---

## Key Space Complexities to Memorize

| Pattern | Space Complexity |
|----------|-----------------|
| Few variables | O(1) |
| New array of size n | O(n) |
| Hash Map | O(n) |
| Set | O(n) |
| Matrix n × n | O(n²) |
| Recursive depth n | O(n) |
| Recursive depth log n | O(log n) |

---

## Time vs Space Summary

| Solution Type | Time | Space |
|--------------|------|-------|
| Single traversal | O(n) | O(1) |
| Hash Map solution | O(n) | O(n) |
| Nested loops | O(n²) | O(1) |
| Matrix creation | O(n²) | O(n²) |
