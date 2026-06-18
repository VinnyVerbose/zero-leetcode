// Coding Challenge #1 — Count Positive Numbers

/*

Given an array of integers, return the number of positive numbers in the array.

Example:

countPositives([-2, 5, 0, 7, -1, 8])


Output:


3

Requirements:

- Use a single array traversal.
- Do not use built-in methods like filter().
- After writing your solution, explain:
  - Your approach
  - Time Complexity
  - Space Complexity

*/

function countPositives(arr){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }

    return count;
}

/*

Approach: I start with 0 since no positive numbers have been seen yet and if none are found the function will 
acurately return 0.

Time Complexity: Each element must be visited and the time will grow with the size of the input therefore
the time complexity is O of n.

Space Complexity:  There is only 1 simple variable being used so the space complexity is O of 1.

*/


// ChatGPT Feedback

/*

Correctness

✅ Correct

Your solution:

Visits every element exactly once
Checks whether the current number is positive
Increments the counter when appropriate
Returns the total count

It handles:

countPositives([])

Returns:

0

And:

countPositives([-5, -2, 0])

Returns:

0

Which is correct.

Interview Feedback

Your explanation is good. I'd make it slightly more specific.

Current Explanation

I start with 0 since no positive numbers have been seen yet and if none are found the function will accurately return 0.

That's true, but interviewers want to hear what happens during traversal.

A stronger explanation would be:

I initialize a counter to 0. I then traverse the array once. For each element, I check whether it's greater than 0. If it is, I increment the counter. After processing every element, I return the total count.

Time Complexity

Your answer:

Each element must be visited and the time will grow with the size of the input therefore the time complexity is O(n).

✅ Correct

A polished interview answer:

The loop visits each element exactly once, so the runtime grows linearly with the size of the input. Therefore the time complexity is O(n).

Space Complexity

Your answer:

There is only 1 simple variable being used so the space complexity is O(1).

✅ Correct

A polished interview answer:

I'm only using a single counter variable regardless of input size, so the space complexity is O(1).

Interview Score
--------------------
                        Category	Score

Correctness	                10  /   10
Pattern Recognition	        10  /   10
Time Complexity	            10  /   10
Space Complexity	        10  /   10
Interview Explanation	    8   /   10

Overall: 9.5/10

The code itself is production-quality for this problem. The only improvement is becoming more comfortable verbally explaining the traversal process.

*/