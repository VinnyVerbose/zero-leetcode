# Chat GPT Solution and Explanation

``` javascript
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const counts = {};

    for (let i = 0; i < str1.length; i++) {
        counts[str1[i]] = (counts[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];

        if (!counts[char]) {
            return false;
        }

        counts[char]--;
    }

    return true;
}
```
# ChatGPT's Explanation for it's solution



# LeetCode #242 — Valid Anagram (One Frequency Counter Walkthrough)

We'll trace the algorithm using:

```text
str1 = "anagram"
str2 = "nagaram"
```

The algorithm uses **one frequency counter**.

---

## Step 1 — Count characters from `str1`

Start with an empty object:

```javascript
counts = {}
```

### Iteration 1

```text
i = 0
char = 'a'
```

```javascript
counts['a'] = (0) + 1
```

Result:

```javascript
{
    a: 1
}
```

---

### Iteration 2

```text
i = 1
char = 'n'
```

Result:

```javascript
{
    a: 1,
    n: 1
}
```

---

### Iteration 3

```text
i = 2
char = 'a'
```

`'a'` already exists, so increment it.

Result:

```javascript
{
    a: 2,
    n: 1
}
```

---

### Iteration 4

```text
i = 3
char = 'g'
```

Result:

```javascript
{
    a: 2,
    n: 1,
    g: 1
}
```

---

### Iteration 5

```text
i = 4
char = 'r'
```

Result:

```javascript
{
    a: 2,
    n: 1,
    g: 1,
    r: 1
}
```

---

### Iteration 6

```text
i = 5
char = 'a'
```

Result:

```javascript
{
    a: 3,
    n: 1,
    g: 1,
    r: 1
}
```

---

### Iteration 7

```text
i = 6
char = 'm'
```

Finished counting.

```javascript
{
    a: 3,
    n: 1,
    g: 1,
    r: 1,
    m: 1
}
```

At this point, the object represents an inventory of all the letters available in `str1`.

---

# Step 2 — Process `str2`

Now we begin subtracting.

Current counts:

```javascript
{
    a: 3,
    n: 1,
    g: 1,
    r: 1,
    m: 1
}
```

---

### Iteration 1

```text
char = 'n'
```

Current count:

```javascript
n: 1
```

Subtract one.

```javascript
{
    a: 3,
    n: 0,
    g: 1,
    r: 1,
    m: 1
}
```

---

### Iteration 2

```text
char = 'a'
```

```javascript
{
    a: 2,
    n: 0,
    g: 1,
    r: 1,
    m: 1
}
```

---

### Iteration 3

```text
char = 'g'
```

```javascript
{
    a: 2,
    n: 0,
    g: 0,
    r: 1,
    m: 1
}
```

---

### Iteration 4

```text
char = 'a'
```

```javascript
{
    a: 1,
    n: 0,
    g: 0,
    r: 1,
    m: 1
}
```

---

### Iteration 5

```text
char = 'r'
```

```javascript
{
    a: 1,
    n: 0,
    g: 0,
    r: 0,
    m: 1
}
```

---

### Iteration 6

```text
char = 'a'
```

```javascript
{
    a: 0,
    n: 0,
    g: 0,
    r: 0,
    m: 1
}
```

---

### Iteration 7

```text
char = 'm'
```

```javascript
{
    a: 0,
    n: 0,
    g: 0,
    r: 0,
    m: 0
}
```

Finished.

No character was ever missing, so the function returns:

```javascript
true
```

---

# Why do we check `if (!counts[char])`?

Suppose we have:

```text
str1 = "rat"
str2 = "car"
```

After counting `str1`:

```javascript
{
    r: 1,
    a: 1,
    t: 1
}
```

Now process `str2`.

First character:

```text
'c'
```

Look it up:

```javascript
counts['c']
```

Result:

```javascript
undefined
```

Since `undefined` is falsy:

```javascript
if (!counts['c']) {
    return false;
}
```

The algorithm immediately returns `false` because `"rat"` doesn't contain a `"c"`.

---

# The Main Idea

Think of the object as an inventory of available letters.

After counting `"anagram"`:

```text
a → 3
n → 1
g → 1
r → 1
m → 1
```

As you read the second string, you **use up** one letter at a time by decrementing its count.

If you ever:

* encounter a letter that isn't in the object, or
* try to use more copies of a letter than are available,

the check

```javascript
if (!counts[char])
```

returns `true`, and you know the strings cannot be anagrams.

This is why only **one frequency counter** is needed.

---

# Complexity

**Time Complexity**

* First loop: `O(n)`
* Second loop: `O(n)`

Overall:

```text
O(n)
```

**Space Complexity**

The frequency counter stores one entry per unique character.

```text
O(k)
```

where `k` is the number of unique characters.

For lowercase English letters, `k` is at most 26, so this is often considered:

```text
O(1)
```

---

# Pattern to Remember

This is one of the most common hashmap patterns in coding interviews:

1. Count occurrences in the first collection.
2. Consume (decrement) those counts while processing the second collection.
3. If a required item is missing or exhausted, return `false`.
4. If everything matches, return `true`.

This "count first, then consume" strategy appears in many Easy and Medium LeetCode problems involving strings, arrays, and hashmaps.


*/// Chat GPT Solution and Explanation

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const counts = {};

    for (let i = 0; i < str1.length; i++) {
        counts[str1[i]] = (counts[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];

        if (!counts[char]) {
            return false;
        }

        counts[char]--;
    }

    return true;
}

// ChatGPT's Explanation for it's solution

/*

# LeetCode #242 — Valid Anagram (One Frequency Counter Walkthrough)

We'll trace the algorithm using:

```text
str1 = "anagram"
str2 = "nagaram"
```

The algorithm uses **one frequency counter**.

---

## Step 1 — Count characters from `str1`

Start with an empty object:

```javascript
counts = {}
```

### Iteration 1

```text
i = 0
char = 'a'
```

```javascript
counts['a'] = (0) + 1
```

Result:

```javascript
{
    a: 1
}
```

---

### Iteration 2

```text
i = 1
char = 'n'
```

Result:

```javascript
{
    a: 1,
    n: 1
}
```

---

### Iteration 3

```text
i = 2
char = 'a'
```

`'a'` already exists, so increment it.

Result:

```javascript
{
    a: 2,
    n: 1
}
```

---

### Iteration 4

```text
i = 3
char = 'g'
```

Result:

```javascript
{
    a: 2,
    n: 1,
    g: 1
}
```

---

### Iteration 5

```text
i = 4
char = 'r'
```

Result:

```javascript
{
    a: 2,
    n: 1,
    g: 1,
    r: 1
}
```

---

### Iteration 6

```text
i = 5
char = 'a'
```

Result:

```javascript
{
    a: 3,
    n: 1,
    g: 1,
    r: 1
}
```

---

### Iteration 7

```text
i = 6
char = 'm'
```

Finished counting.

```javascript
{
    a: 3,
    n: 1,
    g: 1,
    r: 1,
    m: 1
}
```

At this point, the object represents an inventory of all the letters available in `str1`.

---

# Step 2 — Process `str2`

Now we begin subtracting.

Current counts:

```javascript
{
    a: 3,
    n: 1,
    g: 1,
    r: 1,
    m: 1
}
```

---

### Iteration 1

```text
char = 'n'
```

Current count:

```javascript
n: 1
```

Subtract one.

```javascript
{
    a: 3,
    n: 0,
    g: 1,
    r: 1,
    m: 1
}
```

---

### Iteration 2

```text
char = 'a'
```

```javascript
{
    a: 2,
    n: 0,
    g: 1,
    r: 1,
    m: 1
}
```

---

### Iteration 3

```text
char = 'g'
```

```javascript
{
    a: 2,
    n: 0,
    g: 0,
    r: 1,
    m: 1
}
```

---

### Iteration 4

```text
char = 'a'
```

```javascript
{
    a: 1,
    n: 0,
    g: 0,
    r: 1,
    m: 1
}
```

---

### Iteration 5

```text
char = 'r'
```

```javascript
{
    a: 1,
    n: 0,
    g: 0,
    r: 0,
    m: 1
}
```

---

### Iteration 6

```text
char = 'a'
```

```javascript
{
    a: 0,
    n: 0,
    g: 0,
    r: 0,
    m: 1
}
```

---

### Iteration 7

```text
char = 'm'
```

```javascript
{
    a: 0,
    n: 0,
    g: 0,
    r: 0,
    m: 0
}
```

Finished.

No character was ever missing, so the function returns:

```javascript
true
```

---

# Why do we check `if (!counts[char])`?

Suppose we have:

```text
str1 = "rat"
str2 = "car"
```

After counting `str1`:

```javascript
{
    r: 1,
    a: 1,
    t: 1
}
```

Now process `str2`.

First character:

```text
'c'
```

Look it up:

```javascript
counts['c']
```

Result:

```javascript
undefined
```

Since `undefined` is falsy:

```javascript
if (!counts['c']) {
    return false;
}
```

The algorithm immediately returns `false` because `"rat"` doesn't contain a `"c"`.

---

# The Main Idea

Think of the object as an inventory of available letters.

After counting `"anagram"`:

```text
a → 3
n → 1
g → 1
r → 1
m → 1
```

As you read the second string, you **use up** one letter at a time by decrementing its count.

If you ever:

* encounter a letter that isn't in the object, or
* try to use more copies of a letter than are available,

the check

```javascript
if (!counts[char])
```

returns `true`, and you know the strings cannot be anagrams.

This is why only **one frequency counter** is needed.

---

# Complexity

**Time Complexity**

* First loop: `O(n)`
* Second loop: `O(n)`

Overall:

```text
O(n)
```

**Space Complexity**

The frequency counter stores one entry per unique character.

```text
O(k)
```

where `k` is the number of unique characters.

For lowercase English letters, `k` is at most 26, so this is often considered:

```text
O(1)
```

---

# Pattern to Remember

This is one of the most common hashmap patterns in coding interviews:

1. Count occurrences in the first collection.
2. Consume (decrement) those counts while processing the second collection.
3. If a required item is missing or exhausted, return `false`.
4. If everything matches, return `true`.

This "count first, then consume" strategy appears in many Easy and Medium LeetCode problems involving strings, arrays, and hashmaps.


*/