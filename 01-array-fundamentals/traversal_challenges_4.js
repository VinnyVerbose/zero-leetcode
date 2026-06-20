/*

Challenge #4 — First Negative Number

This one is slightly closer to a real LeetCode Easy problem.

Problem

Given an array of integers, return the first negative number in the array.

If no negative number exists, return null.

Example 1:

firstNegative([5, 8, -3, 10, -7])

Output:

-3

Example 2:

firstNegative([1, 2, 3])

Output:

null
Requirements
Use a single array traversal.
Return immediately when the answer is found.
Explain:
Approach
Time Complexity
Space Complexity

This challenge introduces an important interview concept:

Sometimes you don't need to traverse the entire array. You can stop early when you've found what you're looking for.

Give it a shot and I'll review it like an interviewer.

*/

function firstNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return arr[i];
        }
    }

    return null;
}

firstNegative([5, 8, -3, 10, -7])

/*

Approach:  The function visits every element of the array and checks to see if the value of
that element is less than zero.  If it is it returns that value exiting the loop.  If none are
found or an empty array is given as input, null is returned. If all numbers are positive, null
is returned as no negative numbers were seen.  

Time Complexity:  The best case scenario is that the first element will be negative in which case
the time complexity will be O of 1.  The worst case scenario is that every element will be visited
which will scale linearly with a larger input. So the time complexity for this problem is the worst 
case scenario or O of n.

Space Complexity:  There are no variables being used and no way for memory to scale therefore the 
space complexity is O of 1.

*/

// ChatGPT response

/*

Correctness

✅ Correct

Examples:

firstNegative([5, 8, -3, 10, -7])

Returns:

-3
firstNegative([1, 2, 3])

Returns:

null
firstNegative([])

Returns:

null

All correct.

Approach Review

Your explanation is good.

One small correction:

You wrote:

The function visits every element of the array and checks...

That's only true in the worst case.

Because of the early return, a more precise explanation would be:

The function traverses the array from left to right. For each element, it checks whether the value is negative. As soon as a negative value is found, the function immediately returns that value and stops processing the array. If the traversal completes without finding a negative number, the function returns null.

That's a very interview-friendly explanation.

Time Complexity

This is the most interesting part of your answer.

You wrote:

The best case scenario is that the first element will be negative in which case the time complexity will be O(1). The worst case scenario is that every element will be visited... O(n).

✅ Correct

This is exactly right.

Best Case
[-5, 3, 7, 9]

The first element is negative.

1 comparison

Result:

O(1)
Worst Case
[1, 2, 3, 4, 5]

or

[1, 2, 3, 4, -5]

Every element must be checked.

Result:

O(n)
Interview Answer

When asked for complexity, we typically give the worst case:

Time Complexity: O(n)

But mentioning:

"Best case is O(1) due to the early return."

is a great bonus point.

Space Complexity

Your answer:

There are no variables being used...

Mostly correct, but I'd phrase it differently.

The loop variable:

let i

does exist.

However, it is a fixed-size variable.

So the proper explanation is:

The algorithm only uses a constant amount of extra memory regardless of input size, so the space complexity is O(1).

Result:

O(1)


Interview Score
                            Category	Score
Correctness	                    10  /   10
Early Return Recognition	    10  /   10
Best/Worst Case Analysis	    10  /   10
Time Complexity	                10  /   10
Space Complexity	            9   /   10
Explanation	                    10  /   10
Overall:                       9.8  /   10

The only tiny nitpick is saying "no variables" instead of "constant amount of memory."

*/