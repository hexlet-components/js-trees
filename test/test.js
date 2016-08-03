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

  it('#getChildren', () => {
    assert.deepEqual(tree.getChildren(), ['var', 'etc', 'home']);
  });

  it('#getParent', () => {
    const subtree = tree.getChild('var');
    assert.equal(subtree && subtree.getParent(), tree);
  });

  it('#getChild', () => {
    const subtree = tree.getChild('var');
    assert.equal(subtree && subtree.getKey(), 'var');
  });

  it('#getChild undefined', () => {
    const subtree = tree.getChild('undefined');
    assert.equal(subtree, undefined);
  });

  it('#getDeepChild', () => {
    const subtree = tree.getDeepChild(['var', 'lib']);
    if (subtree) {
      assert.equal(subtree.getKey(), 'lib');
      const parent = subtree.getParent();
      assert.equal(parent && parent.getKey(), 'var');
    } else {
      assert.ok(false);
    }
  });

  it('#getDeepChild undefined', () => {
    const subtree = tree.getDeepChild(['var', 'lib', 'one', 'two']);
    assert.equal(subtree, undefined);
  });

  it('#removeChild', () => {
    const subtree = tree.getChild('var');
    if (subtree) {
      subtree.removeChild('lib');
      assert.ok(!subtree.hasChildren());
    } else {
      assert.ok(false);
    }
  });
});
