class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (temp.val === val) {
        return this;
      }
      if (temp.val < val) {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      } else {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
    }
  }
  find(val) {
    let currentNode = this.root,
      found = false;
    while (currentNode && !found) {
      if (currentNode.val === val) {
        found = true;
        return currentNode;
      }
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  deleteKey(key) {
    this.deleteRec(this.root, key);
  }

  deleteRec(root, key) {
    if (root == null) return root;

    if (key < root.val) root.left = this.deleteRec(root.left, key);
    else if (key > root.val) root.right = this.deleteRec(root.right, key);
    else {
      if (root.left == null) return root.right;
      else if (root.right == null) return root.left;

      root.val = this.minValue(root.right);
      root.right = this.deleteRec(root.right, root.val);
    }

    return root;
  }

  minValue(root) {
    let minv = root.key;
    while (root.left != null) {
      minv = root.left.key;
      root = root.left;
    }
    return minv;
  }
  print(node = this.root) {
    if (node === null) {
      return;
    }
    console.log(node.val);
    this.print(node.left);
    this.print(node.right);
  }
}

const tree = new BinarySearchTree();

//   10
//  5    13
// 2 7   11 16

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
tree.deleteKey(16);

tree.print();
console.log(tree.find(10));
console.log(tree);
