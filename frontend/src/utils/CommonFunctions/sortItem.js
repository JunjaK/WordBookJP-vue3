/* eslint-disable no-param-reassign */
export function upOrder(selected, listData) {
  if (selected.length > 0) {
    const list = selected.sort((a, b) => a.sortOrd - b.sortOrd);
    const minSortOrd = listData.map((el) => el.sortOrd).reduce((min, cur) => Math.min(min, cur), Infinity);
    if (minSortOrd !== list[0].sortOrd) {
      for (let i = 0; i < list.length; i += 1) {
        const idx = listData.findIndex((f) => list[i].sortOrd === f.sortOrd);
        const temp = listData[idx - 1].sortOrd;

        listData[idx - 1].sortOrd = list[i].sortOrd;
        listData[idx].sortOrd = temp;
        listData.sort((a, b) => a.sortOrd - b.sortOrd);
      }
    }
    return true;
  }
  return false;
}
export function downOrder(selected, listData) {
  if (selected.length > 0) {
    const list = selected.sort((a, b) => a.sortOrd - b.sortOrd);
    const maxSortOrd = listData.map((el) => el.sortOrd).reduce((max, cur) => Math.max(max, cur), -Infinity);

    if (list[list.length - 1].sortOrd !== maxSortOrd) {
      for (let i = list.length - 1; i > -1; i -= 1) {
        const idx = listData.findIndex((f) => list[i].sortOrd === f.sortOrd);
        const temp = listData[idx + 1].sortOrd;

        listData[idx + 1].sortOrd = list[i].sortOrd;
        listData[idx].sortOrd = temp;
        listData.sort((a, b) => a.sortOrd - b.sortOrd);
      }
    }
    return true;
  }
  listData.sort((a, b) => a.sortOrd - b.sortOrd);
  return false;
}
