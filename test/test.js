// @flow

import { before, describe, it } from 'mocha';
import assert from 'assert';

import Tree from '../index';

describe('Pair', () => {
  let tree;

  before(() => {
    tree = new Tree('/');
    tree.addChild('var')
      .addChild('lib')
      .addChild('run');
    tree.addChild('etc');
    tree.addChild('home');
  });

  it('#hasChildren', () => {
    assert.ok(tree.hasChildren());
  });

  it('#hasChild', () => {
    assert.ok(!tree.hasChild('/'));
    assert.ok(tree.hasChild('etc'));
  });

  it('#getParent', () => {
    const subtree = tree.getChild('var');
    assert.equal(subtree.getParent(), tree);
  });

  it('#getChild', () => {
    const subtree = tree.getChild('var');
    assert.equal(subtree.getKey(), 'var');
  });

  it('#getDeepChild', () => {
    const subtree = tree.getDeepChild(['var', 'lib']);
    assert.equal(subtree.getKey(), 'lib');
    const parent = subtree.getParent();
    assert.equal(parent && parent.getKey(), 'var');
  });

  it('#removeChild', () => {
    const subtree = tree.getChild('var');
    subtree.removeChild('lib');
    assert.ok(!subtree.hasChildren());
  });
});
