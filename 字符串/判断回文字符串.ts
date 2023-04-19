// 定义一个函数，接受一个字符串参数
function isPalindrome(str: string) {
  // 将字符串转换为小写并去除空格
  str = str.toLowerCase().replace(/\s/g, "");
  // 将字符串分割为数组，反转数组，再连接为新的字符串
  let reversedStr = str.split("").reverse().join("");
  // 判断原字符串和反转后的字符串是否相等，返回布尔值
  return str === reversedStr;
}

// 测试函数
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
