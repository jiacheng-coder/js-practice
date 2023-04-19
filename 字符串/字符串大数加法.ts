/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算两个数之和
 * @param s string字符串 表示第一个整数
 * @param t string字符串 表示第二个整数
 * @return string字符串
 */
export function solve(s: string, t: string): string {
  // write code here
  // let n1 = BigInt(s)
  // let n2 = BigInt(t)
  // return (n1+n2).toString()
  let carry = 0, res = "";
  let sArr = s.split("");
  let tArr = t.split("");
  while (sArr.length || tArr.length) {
    let num = Number(sArr.pop() || 0) + Number(tArr.pop() || 0) + carry;
    if (num > 9) {
      carry = 1;
      num = num % 10;
    } else {
      carry = 0;
    }
    res = num + res;
  }
  if (carry) {
    res = carry + res;
  }
  return res;
}
