// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好，小程序',
    firstname:'颜',
    lastname:'萍慧',
    age:13,
    nowTime :new Date().toLocaleString(),
    isActive:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        nowTime :new Date().toLocaleString()
      })
    },1000)
  },
  handleButtonClick(){
    this.setData({
      isActive:!this.data.isActive
    })
  }
})