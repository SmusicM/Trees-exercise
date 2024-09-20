/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
   //if(!this.root) return 0
   const findMinDepth = (node) =>{
     if(!node)return Infinity
     if(!node.left&&!node.right){
      return 1
     }
     let leftDepth = findMinDepth(node.left)
     let rightDepth = findMinDepth(node.right)
     return Math.min(leftDepth,rightDepth)+1
   }

   if(!this.root)return 0
   return findMinDepth(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0
    const findMaxDepth = (node) =>{
      if(!node)return 0
      let leftDepth = findMaxDepth(node.left)
      let rightDepth = findMaxDepth(node.right)
      return Math.max(leftDepth,rightDepth)+1
    }
    return findMaxDepth(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    //use infinty no negatives in response
    let maxSum = -Infinity
    const maxSumfunc = (node)=>{
      //if given no node return 0
     if(node===null){
      return 0
     }
     //if no root return 0 for furthr checking
      if(!this.root) return 0
      //stores in variable left and right sum func using recursion to the callback
      //to find the max sum of each side
     //no negative nums in maxSum
      const leftTotalSum = Math.max(maxSumfunc(node.left),0)
      const rightTotalSum = Math.max(maxSumfunc(node.right),0)
      //stores in val current max sum of left and right side
      const currMaxSum = node.val + leftTotalSum + rightTotalSum
      //get new maxSum or maxSum if it was a bigger sum
      maxSum = Math.max(maxSum,currMaxSum)
      //returns val and uses Math.max to return the bugger sum with its val in the node
      return node.val+Math.max(leftTotalSum,rightTotalSum)
    }
    if(!this.root)return 0
    //recursive call to the root,and starts at it
   maxSumfunc(this.root)
   //return max sum
   return maxSum
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
   if(!this.root)return null
   let result = null
   const getNextLarger = (node) =>{
     if(!node){
      return ;
    }
    if(node.val > lowerBound){
      if(result===null || node.val < result){
        result = node.val
      }
    }
    getNextLarger(node.left)
    getNextLarger(node.right)
   }
   getNextLarger(this.root)
   return result
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
