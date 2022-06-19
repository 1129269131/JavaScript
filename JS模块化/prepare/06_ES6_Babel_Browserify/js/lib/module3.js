'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//默认暴露	可以暴露任意数据类型，暴露什么数据接收到的就是什么数据
exports.default = {
  name: 'Tom',
  setName: function setName(name) {
    this.name = name;
  }
};