// @flow

class Node {
  name: string;
  children: { [key: string]: Node };

  constructor(name: string) {
    this.name = name;
    this.children = {};
  }

  getName() {
    return this.name;
  }

  addChild(node: Node) {
    const name = node.getName();
    if (!this.children[name]) {
      this.children[name] = node;
    }
  }

  getChildren() {
    return Object.values(this.children);
  }
}

export default Node;
