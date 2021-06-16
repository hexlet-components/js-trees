# js-trees

[![github action status](https://github.com/hexlet-components/js-trees/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-trees/actions)

## Install

```sh
npm install @hexlet/trees
```

## Usage example

```javascript
import Tree from '@hexlet/trees';

const tree = new Tree('/', 'root directory');
tree.getMeta(); // 'root directory'
const etcNode = tree.addChild('etc');
etcNode.getKey(); // 'etc'

tree.hasChild('etc'); // true
etcNode.getParent() === tree; // true

etcNode.hasChildren(); // false
tree.hasChildren(); // true

const libNode = etcNode.addChild('lib');
libNode === tree.getChild('lib'); // true
libNode === tree.getDeepChild(['etc', 'lib']); // true

etcNode.removeChild('lib'); // true
etcNode.hasChild('lib'); // false
```

For more information, see the [Full Documentation](https://github.com/hexlet-components/js-trees/tree/master/docs)

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-trees)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-trees).
