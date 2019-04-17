// projects/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      userimg: '',
      username: '未登录'
    },
    actionText: '登录',
    btnclass: 'on'
  },

  //登录
  login: function() {
    if (this.data.actionText === '登录') {
      wx.login({
        success: () => {
          wx.showToast({
            title: '登陆成功',
            icon: 'success'
          })
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                userInfo: {
                  userimg: res.userInfo.avatarUrl,
                  username: res.userInfo.nickName
                },
                actionText: '退出登录',
                btnclass: 'off'
              })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    userimg: res.userInfo.avatarUrl,
                    username: res.userInfo.nickName
                  },
                  actionText: '退出登录',
                  btnclass: 'off'
                }
              })
            }
          })
        }
      })
    } else {
      wx.removeStorageSync('userInfo')
      wx.showToast({
        title: '退出成功',
        icon: 'success'
      }) 
      this.setData({
        userInfo: {
          userimg: '',
          username: '未登录'
        },
        actionText: '登录',
        btnclass: 'on'
      })
    }
  },

  toWall:function(){
    wx.navigateTo({
      url: '../wallet/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      wx.getStorage({
        key: 'userInfo',
        success: (res)=> {
            this.setData({
              userInfo: {
                userimg: res.data.userInfo.userimg,
                username: res.data.userInfo.username
              },
              actionText: '退出登录',
              btnclass: 'off'
            })
        },
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})