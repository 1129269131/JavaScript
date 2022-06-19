/*补充*/
/*03. 尚硅谷_JS模块化规范_commonjs基于服务器端(node)应用*/
/**
  1. 定义暴露模块:
    module.exports = value;
    exports.xxx = value;
  2. 引入模块:
    var module = require(模块名或模块路径);
 */
"use strict"
//引用模块
let module3 = require('./modules/module03')

let uniq = require('uniq')

let result = uniq(module3.arr)
console.log(result)
