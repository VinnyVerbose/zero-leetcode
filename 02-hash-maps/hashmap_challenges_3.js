
/*

Guided Challenge 3 (LeetCode Easy Style)

This is your first real interview-style problem.

Contains Duplicate

Write a function:

containsDuplicate(nums)

Return:

true

if any value appears more than once.

Otherwise return:

false

Examples:

containsDuplicate([1,2,3,1])      // true
containsDuplicate([1,2,3,4])      // false
containsDuplicate([1,1,1,3,3,4])  // true

Submit:

Code
Approach

Explain it as if you're talking to an interviewer.

Time Complexity
Space Complexity

No hints unless you ask.

This challenge is important because I'm looking to see whether you naturally reach for a frequency counter after the previous lessons.

*/

function containsDuplicate(nums){
    let seen = {};

    for(let i = 0; i < nums.length; i++){
        seen[nums[i]] = (seen[nums[i]] || 0) + 1;
        if(seen[nums[i]] > 1){
            return true;
        }
    }
    return false;
}

// Updated Version after feedback
// Was told set but heard map cause I'm a genius... still works!

function containsDuplicate(nums){
    let seen = new Map();

    for(let i = 0; i < nums.length; i++){
        if(seen.get(nums[i])) return true;
        seen.set(nums[i], true);
    }
    return false;
}

// Take 3 with a set

function containsDuplicate(nums){
    let seen = new Set();

    for(let i = 0; i < nums.length; i++){
        if(seen.has(nums[i])) return true;
        seen.add(nums[i]);
    }
    return false;
}

// Take 4 Updated Take 3

function containsDuplicate(nums){
    let seen = new Set();

    for(const num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}


/*

Approach: Create empty object to store count of numbers seen.  Loop through array, at each element we check if there is
a key in the seen object with a value matching that element.  If not, we create that key and set it's value to 1.  If it does 
exist we increment the value of that key.  We then check the value of that current key to see if it is larger than 1.  If so,
a duplicate has been seen and we return true.  When the loop is exhausted it will return false.  Since it would have returned 
true before reaching this line of code there must not have been any duplicates.

Time Complexity: O of n

Space Complexity: O of n

*/

// Chat GPT Feedback

/*

Technical Interview Review

Vinny, this is a strong solution.

More importantly, you recognized the pattern immediately:

Count occurrences → Frequency Counter

That's exactly what I want to see at this stage.

Correctness Review
Is the solution correct?

✅ Yes.

Your solution correctly returns:

containsDuplicate([1,2,3,1]) // true
containsDuplicate([1,2,3,4]) // false
containsDuplicate([1,1,1,3,3,4]) // true
Edge Cases
Empty Array
containsDuplicate([])

Loop never runs.

Returns:

false

✅ Correct

Single Element
containsDuplicate([5])

No duplicates.

Returns:

false

✅ Correct

Duplicate Immediately
containsDuplicate([1,1])

First iteration:

seen[1] = 1

Second iteration:

seen[1] = 2

Returns:

true

✅ Correct

Approach Review

Your explanation is clear and easy to follow.

One small improvement:

You don't actually need to think about this as a counting problem.

The real question is:

Have I seen this value before?

That's a slightly different mental model.

Interview-ready phrasing:

I iterate through the array while storing values I've already encountered in a hash map. If I encounter a value that already exists in the map, I immediately return true because a duplicate has been found. If I finish the loop without finding any duplicates, I return false.

Notice how that explanation focuses on the goal rather than the mechanics.

Both are valid, but interviewers usually like the goal-oriented explanation.

Complexity Review
Time Complexity

You wrote:

O(n)

✅ Correct.

Worst case:

[1,2,3,4,5]

Every element is visited once.

O(n)
Space Complexity

You wrote:

O(n)

✅ Correct.

Worst case:

[1,2,3,4,5]

All elements are unique.

Your object grows with input size.

O(n)
Interview Feedback
Category	Score
Correctness	10/10
Pattern Recognition	10/10
Complexity Analysis	10/10
Explanation Quality	9/10
Code Quality	9/10
Overall Score

9.6 / 10

Excellent.

One Interview Insight

Your solution works perfectly, but if I were interviewing you I might ask:

"Do we really need counts?"

Consider:

seen[5] = true

instead of:

seen[5] = 1

The problem only asks:

Seen before?

not

How many times seen?

This observation leads directly to our next pattern.

Pattern Transition

So far you've learned:

Frequency Counter

Mental model:

value → count

Examples:

Valid Anagram
Majority Element
Character Counts

The next pattern is closely related:

Seen Set

Mental model:

Have I seen this before?

Examples:

Contains Duplicate
Happy Number
Detect Repeated Values

Notice that your Contains Duplicate solution can actually be solved more naturally with a Set.

That's where we're heading next.

Before we move on:

Can you tell me, in one sentence, the difference between a Frequency Counter and a Seen Set?

This is the pattern-recognition skill I care about most.

Me: Frequency counter wants shows an actual count of the occurrences a specific value has been seen, a seen set just shows a Boolean value whether it has been seen at all.

✅ That's exactly the distinction.

I'd tighten the wording slightly for interview purposes:

Frequency Counter

A frequency counter stores how many times each value appears.

Mental model:

value → count

Example:

{
  a: 3,
  b: 1,
  c: 2
}

Used when you care about:

Counts
Frequencies
Anagrams
Majority elements
Grouping by occurrence
Seen Set

A seen set stores whether a value has been encountered before.

Mental model:

value → seen?

Example:

Set { 1, 2, 3 }

or

{
  1: true,
  2: true,
  3: true
}

Used when you care about:

Duplicates
Previously visited values
Cycle detection
Membership checks
Interview Recognition Shortcut

When reading a problem, ask yourself:

Do I need the count?

If yes:

Frequency Counter

If no, and you only need to know whether something exists:

Seen Set

That's one of the most useful pattern-recognition questions you can develop.

Examples

Contains Duplicate

Question:

Has this number appeared before?

Need count?

No

Pattern:

Seen Set

Valid Anagram

Question:

Do both strings contain the same number of each character?

Need count?

Yes

Pattern:

Frequency Counter

You've now successfully completed the Frequency Counter pattern itself:

✅ Understand the concept
✅ Can identify the pattern
✅ Can explain the approach
✅ Can discuss time complexity
✅ Can discuss space complexity
✅ Solved multiple frequency-counter style problems

Next we'll move into Seen Set, which is a much smaller pattern because you already understand 80% of the underlying idea.

Seen Set Lesson (Quick Introduction)

The core operation of a Set is:

set.has(value)

which allows us to ask:

Have I seen this before?

in approximately O(1) time.

A lot of interview questions become:

Look at current value.
Check if it exists in the set.
If yes → found answer.
If no → add it to the set.

Before we start the next lesson formally:

Without writing code, how would you solve Contains Duplicate using a Set instead of a frequency counter?

Explain only the approach, like you're speaking to an interviewer.

*/