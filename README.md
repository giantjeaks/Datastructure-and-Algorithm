# Datastructure-and-Algorithm


Necessary Data structure for Beginners.


# Stack :books:
    - seems like a layer of books the fisrt one is in deepest and another stack on top.

- pop ->  Removes and returns the value at the end of the stack
- peek -> Returns the value at the end of the stack.
- push -> Put the velue on to the end of stack.



# Sets :gift:
    - Work like array with no duplicate members and no particular order.

- has(e) => (Bool)Check if the set has an e or not.  
- add(e) => (Bool)Add the e to set after check if already.
- remove(e) => (Bool) Remove the e from set.
- Size(e) => (int) Return a length of set. //In ES6 it's property to set size not a function.


-Union(otherSet) => (Array)Return the union of two set between this and otherSet.
-Intersection(otherSet) => (Array) Return the intersection of two set as a new set.
-Difference(otherSet) => (Array) Return the Difference between two set as a new set.
-Subset(otherSet) => (Bool) Return if the set is a subset of a different set.




# Queue and Priority Queue :necktie:
    - Similar to stack but do a first in first out.

- print => (Array) Print out a collection Queue
- enqueue => Push a element in to Queue
- dequeue => Pull off the 1st item of array
- front => (Element type) Return an element first index (just return not delete)
- size => (int) Return a size of queue.
- isEmpty => (Bool) Check if collection is empty.

# Priority Queue 
    - Same as Queue but we collect the prior the bigger is the first one.


# Binary Search Tree :evergreen_tree:
    - Store data like a tree that only have 2 branches the less on the left and the greater on the right.

- class Node use for  Schema of Data 
- Add(data) - keep searching on the left(less than root) or on the right (more than root) and insert data.
- findMin() - keep searching into left side of the tree if it has no another left it's min node.
- findMax() - seem like findMin() but for the right side.
- isPresent(data) - check if data in tree 
- Remove(data) - Remove data in tree and re-structure tree.
- Height() - Return a level of node that root is 0.
- findMinHeight() - Return a minimum value of tree's Height.
- findMaxHeight() - Return a maximum value of tree's Height. 

- inOrder() - min to max
- preOrder() - root,left most,right most
- postOrder() - left most,right,root
- levelOrder() - Sequentially tree's  level


# Hash table 📅
    - Use to implement associate arrays or mapping key value pairs
    - buckets is storage limit
- How its Work 
    its get a keys and put in to hash function and store a hash value if 1 keys store same number its call collision widely use because of efficiency
- Collision 
     if we have keys use same value we must use iterator for store data (bucket)

# Linked List :balloon:
    - Common structure for list that link to next node.
