/*

Challenge #8 — LeetCode Style Assessment

Given an array of integers, return the second largest number.

Example:

secondLargest([5, 2, 9, 1, 7])

Output:

9 -> largest
7 -> second largest

Return: 7
Example 2
secondLargest([10, 3])

Output:

3
Requirements
Use a single traversal.
Do not sort the array.
Return null if the array contains fewer than 2 elements.
Explain:
Approach
Time Complexity
Space Complexity
Hint

You'll likely need to track two values:

largest
secondLargest

This feels much more like a real LeetCode Easy problem because you'll need to update multiple variables correctly while traversing.

After this challenge, I'd consider the Array Traversal topic complete and we'd move to the next pattern.


*/

function secondLargest(arr){
    if(arr.length < 2) { return null; }

    let largest = arr[0] > arr[1] ? arr[0] : arr[1];
    let secondLargest = arr[0] === largest ? arr[1] : arr[0];

    for(let i = 2; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

/*

Approach: Short circuit and return if array is less than 2 elements.  We then assign largest and secondLargest variables using the 
first 2 elements since they are the first to be seen.  We then visit each element of the array starting at index 2, since indices 0 and 1
have been already evaluated, and check if the value there is larger than largest.  If so, we replace largest with this value.  If not, we
check if that value is larger than secondLargest.  If so, we replace secondLargest with that value.  After each element is visited we 
return secondLargest variable.

Time Complexity: O of n

Space Complexity: O of 1

*/

// ChatGPT Feedback

/*

Correctness

Let's walk through:

secondLargest([5, 2, 9, 1, 7])

Initial state:

largest = 5
secondLargest = 2

Traverse:

9 > 5
secondLargest = 5
largest = 9

1 > 5 ? no

7 > 5
secondLargest = 7

Result:

largest = 9
secondLargest = 7

Return:

7

✅ Correct

What I Like
1. Smart Initialization

You used the first two values to initialize:

let largest
let secondLargest

This avoids awkward placeholder values like:

-Infinity

Very clean.

2. Started at Index 2
for(let i = 2; i < arr.length; i++)

Good optimization.

You've already processed indices:

0
1

so there's no reason to revisit them.

3. Correct Update Logic

This is the important part:

if(arr[i] > largest){
    secondLargest = largest;
    largest = arr[i];
}

When a new largest value is found:

old largest
↓
becomes secondLargest

This is exactly the right reasoning.

Small Interview Edge Case

Suppose:

secondLargest([5, 5, 5])

Your solution returns:

5

Whether that's correct depends on the problem definition.

Some interviewers mean:

second largest value including duplicates

Then:

5

is correct.

Others mean:

second distinct largest value

Then:

null

would be expected.

Always ask the interviewer:

"Should duplicates count?"

That's a very strong interview habit.

Approach Review

Your explanation is solid.

One tiny correction:

You wrote:

After each element is visited we return secondLargest

Technically:

After all elements have been visited, we return secondLargest.

A small wording issue, but worth noting.

Time Complexity

You wrote:

O(n)

✅ Correct

Why:

One traversal

through the remaining elements.

Result:

O(n)
Space Complexity

You wrote:

O(1)

✅ Correct

Stored values:

largest
secondLargest
i

All fixed-size variables.

Memory does not scale with input.

Interview Score
Category	Score
Correctness	10/10
Traversal Logic	10/10
Variable Tracking	10/10
Complexity Analysis	10/10
Explanation	9.5/10
Edge Cases	9.5/10
Overall: 9.8/10

This is absolutely good enough for a beginner-level technical interview.

Array Traversal Assessment Result

You successfully demonstrated all major traversal concepts:

✅ Counting

count++

✅ Running Totals

sum += value

✅ Tracking Maximum

max

✅ Tracking Minimum

min

✅ Tracking Indexes

maxIndex

✅ Early Return

return value

✅ Comparing Adjacent Values

arr[i]
arr[i + 1]

✅ Tracking Multiple Variables

largest
secondLargest

✅ Explaining Time Complexity

O(n)

✅ Explaining Space Complexity

O(1)
Next Topic

You've completed Array Traversal.

The next pattern I recommend is:

Hash Maps (Objects and Maps in JavaScript)

This is the single most important pattern for LeetCode Easy.

Many problems that are:

O(n²)

with nested loops become:

O(n)

with a Hash Map.

Examples:

Two Sum
Contains Duplicate
First Unique Character
Valid Anagram
Majority Element

Hash Maps are probably responsible for more Easy problem solutions than any other pattern.

So the next phase would be:

What is a Hash Map?
Why interviewers love them
JavaScript Objects vs Maps
Complexity of Hash Maps
Beginner challenges
LeetCode-style assessment

You're ready for that topic.

*/