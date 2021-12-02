# Repeated-Word

## Problem Domain
Find the first repeated word in a book. This function finds and returns the first word to repeat in a string. This function utilizes the built in JavaScript Set object to mimic a hashmap without constructing a hashtable class from scratch.

## Inputs / Outputs

Input: `"Once upon a time, there was a brave princess who..."`
Output: `"a"`

Input: 
```
"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
```
Output: `"it"`

Input: 
```
"It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
```
Output: `"summer"`

## Algorithm

- split the string into an array of words

- create a Set object to mimic a hashmap to store the words

- loop through the words array

- see if the word is already in the Set object, if it is, return the word

- if it isn't, add the word to the Set object and continue looping

- if no word repeats, return null

## Efficiency

Time complexity: O(n) we iterate through the word array n times

Space complexity: O(n) we create a word array that has n words and we create a Set object that has n properties

## Solution Code

[index.js](./index.js)

## Tests

[Test Suite](./__tests__/repeated-word.test.js)