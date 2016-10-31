
> hexlet-trees@0.4.6 documentation /Users/mokevnin/projects/js-trees
> documentation "build" "src/index.js" "-f" "md"

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

# Tree

Class that represent an arbitary tree

## constructor

Constructor

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `meta` **any** 
-   `parent` **[Tree](#tree)?** 

## getKey

Get node's key

## getMeta

Get node's meta

## addChild

Add child to node's children list

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `meta` **any** 

## hasChild

Check if node has child by key

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## getParent

Get node's parent node

## removeChild

remove child from tree

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## hasChildren

Check if node has children

## getChild

Get tree's child by key

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## getDeepChild

Get tree's deep child

**Parameters**

-   `keys` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

## getChildren

Get node's children