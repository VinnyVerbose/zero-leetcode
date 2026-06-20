/*
Challenge #5 — Find the Index of the Largest Number

This introduces a very common interview idea:

Sometimes you need to track both a value and its position.

Problem

Given an array of integers, return the index of the largest number.

Example:

findMaxIndex([5, 12, 3, 8])

Output:

1

Because:

12 is the largest value
12 is at index 1
Example 2
findMaxIndex([9, 2, 4])

Output:

0
Requirements
Use a single array traversal.
Do not sort the array.
Return the index, not the value.
Explain:
Approach
Time Complexity
Space Complexity

This challenge is a small step up because you'll need to decide:

Should I track the largest value, the largest index, or both?

Give it a shot.

*/

function findMaxIndex(arr){
    if(arr.length === 0 ) { return null };
    
    let max = arr[0];
    let index = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            index = i;
        }
    }

    return index;
}

/*

Approach:  The function short circuits and returns null if an empty array is given
as an input since there are no values to see and compare.  The function then 
initializes a variable "max" which will hold the largest value in the array which is 
initially set to the first element since it is the first value seen.  Then the function declares 
a variable "index" which will hold the index of the largets value in the array and is 
initialized with 0 since that will be the first index seen.  The function then traverses
the array from left to right visiting each element and compares the value their with "max", if it is larger it 
replaces the value of max and updates the index to the current index of the array that was
just evaluated.  When the loop is finished the value of index is returned.

Time Complexity: If an empty array or an array with one element is given as input the time 
complexity would be O of 1.  Worst case scenario is O of n since each element will be visited.

Space Complexity: Although there are 3 variables declared (max, index, i) they are small and
will not scale regardless the size of the input.  The space complexity is O of 1.

*/

// ChatGPT feeback

/*

Correctness

✅ Correct

Example:

findMaxIndex([5, 12, 3, 8])

Walkthrough:

max = 5
index = 0

12 > 5
max = 12
index = 1

3 > 12 ? no

8 > 12 ? no

Return:

1

Correct.

What I Like
1. You handled the empty array
if(arr.length === 0 ) { return null };

Most candidates forget this.

An interviewer might ask:

"What happens if the input array is empty?"

You already have an answer.

2. You started the loop at index 1
for(let i = 1; i < arr.length; i++)

Exactly right.

Since:

let max = arr[0];

there's no need to compare index 0 against itself.

3. You tracked both pieces of information

You recognized that to return the index, you need:

let max
let index

This is an important interview concept:

Sometimes you track multiple values during traversal.

Tiny Interview Improvement

Your explanation says:

compares the value their with max

Just a typo ("their" → "there").

More importantly, I would tighten this sentence:

If it is larger it replaces the value of max and updates the index to the current index.

to:

If the current value is larger than the largest value seen so far, I update both the maximum value and its corresponding index.

That's how interviewers often phrase it.

Time Complexity

Your analysis:

Empty array or one element is O(1), worst case O(n)

✅ Correct

For interview purposes we report worst-case complexity:

Time Complexity: O(n)

Because every element may need to be examined.

Space Complexity

Your analysis:

max, index, i are fixed-size variables

✅ Perfect

This is actually a stronger explanation than your previous challenge.

Memory used:

let max
let index
let i

None grow with input size.

Space Complexity: O(1)
                            Interview      Score
Category	Score
Correctness	                    10      /   10
Edge Cases	                    10      /   10
Traversal Logic	                10      /   10
Complexity Analysis	            10      /   10
Explanation	                    10      /   10
Overall:                        10      /   10

At this point you've demonstrated all of the fundamental Array Traversal skills:

✅ Counting
✅ Running Totals
✅ Tracking Min/Max
✅ Early Returns
✅ Tracking Indexes
✅ Handling Edge Cases
✅ Explaining Time & Space Complexity

*/