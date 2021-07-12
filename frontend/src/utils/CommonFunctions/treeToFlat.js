export default function treeToFlatArray(array) {
  let flattenArray = [];
  const copiedArray = this.$l.cloneDeep(array);
  copiedArray.forEach((elem) => {
    if (elem.children != null) {
      flattenArray = [...flattenArray, ...treeToFlatArray(elem.children)];
      // eslint-disable-next-line no-param-reassign
      delete elem.children;
      flattenArray.push(elem);
    } else {
      flattenArray.push(elem);
    }
  });
  return flattenArray;
}
