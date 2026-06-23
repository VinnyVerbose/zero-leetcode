# Frequency Counter Pattern

## Definition

A Frequency Counter tracks how many times each value appears.

Mental Model:

value → count

Example:

banana

Result:

{
b: 1,
a: 3,
n: 2
}

## Why Use It

Turns many O(n²) solutions into O(n).

Useful when:

* Counting values
* Comparing collections
* Detecting duplicates
* Finding most common values

## Common Problems

* Valid Anagram
* Majority Element
* Ransom Note
* Find the Difference
* Unique Number of Occurrences

## Complexity

Time Complexity:

O(n)

Space Complexity:

O(n)

## Recognition Signals

Look for words like:

* Frequency
* Count
* Occurrence
* Duplicate
* Anagram
* Most Common

## Common Mistakes

* Using nested loops unnecessarily
* Forgetting to initialize counts
* Ignoring edge cases
* Mixing up keys and values

## Interview Template

Approach:

Build a frequency counter that stores each value and the number of times it appears. Use the counts to make the required comparison or decision.

Time Complexity:

O(n) because each element is processed once.

Space Complexity:

O(n) because the frequency counter may store every unique value.
