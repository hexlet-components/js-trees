// @flow

import 'babel-polyfill';

class Tree {
  parent: ?Tree;
  key: string;
  meta: mixed;
  children: Map<string, Tree>;

  constructor(key: string, meta: mixed, parent: ?Tree) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key: string, meta: mixed) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  hasChild(key: string) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key: string) {
    this.children.delete(key);
  }

  hasChildren() {
    return this.children.size > 0;
  }

  getChild(key: string) {
    return this.children.get(key);
  }

  getDeepChild(keys: string[]) {
    return keys.reduce((node, key) => node && node.getChild(key), this);
  }

  getChildren() {
    return [...this.children.values()];
  }
}

export default Tree;
