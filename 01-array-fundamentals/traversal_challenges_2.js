/*

Challenge #2 — Sum of Even Numbers

Given an array of integers, return the sum of all even numbers.

Example:

sumEvenNumbers([1, 2, 3, 4, 5, 6])

Output:

12

Because:

2 + 4 + 6 = 12

Requirements:

Use a single array traversal
Do not use filter() or reduce()
Explain:
Approach
Time Complexity
Space Complexity

This is another classic Array Traversal problem and introduces the idea of maintaining a running total during traversal.

*/

function sumEvenNumbers(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i];
        }
    }

    return sum;
}

/*

Approach: I initialize the sum variable to 0.  I then treverse the entire array once. For each element
I check whether the value of that element is even.  If it is I add that value to the sum variable. After
processing every element I return the sum variable which holds the sum of all even numbers of the array.

Time Complexity: The loop visits each element of the array once so the runtime grows linearly with the size
of the input.  Therefore the time complexity is O of n.

Space Complexity: Only 1 variable is being used and will not grow with the size of the input so the spcae complexity 
is O of 1.

*/


// ChatGPT Feedback

/*

Correctness

✅ Correct

Your solution:

Traverses the array once
Identifies even numbers using:
arr[i] % 2 === 0
Adds each even number to a running total
Returns the final sum

Examples:

sumEvenNumbers([1, 2, 3, 4, 5, 6])

Returns:

12

And:

sumEvenNumbers([1, 3, 5])

Returns:

0

Which is correct.

Approach Review

Your explanation:

I initialize the sum variable to 0. I then traverse the entire array once. For each element I check whether the value of that element is even. If it is I add that value to the sum variable. After processing every element I return the sum variable which holds the sum of all even numbers of the array.

✅ This is exactly what an interviewer wants to hear.

Notice how you're now describing:

Initialization
Traversal
Processing logic
Return value

That's the right structure.

Time Complexity

Your answer:

The loop visits each element of the array once so the runtime grows linearly with the size of the input. Therefore the time complexity is O(n).

✅ Correct

Why:

1 pass through n elements

Result:

O(n)
Space Complexity

Your answer:

Only 1 variable is being used and will not grow with the size of the input so the space complexity is O(1).

✅ Correct

You only store:

let sum = 0;

Regardless of whether the array contains:

10 elements
10,000 elements
1,000,000 elements

The memory usage stays the same.

Result:

O(1)

Interview Score
                                Category	Score
Correctness	10/10
Array Traversal Recognition	        10  /   10
Approach Explanation	            10  /   10
Time Complexity	                    10  /   10
Space Complexity	                10  /   10

Overall:                            10  /   10

At this point you've demonstrated that you understand the core Array Traversal pattern:

Counting values
Maintaining a running total
Explaining O(n) time
Explaining O(1) space

These are foundational skills that appear constantly in LeetCode Easy.

*/