/*

Challenge #3 — Find the Smallest Number

Given an array of integers, return the smallest number in the array.

Example:

findMin([8, 3, 12, 1, 5])

Output:

1

Requirements:

Use a single array traversal
Do not sort the array
Explain:
Approach
Time Complexity
Space Complexity

Hint:

Just like finding a maximum value, you'll keep track of the smallest value seen so far while traversing the array.

When you submit your solution, I'll review it like an interviewer and then we'll move into a slightly more realistic LeetCode Easy traversal problem.

*/

function findMin(arr){
    let smallest = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }

    return smallest;
}


/*

Approach:  I initialized the variable "smallest" to the first element in the array since the first element
will be the only available number to test against before the loop.  I then loop through the array starting
at index 1 as to not compare index 0 with itself.  I visit each element of the array from index 1 once and 
compare the value there against the "smallest" variable.  If it is lower than "smallest", the value of "smallest" 
is replaced with the value at arr[i].  After processing each element I return the "smallest" variable value.

Time Complexity: The loop visits each element of the array once and the runtime grows linearly with the size 
of the input so it has a time complexity of O of n.

Space Complexity: Since there is only one variable that does not grow memory in proportionto the input size
the space complexity is O of 1.

*/

// ChatGPT Feedback

/*

Correctness

✅ Correct

You correctly:

Initialize smallest to the first element.
Traverse the remainder of the array.
Update smallest whenever a smaller value is found.
Return the final smallest value.

Example:

findMin([8, 3, 12, 1, 5])

Walkthrough:

smallest = 8

3 < 8  -> smallest = 3

12 < 3 -> no

1 < 3  -> smallest = 1

5 < 1  -> no

Return:

1
Approach Review

Your explanation is very good.

One thing I especially like is that you explained why the loop starts at index 1:

I then loop through the array starting at index 1 as to not compare index 0 with itself.

That's exactly the kind of detail interviewers appreciate because it shows intentional thinking.

A polished interview version might be:

I initialize smallest to the first element because it's the only value I've seen so far. Then I traverse the array starting at index 1. For each element, I compare it to the current smallest value. If it's smaller, I update smallest. After processing all elements, I return the smallest value found.

Time Complexity

Your answer:

The loop visits each element of the array once and the runtime grows linearly with the size of the input.

✅ Correct

Analysis:

n elements
1 traversal

Result:

O(n)
Space Complexity

Your answer:

Since there is only one variable that does not grow memory in proportion to the input size the space complexity is O(1).

✅ Correct

Memory used:

let smallest = arr[0];

Regardless of input size, only one tracking variable exists.

Result:

O(1)


Interview Score

                                Category	Score
Correctness	10/10
Traversal Pattern Recognition	    10  /   10
Variable Tracking	                10  /   10
Time Complexity	                    10  /   10
Space Complexity	                10  /   10
Explanation Quality	                10  /   10
Overall:                            10 /    10

At this point you've successfully implemented and explained three fundamental traversal variations:

Pattern	Variable Being Tracked
Count positives	count
Sum evens	sum
Find minimum	smallest

This is exactly the progression I like for beginners because you're learning that array traversal is mostly:

Traverse once + maintain the correct variable.

*/