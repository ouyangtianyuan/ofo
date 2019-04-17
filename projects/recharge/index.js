// projects/recharge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },

  //监听input值
  inpFn:function(e){
    var val = parseInt(e.detail.value)
    this.setData({
      num:val
    })
    
  },
  
  //提交充值
  btnFn:function(){
      wx.showLoading({
        title: '正在充值中',
      })
      wx.request({
        url: 'https://www.easy-mock.com/mock/5bd6d6c7633ade17d3e91a6f/demo/success',
        success:(res) => {
          wx.hideLoading()
          if (this.data.num <= 0 || isNaN(this.data.num)){
            wx.showModal({
              title: '提示',
              content: '充值失败',
            })
          }
          else{
            wx.getStorage({
              key: 'money',
              success: (res) => {
                 wx.setStorage({
                   key: 'money',
                   data: res.data+this.data.num,
                 })
              },
              fail:() => {
                wx.setStorage({
                  key: 'money',
                  data: this.data.num,
                })
              }
            })
            
            wx.showToast({
              title: '充值成功',
              duration: 2000,
              success:(res) => {
                wx.redirectTo({
                  url: '../wallet/index',
                })
              }
            })
            
          }
        }
      })
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