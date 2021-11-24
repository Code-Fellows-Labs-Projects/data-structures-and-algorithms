# Merge-Sort

Merge Sort is a function that takes in an unsorted array and splits it in half until each subarray contains one element. Then, it merges the subarrays back together, in ascending order until a final sorted array is reached.

## Algorithm

1). Split the iput array into two halves. 

2). Continue splitting the subarrays in half until the subarrays contain only one element.

3). Now, begin merging the single element subarrays with one another in acsending order.

4). Repeat step 3 until all subarrays have been merged into one final array.

## Pseudocode

![pseudocode](img/pseudocode.png)

## Steps

*sample input array*

`[8,4,23,42,16,15]`

![sample input array](img/inputArray.png)

### Step 1

Split the intial array into two subarrays using the middle index. 

```
mid 3
left [ 8, 4, 23 ]
right [ 42, 16, 15 ]
```

![split1](img/split1.png)

Continue splitting the subarray using the middle index. 

```
mid 1
left [ 8 ]
right [ 4, 23 ]
```

![split2](img/split2.png)

Split the subarray again. Now each subarray has a length of 1 and cannot be split any further. 

```
mid 1
left [ 4 ]
right [ 23 ]
```

![split3](img/split3.png)


Now we break into merge function and begin merging the left side. 

![merge1](img/merge1.png)

![merge2](img/merge2.png)

Once the left side is merged, we hop over to the right side to split the right array into subarrays. 

```
mid 1
left [ 42 ]
right [ 16, 15 ]
```
![split4](img/split4.png)

Continue splitting the subarray using the middle index. 

```
mid 1
left [ 16 ]
right [ 15 ]
```
![split5](img/split5.png)

Now we break into merge function and begin merging the right side.

![merge3](img/merge3.png)

Continue merging. 

![merge4](img/merge4.png)

Once the right side is merged, we merge with the left side to receive the final array in sorted order. 

![result](img/finalResult.png)

## Efficency

**Time: O(nlogn)**

**Space: O(n)**

