# Time Complexity (Big O) for LeetCode Easy Interviews

## What is Time Complexity?

Time Complexity measures how many operations an algorithm performs relative to the size of the input.

Think of it as answering:

> How does the runtime grow as the input gets larger?

We use **Big O notation** to describe that growth.

Example:

```js
function printNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

If the array has:

- 10 elements → ~10 operations
- 100 elements → ~100 operations
- 1,000 elements → ~1,000 operations

Runtime grows proportionally with input size.

**Time Complexity: O(n)**

Where:

- `n` = number of elements in the input

---

## Common Time Complexities

| Complexity | Name | Example |
|------------|---------|---------|
| O(1) | Constant | Access array index |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Traverse array |
| O(n log n) | Linearithmic | Efficient sorting |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Many recursive brute-force solutions |

---

## O(1) — Constant Time

```js
const first = arr[0];
```

No matter if the array contains:

- 10 elements
- 10,000 elements
- 10 million elements

We only perform one operation.

**Time Complexity: O(1)**

---

## O(n) — Linear Time

```js
function containsFive(arr) {
  for (let num of arr) {
    if (num === 5) {
      return true;
    }
  }
  return false;
}
```

Worst case: we inspect every element.

If input doubles, work doubles.

**Time Complexity: O(n)**

---

## O(n²) — Quadratic Time

```js
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i], arr[j]);
  }
}
```

If:

- n = 10 → 100 operations
- n = 100 → 10,000 operations
- n = 1,000 → 1,000,000 operations

**Time Complexity: O(n²)**

This is often the first complexity interviewers question because it scales poorly.

---

## How to Calculate Time Complexity

### Step 1: Count Loops

One loop:

```js
for (...) {}
```

Usually:

```text
O(n)
```

Two nested loops:

```js
for (...) {
    for (...) {

    }
}
```

Usually:

```text
O(n²)
```

---

### Step 2: Ignore Constants

```js
for (...) {}
for (...) {}
```

Technically:

```text
O(n + n)
```

Simplifies to:

```text
O(n)
```

Big O cares about growth, not exact counts.

---

### Step 3: Keep the Fastest Growing Term

```text
O(n² + n)
```

Becomes:

```text
O(n²)
```

Because as `n` gets large, `n²` dominates.

---

## Example LeetCode Walkthrough

Problem:

> Find the largest number in an array.

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

### Analysis

We visit every element once.

```text
n elements
n comparisons
```

Time Complexity:

```text
O(n)
```

Space Complexity:

```text
O(1)
```

Because we're only using one extra variable.

---

## What Interviewers Want to Hear

Many beginners think the interviewer only wants the correct code.

Not true.

They want to understand your thought process.

A strong explanation sounds like:

> "I'm going to traverse the array once while tracking the maximum value seen so far. Since I only visit each element one time, the runtime is O(n). I'm not using any additional data structures besides a single variable, so the space complexity is O(1)."

---

## A Simple Whiteboard Framework

After writing your solution, explain it in this order:

### 1. Approach

> "I'll iterate through the array once and keep track of the largest value."

### 2. Time Complexity

> "The loop runs once for each element, so the time complexity is O(n)."

### 3. Space Complexity

> "I'm only storing a few variables, so the space complexity is O(1)."

---

## What Interviewers Really Care About

### Identify the Bottleneck

For example:

```js
for (...) {
    for (...) {
    }
}
```

You should immediately recognize:

```text
O(n²)
```

---

### Compare Solutions

Brute force:

```text
O(n²)
```

Optimized:

```text
O(n)
```

They want to hear:

> "The brute-force solution compares every pair of elements, giving O(n²) time. We can improve this to O(n) by using a hash map."

---

### Understand Tradeoffs

Sometimes faster runtime requires more memory.

Example:

- Nested loops → O(n²) time, O(1) space
- Hash map → O(n) time, O(n) space

Interviewers love hearing:

> "I'm trading additional space for a faster runtime."

---

## Key Complexities to Memorize

| Pattern | Time Complexity |
|----------|----------------|
| Access array index | O(1) |
| Traverse array once | O(n) |
| Two separate loops | O(n) |
| Nested loops | O(n²) |
| Hash map lookup | O(1) average |
| Sort array | O(n log n) |
| Binary Search | O(log n) |