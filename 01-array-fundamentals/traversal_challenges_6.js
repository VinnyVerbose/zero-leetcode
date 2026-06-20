/*

Challenge #6 — Count Numbers Greater Than Target
Problem

Given an array of integers and a target value, return how many numbers are greater than the target.

Example:

countGreater([2, 8, 1, 10, 5], 5)

Output:

2

Because:

8 > 5
10 > 5

Two numbers satisfy the condition.

Example 2
countGreater([1, 2, 3], 10)

Output:

0
Requirements
Use a single array traversal.
Do not use filter().
Explain:
Approach
Time Complexity
Space Complexity

This one should feel very familiar. The goal is to see if you immediately recognize:

"This is just another counting traversal."

If you do, you're developing the pattern recognition that makes LeetCode Easy problems feel repetitive instead of random.


*/

function countGreater(arr, target){
   // if(arr.length === 0) { return null; }
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > target){
            count++;
        }
    }

    return count;
}

/*

Approach: The funciton short circuits and returns null if an empty array is given as
input since there are no values to compare.  It then declares a variable "count" and 
initializes it to 0.  We then visit each element of the array and compare the value 
found there to the target value.  If it is larger than the target value we increment
the count variable.  When the loop is finished we return the count.

Time Complexity: O of n

Space Complexity: O of 1

*/

// ChatGPT Feedback

/*

Correctness

For the stated problem:

countGreater([2, 8, 1, 10, 5], 5)

Returns:

2

✅ Correct

One Interview Discussion Point

You chose:

if(arr.length === 0) { return null; }

This isn't wrong, but I'd ask you:

"Should an empty array return null or 0?"

Think about the problem statement:

Return how many numbers are greater than the target.

If the array is empty:

[]

How many numbers are greater than the target?

0

So many interviewers would actually prefer:

function countGreater(arr, target){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > target){
            count++;
        }
    }

    return count;
}

Because:

countGreater([], 5)

Returns:

0

which is a valid count.

Key Lesson

Sometimes an empty array is an error condition:

findMin([])

No minimum exists → null makes sense.

But for counting problems:

countGreater([])

A count of 0 usually makes more sense than null.

Approach Review

Your explanation is correct:

Visit each element and compare it against the target. If it is greater than the target, increment the counter.

That's exactly the Array Traversal pattern.

Time Complexity

You wrote:

O(n)

✅ Correct

Every element may need to be checked once.

Space Complexity

You wrote:

O(1)

✅ Correct

Only a single counter variable is used.

Interview Score
Category	Score
Correctness	10/10
Pattern Recognition	10/10
Complexity Analysis	10/10
Edge Case Handling	8/10
Explanation	10/10
Overall: 9.5/10

The only thing I'd challenge is returning null for an empty array. For a counting problem, 0 is usually the stronger choice.

*/