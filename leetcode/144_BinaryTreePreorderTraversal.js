// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

var preorderTraversal = function(root) {
    const result = [];
    preOrder(root, result);
    return result;
};

function preOrder(root, result) {
    if(root == null) return;
    result.push(root.val);
    preOrder(root.left, result);
    preOrder(root.right, result);
}