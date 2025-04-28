# BubbleSort

- repeatedly goes through the list , compares adjacent elements and swaps them if they are in the wrong order.

- Time Complexity

  - Best -> O(n)
  - Average -> O(n^2)
  - Worst -> O(n^2)

- Space Complexity ->InPlace Sorting -> O(1).

# Selection sort

- It sorts an array by repeatedly selectiong the smallest element from unsorted portion and swapping with first unsorted element.

- Time Complexity

  - Best -> O(n^2)
  - Average -> O(n^2)
  - Worst -> O(n^2)

- Space Compexity ->InPlace Sorting -> O(1)

# Insertion sort

- Start with second element.
- compare it with elements to its left.
- Shift larger elements to its right.
- Insert the current element into current position.

- Time Complexity

        - Best ->O(n)
        - Average -> O(n^2)
        - Worst -> (On^2)

- Space Complexity -> O(1) -> InPlace Sorting.

# Summary of the three

    - Bubble Sort => Good for learning, Bad for performance , unless array is almost sorted.
    - Selection Sort => Minimizes swaps but still slow due to comparisons.
    - Insertion Sort => Best choice among the three when the list is small or partially sorted.




# Merge Sort

- a powerful and efficient divide and conquer sorting technique.

- Divides the array into halves recursively until each subarray has 1 element.
- Merges the subarrays while sorting them.

- Time Complexity

  - Best -> O(nlogn)
  - Average -> O(nlogn)
  - Wordst -> O(nlogn)

->  Pros :
        - Very efficient for large datasets.
        - Consistent time complexity. 
        - Stable sort.


        Cons:
            - uses extra space O(n) due to merging.
            - Not in place.




# Quick Sort

- One of the most efficient sorting techniques.

- works by selecting a pivot element from the array and partitioning the array into two  subarrays.
- Elements smaller than the pivot go to left.
- Elements greater than pivot go to right.

Time Complexity

 - Best -> O(nlogn)
 - Average -> O(nlogn)
 - Worst -> O(n^2)

 Space Complexity -> O(logn) -> inplace Sorting (uses no extra space except recursion stack).





 # Searching Algorithms

 - Linear Search

      - Start from first element , compare each element with the target , continue until you find the element or reach the end.
      - Time complexity : 
          -> Best : O(1)
          -> Average : O(n)
          -> Worst : O(n) 

      - Space Complexity : O(1)
      - Works for unsorted data.


  - Binary Search
   

       - sorted. Divide the array into two halves. Compare the middle element with the key.

       - Time Complexity: Best : O(1)
                          Average: O(log2n)

       - Space Complexity: Iterative Binary Search : O(1)
                           Recursive Binary Serach : O(logn)


    - Jump Search

        - It is a compromise between Linear Search and Binary Search.
        - Jump ahead by fixed number of blocks (√n steps).
        - Then do linear search within the block where the target may exist.


        - Time Complexity: Best : O(1)
                          Average/Worst Case: O(√n)
        - Space complexity: O(1)






Algorithm	              Data Required	    Best Time	    Avg Time	    Worst Time	    Space
Linear Search	          Unsorted/Sorted	  O(1)	        O(n)	        O(n)	          O(1)
Binary Search	          Sorted	          O(1)	        O(log n)	    O(log n)	      O(1)
Jump Search	            Sorted	          O(1)	        O(√n)	        O(√n)	          O(1)
Interpolation Search	  Sorted + Uniform	O(1)	        O(log log n)	O(n)	          O(1)
Exponential Search	    Sorted	          O(1)	        O(log n)	     O(log n)	      O(1)
Fibonacci Search	      Sorted	          O(1)	        O(log n)	     O(log n)	      O(1)