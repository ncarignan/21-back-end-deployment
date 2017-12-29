'use strict';

class BSTNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(value){
    this.root = new BSTNode(value);
  }
  insert(value){
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');
    if(this.value === value)
      throw new TypeError('Binary Search Tree - value is already present');

    if(value < this.value){
      if(!this.left)
        return this.left = new BinarySearchTree(value);
      return this.left.insert(value);
    }
    if(!this.right)
      return this.right = new BinarySearchTree(value);
    return this.right.insert(value);
  }
  find(value){
    if(value=== this.value)
      return this;

    if(value > this.value) {
      if(this.right !==null)
        return this.right.find(value);
      else
        return false;
    }
    if(this.left!== null)
      return this.left.find(value);
    else
      return false;
  }

  findParent(value){
    if(this.left)
      if(this.left.value === value)
        return this;
    if(this.right)
      if(this.right.value === value)
        return this;
    if(value > this.value) {
      if(this.right !==null)
        return this.right.findParent(value);
      else
        return false;
    }
    if(this.left!== null)
      return this.left.findParent(value);
    return null;
  }

  findMin(){
    if(this.left)
      return this.left.findMin();
    return this;
  }
  toString() {
    return this._toString(this);
  }

  _toString(node) {
    if(!node)
      return '';
    return `${this._toString(node.left)} ${node.value} ${this._toString(node.right)}`;
  }


  remove(value){
    let node = this.find(value);
    if(!node){
      return null;
    }
    if(node.left && node.right){
      let min = node.right.findMin();
      this.value = min.value;
      return this.remove(min.value);
    }

    if(node.left){
      let parentNode = this.findParent(value);
      if(parentNode.left.value === value)
        return parentNode.left = node.left;
      return parentNode.right = node.left;
    }
    if(node.right){
      let parentNode = this.findParent(value);
      if(parentNode.left.value === value)
        return parentNode.left = node.right;
      return parentNode.right = node.left;
    }
    if(!node.left && !node.right){
      let parent = this.findParent(value);
      if(parent.left.value === value)
        parent.left = null;
      if(parent.right.value === value)
        parent.right = null;
    }
  }
  _remove(node, value){

    //finds a node with 2 children
    let tempResult = node.value;
    let temp = this.findMin(node.right);
    node.value = temp.value;
    node.right = removeNode(node.right, temp.value);
    result = tempResult;
    return node;
  }
}

module.exports = BinarySearchTree;
