// projects/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    h: 0,
    m: 0,
    s: 0,
    text:'正在计费',
    clickbtn : false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let s = 0;
    let m = 0;
    let h = 0;
    this.setData({
      h: ret(h),
      m: ret(m),
      s: ret(s)
    })
    this.setData({
      number: options.number
    })
    this.timer=setInterval(() => {
      s++;
      if(s>59){
        s=0;
        m++;
        if(m>59){
          m = 0;
          h++
        }
      }
      this.setData({
        h: ret(h),
        m: ret(m),
        s: ret(s)
      })
    }, 1000)
    function ret(n){
      if(n<10){
        n ='0'+n
      }
      return n
    }
  },
  end:function(){
    clearInterval(this.timer)
    this.timer = ''
    this.setData({
      text:'本次骑行时间',
      clickbtn:true
    })
  },
  moveToMap:function(){
    if(this.timer==''){
      wx.redirectTo({
        url: '../index/index',
      }) //重定向地图，当前页销毁
    }else{
      wx.navigateTo({
        url: '../index/index?timer='+this.timer,
      }) //返回地图，当前页还在后台运行
    }
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