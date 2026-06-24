/*

Guided Challenge 2 (Slightly More Complex)

Write a function:

sameFrequency(str1, str2)

Return:

true

if both strings contain the same characters with the same frequencies.

Otherwise return:

false

Examples:

sameFrequency("aab", "aba") // true
sameFrequency("aab", "abb") // false
sameFrequency("abc", "ab")  // false

Submit:

Your code
Approach
Time Complexity
Space Complexity

No hints unless you ask.

*/

function sameFrequency(str1, str2){
    if(str1.length !== str2.length) { return false }

    let freq1 = {};
    let freq2 = {};

    for(let i = 0; i < str1.length; i++){
        freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    }

    for(let i = 0; i < str2.length; i++){
        freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
    }

    for(const key of Object.keys(freq1)){
        if(freq1[key] !== freq2[key]){
            return false;
        }
    }
    return true;
}

// Cleaner Solution
function sameFrequency(str1, str2) {
    if (str1.length !== str2.length) return false;

    const freq = {};

    for (const char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!freq[char]) return false;
        freq[char]--;
    }

    return true;
}

/*

Approach: We short circuit if the strings lengths don't match. We then initialize 2 objects that will hold the 
frequency count of the 2 strings called freq1 and freq2. We then visit every character of str1 and evaluate
whether a key in the freq1 object exists with that value.  If it doesn't one is created and it's value is set to 1.
If it does, then the value of that key is incremented by 1.  We then repeat this process using str2 and freq2 so that
freq1 holds the count of characters from str1 and freq2 holds the count of characters for str2.  We then visit each
key in freq1 and compare the value there, freq1[key] with the value that is stored in freq2[key] if they don't match
false is returned.  After the loop is finished and it has not returned false, true is returned as all character of str1
and str2 match.  True is also returned if 2 empty strings are given as inputs.

Time Complexity: I am only familiar with general Big O notation so I would say O of n, but I think technically it might be
O of n + 3 since it loops 3 times.

Space Complexity: same as time complexity

*/

/*

NOTE:  I made a mistake in the code but it still worked and passed all tests.

Correctness Review
Is the solution correct?

❌ Not currently.

The issue is here:

freq1[str1[i]] = (str1[i] || 0) + 1;

and

freq2[str2[i]] = (str2[i] || 0) + 1;

You're checking the character itself:

str1[i]

instead of the current frequency count:

freq1[str1[i]]
Let's Walk Through It

Input:

sameFrequency("aab", "aba")

First iteration:

str1[i] === "a"

So:

("a" || 0) + 1

JavaScript treats "a" as truthy.

Result:

"a" + 1

which becomes:

"a1"

Your frequency object becomes:

{
  a: "a1"
}

instead of:

{
  a: 1
}

So the function won't work correctly.

Edge Cases

You correctly handled:

""
""

✅ Returns true

You correctly handled:

"abc"
"ab"

✅ Returns false immediately

Approach Review

Your explanation was strong.

You clearly described:

Length check
Build frequency counters
Compare counts

That's exactly how I would expect a candidate to explain this pattern.

A slightly tighter interview version:

First I compare the lengths because strings with different lengths cannot have identical character frequencies. Then I build a frequency counter for each string. Finally, I iterate through one frequency counter and verify that every character has the same count in the other frequency counter. If any count differs, I return false. Otherwise I return true.

That's concise and interviewer-friendly.

Complexity Review

You wrote:

O(n + 3)

This is actually a really good observation.

You're starting to think beyond memorization.

Let's analyze it properly.

Time Complexity

Loop 1:

for str1

O(n)

Loop 2:

for str2

O(n)

Loop 3:

for keys in freq1

At most O(n)

Total:

O(n + n + n)

which simplifies to:

O(3n)

and Big O ignores constants:

O(n)

✅ Final Answer:

Time Complexity: O(n)
Space Complexity

You wrote:

same as time complexity

This is actually correct.

Why?

Because:

freq1
freq2

can each store up to n unique characters.

Worst case:

"abcdef"

creates:

{
 a:1,
 b:1,
 c:1,
 d:1,
 e:1,
 f:1
}

The size grows with input.

Therefore:

Space Complexity: O(n)

✅ Correct

Interview Feedback
Category	Score
Correctness	6/10
Pattern Recognition	10/10
Complexity Analysis	9/10
Explanation Quality	9/10
Code Quality	8/10
Overall Score

8.4 / 10

Important Interview Habit

What I really like here is that you're starting to reason about:

"I have three loops."

Many beginners stop there.

A stronger interview habit is:

Count the loops.
Express the total work.
O(n + n + n)
Simplify.
O(3n)
Drop constants.
O(n)

That's exactly how interviewers think.

One Quick Follow-Up

Before we move to Challenge 3, tell me:

What should the two buggy lines be changed to?

Just answer with the corrected lines.

I'm looking for pattern recognition more than code memorization.

freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
freq2[str2[i]] = (freq2[str2[i]] || 0) + 1; 



✅ Exactly right.

You corrected the bug by checking the current count stored in the frequency counter instead of checking the character itself.

freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
Why This Works

Suppose:

freq1 = {}
str1 = "aab"

First "a":

freq1["a"] = (undefined || 0) + 1

becomes:

freq1["a"] = 1

Second "a":

freq1["a"] = (1 || 0) + 1

becomes:

freq1["a"] = 2

That's the frequency counter pattern in its most common form.

Pattern Recognition Check

At this point, if you see a problem that asks:

Count occurrences
Compare frequencies
Determine if two collections contain the same elements
Find the most common value

your brain should immediately think:

Frequency Counter

and

Hash Map / Object

That's the habit we're building.

ME: Before moving on to the third challenge is there a better way to solve challenge 2?

Yes. Your two-counter solution is totally valid, but there is a cleaner version using one frequency counter.

Build counts from str1, then subtract counts while looping through str2.

function sameFrequency(str1, str2) {
    if (str1.length !== str2.length) return false;

    const freq = {};

    for (const char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!freq[char]) return false;
        freq[char]--;
    }

    return true;
}

Why this is better:

It uses one object instead of two, so the code is a little simpler and the space usage is lower in practice.

Complexity is still:

Time: O(n)
Space: O(n)

Interview phrasing:

I count each character in the first string. Then I walk through the second string and subtract from that count. If I ever see a character that is missing or already used up, I return false. If I finish the loop, the strings have the same character frequencies.

This is usually the version I’d prefer in an interview.

*/