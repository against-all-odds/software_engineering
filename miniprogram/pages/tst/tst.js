// pages/tst/tst.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word:"硬币；金属货币",
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    test1:'',
    test2:''
  },
  goindex(e){
    
    wx.redirectTo({
      url: '../tst/tst2',
    })
    
  },
  //判断并获取用户选择
  listenerRadioGroup: function (e) {
    var app = getApp()     // 取得全局App
    console.log('点击的是第' + e.detail.value + '个radio')
    this.setData({
      test1: e.detail.value == '5' ? 1 : 0
    })
    app.overallWordList[1].testresult = this.data.test1
    // this.setData({
    //   test2: app.overallWordList[1].testresult
    // })    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})