/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const ar1 = [];
    const ar2 = [];
    recur(root1, ar1);
    recur(root2, ar2);
    if(ar1.length != ar2.length) return false;

    for(let i = 0; i < ar1.length; i++){
        if(ar1[i] != ar2[i]) return false;
    }
    return true;
};

function recur(head, arr){
    if (!head) {
        return;
    }
    if (!head.left && !head.right) {
        arr.push(head.val);
    } else {
        recur(head.left, arr);
        recur(head.right, arr);
    }
}