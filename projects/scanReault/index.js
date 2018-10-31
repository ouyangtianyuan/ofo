// projects/scanReault/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    times: 9,
    password:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let times = 9;
      this.timer=setInterval(() => {
        this.setData({
          times: --times
        })
        if(times == 0){
          clearInterval(this.timer)
          wx.redirectTo({
            url: '../billing/index?number='+options.number,
          })
        }
      },1000)
      this.setData({
        password:options.password
      })
  },

  retbx:function(){
    clearInterval(this.timer)
    wx.redirectTo({
      url: '../index/index',
    })
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