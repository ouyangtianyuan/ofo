// projects/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0,
  },
  bindcontroltap:function(e){
    switch(e.controlId){
      case 1 : 
      this.moveToCenter()
      break;
      case 2 : 
      this.moveToRepair()
      break;
      case 3 :
      if(this.timer){
        //返回上一页面
          wx.navigateBack({
            delta:1
          })
      }else{
         //扫码获取密码
        wx.scanCode({
          success: () => {
            wx.showLoading({
              title: '正在获取密码' //加载页面提示
            })
            wx.request({
              url: 'https://www.easy-mock.com/mock/5bd6d6c7633ade17d3e91a6f/demo/getpassword',
              success: (res) => {
                wx.hideLoading()
                wx.redirectTo({
                  url: '../scanReault/index?password=' + res.data.data.password + '&number=' + res.data.data.number, //重定向，跳转页面
                  success: () => {
                    
                  },
                  fail:() => {
                    wx.showLoading({
                      title: '获取失败' //加载页面提示
                    })
                  }
                })
              }
            })
          },
          fail: () => {
            
          }
        })
      }
      break;
      case 5 :
      this.moveToUser()
      break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer = options.timer
    wx.getLocation({
      success: (res) => {
        this.setData({
          longitude:res.longitude,
          latitude: res.latitude
        })
      },
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls:[{
            id:1,
            iconPath:'/image/location.png',
            position:{
              width:70,
              height:70,
              left:20,
              top:res.windowHeight - 110
            },
            clickable:true
          },{
            id:2,
            iconPath:'/image/xiu.png',
            position:{
              width:70,
              height:70,
              left: res.windowWidth - 90,
              top:res.windowHeight - 110
            },
            clickable: true
          },{
              id: 3,
              iconPath: '/image/yong.png',
              position: {
                width: 140,
                height: 140,
                left: res.windowWidth/2 - 70,
                top: res.windowHeight - 145
              },
              clickable: true
            }, {
              id: 4,
              iconPath: '/image/ding.png',
              position: {
                width: 70,
                height: 56,
                left: res.windowWidth / 2 - 36,
                top: res.windowHeight/2 - 55
              },
              clickable: true
            }
            , {
              id: 5,
              iconPath: '/image/user.png',
              position: {
                width: 70,
                height: 70,
                left: res.windowWidth - 90,
                top: res.windowHeight - 220
              },
              clickable: true
            }
          ] //设置按钮位置，大小
        })
      },
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
    this.mapctx = wx.createMapContext('mymap')
    this.moveToCenter()
  },

  //回到地图原点
  moveToCenter: function () {
    this.mapctx.moveToLocation()
  },
  moveToRepair: function () {
    wx.navigateTo({
      url: '../repair/index',
    })
  },

  moveToUser:function(){
      wx.navigateTo({
        url: '../user/index',
      })
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