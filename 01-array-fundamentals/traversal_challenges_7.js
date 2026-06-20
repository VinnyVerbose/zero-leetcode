/*

Challenge #7 — Check if Array is Sorted

This is the final skill-building challenge before the LeetCode-style assessment.

Problem

Given an array of integers, return true if the array is sorted in ascending order.

Otherwise return false.

Example 1
isSorted([1, 2, 3, 4, 5])

Output:

true
Example 2
isSorted([1, 5, 3, 7])

Output:

false

Because:

5 > 3

which breaks ascending order.

Example 3
isSorted([])

Output:

true

An empty array is considered sorted.

Requirements
Use a single array traversal.
Return as soon as you know the answer.
Explain:
Approach
Time Complexity
Space Complexity
Hint

While traversing:

arr[i]

compare it with:

arr[i + 1]

As soon as you find a pair that is out of order, you can immediately return false.

This challenge combines:

Array Traversal
Comparison logic
Early Return

which are all very common in LeetCode Easy problems.


*/