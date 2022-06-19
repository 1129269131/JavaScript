(function () {
  //配置
  require.config({
    //基本路径 出发点在根目录下
    baseUrl: 'js/',
    //映射: 模块标识名: 路径
    paths: {//配置路径
      //自定义模块
      'alerter': 'modules/alerter',//./表示当前目录，也就是baseUrl所在的目录
      'dataService': 'modules/dataService',

      //库模块
      'jquery': 'libs/jquery-1.10.1',//jquery必须是小写，不能是jQuery,原因：查看jquery-1.10.1.js的9802~9804行  说明：第三方库jQuery支持amd
      'angular': 'libs/angular'
      
    },

    //配置不兼容AMD的模块
    shim: {
      angular: {//此处angular对应14行的'angular'
        exports: 'angular'//此处用于暴露14angular库的对象
      }

    }
  })

  //引入模块使用
  require(['alerter', 'angular'], function (alerter, angular) {//或者requirejs
    alerter.showMsg()
    console.log(angular);//undefined 说明：没有引入成功angular,angular不支持amd,需要19行进行配置
  })
})()