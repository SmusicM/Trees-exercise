/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0
    }
    const queue = [this.root];
    let total = 0;
    while (queue.length > 0) {
      const current = queue.shift();
      total += current.val;
      for (let child of current.children) {
        queue.push(child);
      }
    }

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0
    }
    const queue = [this.root];
    let total = 0;
    while (queue.length > 0) {
      const currentNum = queue.shift()
      //checks if even num and adds to total
      if(currentNum.val % 2 ===0){
        total++
      }
      for (let child of currentNum.children) {
        queue.push(child);
      }
    }
    return total
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0
    }
    const queue = [this.root];
    let total = 0;
    while (queue.length > 0) {
      const currentNum = queue.shift()
      if(currentNum.val > lowerBound){
        total++
      }
      for (let child of currentNum.children) {
        queue.push(child);
      }
    }
    return total
  }
}

module.exports = { Tree, TreeNode };
