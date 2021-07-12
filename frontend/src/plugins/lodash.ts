/* eslint-disable no-param-reassign */
import {
  cloneDeep, compact, take, takeRight, uniq, flatMap, flatMapDeep, flattenDepth, every, last,
} from 'lodash';

const l = {
  compact,
  cloneDeep,
  take,
  takeRight,
  uniq,
  flatMap,
  flatMapDeep,
  flattenDepth,
  every,
  last,
};

export default {
  install: (app: any) => {
    app.config.globalProperties.$l = () => l;
  },
};
