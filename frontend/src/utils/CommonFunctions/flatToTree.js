import { cloneDeep } from 'lodash';

export default function flatArrayToTree(data, id = 'clId', refId = 'refClId', checkLeaf = false, fillChildren = false) {
  const arr = cloneDeep(data);
  const tree = [];
  const mappedArr = {};

  for (let i = 0, len = arr.length; i < len; i += 1) {
    const arrElem = arr[i];

    mappedArr[arrElem[id]] = arrElem;
    mappedArr[arrElem[id]].children = fillChildren ? [] : null;
    mappedArr[arrElem[id]].isLeaf = checkLeaf ? true : undefined;
  }

  Object.keys(mappedArr).forEach((key) => {
    const value = mappedArr[key];
    if (value[refId] && value[refId] !== 'NULL') {
      if (mappedArr[value[refId]] && mappedArr[value[refId]].children == null) {
        mappedArr[value[refId]].children = [];
        mappedArr[value[refId]].isLeaf = checkLeaf ? false : undefined;
      }
      if (mappedArr[value[refId]] != null && mappedArr[value[refId]].children) {
        mappedArr[value[refId]].children.push(value);
      }
    } else { tree.push(value); }
  });

  const Q = [tree];
  while (Q.length) {
    const target = Q.pop();
    target.sort((a, b) => {
      if (a.sortOrd == null) return -1;
      if (b.sortOrd == null) return 1;
      return a.sortOrd - b.sortOrd;
    });

    for (let i = 0; i < target.length; i += 1) {
      if (target[i].children != null) Q.push(target[i].children);
    }
  }

  return tree;
}
