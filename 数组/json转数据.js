let tree = [
  {
    "id": 1,
    "name": "1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "name": "2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "name": "3",
        "pid": 2,
        "children": [
          {
            "id": 4,
            "name": "4",
            "pid": 3,
            "children": []
          }
        ]
      }
    ]
  }
]
const treeToArray = (tree) => {
  return tree.reduce((pre, cur) => {
    const { children, ...left } = cur
    return pre.concat(left, children && children.length ? treeToArray(children) : [])
  }, [])
}
let res = treeToArray(tree)
console.log(res);
