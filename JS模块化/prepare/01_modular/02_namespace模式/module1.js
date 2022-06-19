/**
 * namespace模式: 简单对象封装
 * 作用: 减少了全局变量
 * 问题: 不安全(数据不是私有的, 外部可以直接修改)
 */
let myModule = {
  data: 'atguigu.com',
  foo() {
    console.log(`foo() ${this.data}`)//补充：缺少this会报错，原因是data为对象myModule的数据，而data会从全局空间找
  },
  bar() {
    console.log(`bar() ${this.data}`)
  }
}

