// projects/repair/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      value: "私锁私用",
      checked: false,
      color: '#b2dd18'
    }, {
      value: "车牌缺损",
      checked: false,
      color: '#b2dd18'
    }, {
      value: "轮胎坏了",
      checked: false,
      color: '#b2dd18'
    }, {
      value: "车锁坏了",
      checked: false,
      color: '#b2dd18'
    }, {
      value: "链条坏了",
      checked: false,
      color: '#b2dd18'
    }, {
      value: "车头坏了",
      checked: false,
      color: '#b2dd18'
    }, {
      value: "刹车坏了",
      checked: false,
      color: '#b2dd18'
    }, {
      value: "其他故障",
      checked: false,
      color: '#b2dd18'
    }, ],
    picUrl: [],
    actionTit: '拍摄/相册',
    checkboxValue: [

    ],
    btnbg: '#c5c5c5',
    btncolor: '#fff',
    btnkey: true,
    inpValue: {
      number: 0,
      desc: ''
    }
  },

  //选择故障类型
  changes: function(e) {
    var arrs = e.detail.value;
    if (arrs.length > 0) {
      this.setData({
        btnbg: '#fee823',
        btncolor: '#2b2b2b',
        btnkey: false,
        checkboxValue: arrs
      })
    } else {
      this.setData({
        btncolor: '#fff',
        btnbg: '#c5c5c5',
        btnkey: true,
        checkboxValue: []
      })
    }
  },

  //添加拍摄图片
  clickPhoto: function() {
    wx.chooseImage({
      success: (res) => {
        var imgUrl = this.data.picUrl;
        var temps = res.tempFilePaths;
        for (let prop of temps) {
          imgUrl.push(prop)
          this.setData({
            picUrl: imgUrl,
            actionTit: '+'
          })
        }
      },
    })
  },

  //点击删除照片
  delPic: function(e) {
    let index = e.target.dataset.index;
    let imgUrl = this.data.picUrl;
    imgUrl.splice(index, 1)
    if (imgUrl.length == 0) {
      this.setData({
        actionTit: '拍摄/相册'
      })
    }
    this.setData({
      picUrl: imgUrl
    })
  },

  //监听车牌号val值
  changeNumber: function(e) {
    this.setData({
      inpValue: {
        number: e.detail.value,
        desc: this.data.inpValue.desc
      }
    })
  },

  //监听车备注val值
  changeDesc: function(e) {
    this.setData({
      inpValue: {
        number: this.data.inpValue.number,
        desc: e.detail.value
      }
    })
  },

  //提交数据
  subFn: function() {
    wx.showLoading({
      title: '正在提交' //加载页面提示
    })
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bd6d6c7633ade17d3e91a6f/demo/success',
      success: (res) => {
        wx.showToast({
          title: '提交成功',
          icon:'success'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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