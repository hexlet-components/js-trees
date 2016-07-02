// @flow

import 'babel-polyfill';

class Tree {
  parent: ?Tree;
  key: string;
  meta: mixed;
  children: { [key: string]: Tree };

  constructor(key: string, meta: mixed, parent: ?Tree) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = {};
  }

  getKey() {
    return this.key;
  }

  addChild(key: string, meta: mixed) {
    const child = new Tree(key, meta, this);
    this.children[key] = child;

    return child;
  }

  hasChild(key: string) {
    return this.children.hasOwnProperty(key);
  }

  getParent() {
    return this.parent;
  }

  hasChildren() {
    return Object.keys(this.children).length > 0;
  }

  getChild(key: string) {
    if (!this.hasChild(key)) {
      throw new Error(`'${this.getKey()}' does not have child '${key}'`);
    }
    return this.children[key];
  }

  getDeepChild(...keys: string[]) {
    return keys.reduce((node, key) => node.getChild(key), this);
  }

  getChildren() {
    return Object.values(this.children);
  }
}

export default Tree;
