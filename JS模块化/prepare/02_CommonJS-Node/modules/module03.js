/*补充*/
/**
 * 使用exports.xxx = value向外暴露一个对象
 */
"use strict"
exports.foo = function () {
  console.log('module3 foo()')
}

exports.bar = function () {
  console.log('module3 bar()')
}

exports.arr = [2, 4, 5, 2, 3, 5, 1, 11]
