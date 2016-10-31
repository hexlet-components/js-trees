// @flow

import 'babel-polyfill';

/**
 * Class that represent an arbitary tree
 */
class Tree {
  parent: ?Tree;
  key: string;
  meta: mixed;
  children: Map<string, Tree>;

  /**
   * Constructor
   */
  constructor(key: string, meta: mixed, parent: ?Tree) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  /**
   * Get node's key
   */
  getKey() {
    return this.key;
  }

  /**
   * Get node's meta
   */
  getMeta() {
    return this.meta;
  }

  /**
   * Add child to node's children list
   */
  addChild(key: string, meta: mixed) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  /**
   * Check if node has child by key
   */
  hasChild(key: string) {
    return this.children.has(key);
  }

  /**
   * Get node's parent node
   */
  getParent() {
    return this.parent;
  }

  /**
   * remove child from tree
   */
  removeChild(key: string) {
    this.children.delete(key);
  }

  /**
   * Check if node has children
   */
  hasChildren() {
    return this.children.size > 0;
  }

  /**
   * Get tree's child by key
   */
  getChild(key: string) {
    return this.children.get(key);
  }

  /**
   * Get tree's deep child
   */
  getDeepChild(keys: Array<string>) {
    return keys.reduce((node, key) => node && node.getChild(key), this);
  }

  /**
   * Get node's children
   */
  getChildren() {
    return [...this.children.values()];
  }
}

export default Tree;
