// @flow

/**
 * Class that represent an arbitary tree
 */
class Tree {
  parent: *;
  key: *;
  meta: *;
  children: Map<string, Tree>;

  /**
   * Constructor
   * @example
   * const tree = new Tree('/');
   */
  constructor(key: string, meta: ?mixed, parent: ?Tree) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  /**
   * Get node's key
   * @example
   * const tree = new Tree('/');
   * const node = tree.addChild('etc');
   * node.getKey(); // etc
   */
  getKey(): string {
    return this.key;
  }

  /**
   * Get node's meta
   * @example
   * const tree = new Tree('/', 'root directory');
   * tree.getMeta(); // root directory
   */
  getMeta() {
    return this.meta;
  }

  /**
   * Add child to node's children list
   * @example
   * const tree = new Tree('/');
   * const node = tree.addChild('etc', { writable: false });
   */
  addChild(key: string, meta: ?mixed): Tree {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  /**
   * Check if node has child by key
   * @example
   * const tree = new Tree('/');
   * tree.addChild('etc');
   * tree.hasChild('etc'); // true
   */
  hasChild(key: string): boolean {
    return this.children.has(key);
  }

  /**
   * Get node's parent node
   * @example
   * const tree = new Tree('/');
   * const node = tree.addChild('etc');
   * node.getParent() === tree; // true
   */
  getParent(): ?Tree {
    return this.parent;
  }

  /**
   * remove child from tree
   * @example
   * const tree = new Tree('/');
   * tree.addChild('etc');
   * tree.removeChild('etc');
   * tree.hasChild('etc'); // false
   */
  removeChild(key: string): boolean {
    return this.children.delete(key);
  }

  /**
   * Check if node has children
   * @example
   * const tree = new Tree('/');
   * tree.hasChildren(); // false
   * tree.addChild('etc');
   * tree.hasChildren(); // true
   */
  hasChildren(): boolean {
    return this.children.size > 0;
  }

  /**
   * Get tree's child by key
   * @example
   * const tree = new Tree('/');
   * const node = tree.addChild('etc');
   * node === tree.getChild('etc'); // true
   */
  getChild(key: string) {
    return this.children.get(key);
  }

  /**
   * Get tree's deep child
   * @example
   * const tree = new Tree('/');
   * const etcNode = tree.addChild('etc');
   * const libNode = etcNode.addChild('lib');
   * libNode === tree.getDeepChild(['etc', 'lib']);
   * etcNode === tree.getDeepChild(['etc']);
   * tree.getDeepChild(['etc', 'lalala']); // undefined
   */
  getDeepChild(keys: Array<string>): ?Tree {
    const [key, ...rest] = keys;
    const node = this.getChild(key);
    if (rest.length === 0 || node === undefined) {
      return node;
    }
    return node.getDeepChild(rest);
  }

  /**
   * Get node's children
   */
  getChildren(): Array<Tree> {
    return [...this.children.values()];
  }
}

export default Tree;
