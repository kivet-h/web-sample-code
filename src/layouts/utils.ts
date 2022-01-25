/*
 * @Description:
 */

import { IMenuNav } from './index.d';

/**
 * 将树形对象展开
 * @param tree
 */
export const tree2Arr = (tree: any[], childKey?: string) => {
  const newArr: any[] = [];
  const key = childKey || 'children';

  const cyclic = (arr: any[]) => {
    arr.forEach((item: any) => {
      if (item.children) {
        cyclic(item[key]);
      } else {
        newArr.push(item);
      }
    });
  };

  cyclic(tree);

  return newArr;
};
