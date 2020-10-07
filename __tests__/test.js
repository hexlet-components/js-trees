// @ts-check

import Tree from '../src/index.js';

describe('Tree', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree('/');
    tree.addChild('var')
      .addChild('lib')
      .addChild('run');
    tree.addChild('etc');
    tree.addChild('home');
  });

  it('#hasChildren', () => {
    expect(tree.hasChildren()).toBe(true);
  });

  it('#hasChild', () => {
    expect(tree.hasChild('/')).toBe(false);
    expect(tree.hasChild('etc')).toBe(true);
  });

  it('#getChildren', () => {
    const dirs = tree.getChildren().map((child) => child.getKey());
    expect(dirs).toEqual(['var', 'etc', 'home']);
  });

  it('#getParent', () => {
    const subtree = tree.getChild('var');
    expect(subtree && subtree.getParent()).toEqual(tree);
  });

  it('#getChild', () => {
    const subtree = tree.getChild('var');
    expect(subtree && subtree.getKey()).toEqual('var');
  });

  it('#getChild undefined', () => {
    const subtree = tree.getChild('undefined');
    expect(subtree).toEqual(undefined);
  });

  it('#getDeepChild', () => {
    const subtree = tree.getDeepChild(['var', 'lib']);
    expect(subtree).not.toBeUndefined();
    expect(subtree.getKey()).toEqual('lib');
    const parent = subtree.getParent();
    expect(parent).not.toBeUndefined();
    expect(parent.getKey()).toEqual('var');
  });

  it('#getDeepChild undefined', () => {
    const subtree = tree.getDeepChild(['var', 'lib', 'one', 'two']);
    expect(subtree).toEqual(undefined);
  });

  it('#removeChild', () => {
    const subtree = tree.getChild('var');
    expect(subtree).not.toBeUndefined();
    subtree.removeChild('lib');
    expect(subtree.hasChildren()).toBe(false);
  });
});
