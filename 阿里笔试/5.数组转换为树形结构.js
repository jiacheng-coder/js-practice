// 5. 数据结构转换与递归算法
// 将数组格式数据转换为树形结构，其中根节点的 id 为 0。
// 原始数据
const arr = [
  { id: 0, name: 'r' },
  { id: 1, name: 'r.e1', pid: 0 },
  { id: 2, name: 'r.a1', pid: 0 },
  { id: 9, name: 'r.d1', pid: 0 },
  { id: 7, name: 'r.c1.cc1.ccc1', pid: 6 },
  { id: 3, name: 'r.b1', pid: 0 },
  { id: 6, name: 'r.c1.cc1', pid: 5 },
  { id: 4, name: 'r.a1.aa1', pid: 2 },
  { id: 5, name: 'r.c1', pid: 0 },
  { id: 8, name: 'r.c1.cc1.ccc2', pid: 6 },
];

const arr2tree = (arr) => {
  const map = new Map();
  for (const item of arr) {
    map.set(item.id, { ...item, children: [] });
  }

  const root = { id: 0, name: 'r', children: [] };
  for (const item of map.values()) {
    const parent = map.get(item.pid);
    if (parent) {
      parent.children.push(item);
    } else {
      root.children.push(item);
    }
  }

  return root.children[0];
};

const result = arr2tree(arr); //arr 为数组格式数据
console.log(JSON.stringify(result, null, 2));

// 输出结果示例
// const result = {
//   "id": 0,
//   "name": "r",
//   "children": [
//     {
//       "id": 1,
//       "name": "r.e1",
//       "pid": 0
//     },
//     {
//       "id": 2,
//       "name": "r.a1",
//       "pid": 0,
//       "children": [
//         {
//           "id": 4,
//           "name": "r.a1.aa1",
//           "pid": 2
//         }
//       ]
//     },
//     {
//       "id": 9,
//       "name": "r.d1",
//       "pid": 0
//     },
//     {
//       "id": 3,
//       "name": "r.b1",
//       "pid": 0
//     },
//     {
//       "id": 5,
//       "name": "r.c1",
//       "pid": 0,
//       "children": [
//         {
//           "id": 6,
//           "name": "r.c1.cc1",
//           "pid": 5,
//           "children": [
//             {
//               "id": 7,
//               "name": "r.c1.cc1.ccc1",
//               "pid": 6
//             },
//             {
//               "id": 8,
//               "name": "r.c1.cc1.ccc2",
//               "pid": 6
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }
