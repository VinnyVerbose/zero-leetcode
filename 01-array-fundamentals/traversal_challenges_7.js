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

function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

isSorted([1, 2, 3, 4, 5]);


/*

Approach: Visit each element of the array and compare the current value to the next index's value.  If the current value is greater we 
short circuit the loop by returning false as the array's elements are not sorted.  When we have finished traversing the entire
array we return true since to reach the end of the array without short circuiting the array must be sorted.  An empty array will return true
as well as an array with a single element.

Time Complexity: O of n.  Time will scale linearly with larger input

Space Complexity: O of 1.  Only using i variable to which will not be scaled with larger input.

*/

// ChatGPT Feedback

/*

Correct

Interview Discussion

There is one small optimization I'd make:

for(let i = 0; i < arr.length - 1; i++)

instead of:

for(let i = 0; i < arr.length; i++)
Why?

On the last iteration:

arr[i + 1]

becomes:

arr[arr.length]

which is:

undefined

JavaScript handles it safely, so your solution still works.

However, an interviewer may ask:

"Do we really need to check the last element against undefined?"

The answer is no.

So a slightly cleaner version is:

function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            return false;
        }
    }

    return true;
}

This is mostly a polish improvement.

Approach Review

Your explanation is excellent.

You correctly identified:

Compare current value to next value.
Stop immediately if order is broken.
Return true if traversal completes.

This demonstrates understanding of:

Traversal
Comparison logic
Early return
Time Complexity

Your answer:

O(n)

✅ Correct

Technically:

Best Case
[5, 1, 2, 3]

Returns immediately.

O(1)
Worst Case
[1, 2, 3, 4, 5]

Visits entire array.

O(n)

For interviews we report:

Time Complexity: O(n)
Space Complexity

Your answer:

O(1)

✅ Correct

Only:

let i

is being stored.

Memory remains constant regardless of input size.

Interview Score
Category	Score
Correctness	10/10
Early Return	10/10
Complexity Analysis	10/10
Explanation	10/10
Code Quality	9.5/10
Overall: 9.9/10

The only improvement is using:

i < arr.length - 1

to avoid the final unnecessary comparison.

Final Array Traversal Assessment

You've completed all the building blocks.

Now let's do a problem that combines several traversal ideas into one challenge.

*/