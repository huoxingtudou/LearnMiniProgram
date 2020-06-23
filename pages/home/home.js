// page/home/home.js
Page({
  data:{
    name:'yph',
    age:18,
    students:[
      {id:1,name:'hhh',age:20},
      {id:2,name:'yph',age:20},
    ],
    counter:0
  },
  handleBtnClick(){
    // 1.错误做法，界面不会刷新
    // this.data.counter--;
    // 2.this.setData()
    this.setData({
      counter:this.data.counter-1
    })
  },
  add(){
    this.setData({
      counter:this.data.counter+1
    })
  }
})
// 编程范式
// 1.命令式编程：原生DOM操作
// 2.声明式编程：Vue