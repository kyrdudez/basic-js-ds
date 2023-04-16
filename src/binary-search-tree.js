const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/



class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.wood = null
  }
  root() {
    if(this.wood === undefined){
      return undefined
    }
    if (this.wood === null){
      return null
    }
    return this.wood
  }

  add(data) {
    this.wood = addNodeElement(this.wood,data)
    function addNodeElement (node,data){
      if(!node){
        return new Node (data)
      }
      if(node.data === data){
        return node
      }
      if(data < node.data){
        node.left = addNodeElement(node.left,data)
      }else{
        node.right = addNodeElement(node.right,data)
      }
      return node
    }

  }

  has(data) {
    return searchNodeElement(this.wood, data)
    function searchNodeElement (node,data){
      if (!node){
        return false
      }
      if (node.data === data){
        return true
      }
      return data < node.data ? 
      searchNodeElement (node.left,data):
      searchNodeElement (node.right,data)
    }
  }

  find(data) {
    if (!this.wood) {
      return null;
    }
    let current = this.wood;
    while (current) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }


  remove(data) {
    this.wood = removeNode(this.wood, data);
  
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
    
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
    
        if (!node.right) {
          node = node.left;
          return node;
        }
    
        if (!node.left) {
          node = node.right;
          return node;
        }
    
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
    
  }

  max() {
    if(!this.wood){
      return null
    }
    let node = this.wood
    while (node.right){
      node = node.right
    }
    return node.data
  }
  min() {
    if(!this.wood){
      return null
    }
    let node = this.wood
    while (node.left){
      node = node.left
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};