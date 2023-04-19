// null本质是0,也可以理解为空指针，undefined本质是个特殊对象，是js的特有的机制
// null需要自己主动赋值，undefined是js运行机制自动返回的基本数据类型

// 只是个历史遗留问题而已，不足以说明null的本质
console.log(typeof null === 'object'); // true

// null和数字进行加减，大小比较的时候相当于0
console.log(null * 34); // 0
console.log(null + 34); // 34
console.log(null < 34); // 0<34 true

// ==比较的时候，除了undefined之外，和null比较返回false
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(null == ''); // false

















// parseInt和parseFloat可以接收字符串作为参数，转换时会自动忽略第一个非数字之后的所有内容
// console.log(!parseInt('0.abc')); // true -> reason: !0隐式转换为true
// console.log(parseFloat('a.123')); // 1.2

// 其他
// console.log(isNaN('abc')); // NaN===NaN本身就是个伪命题，所以设计了isNaN来判定变量是否不是数字，所有不是数字的变量都会返回true
// console.log(JSON.parse('true') === true); // true
