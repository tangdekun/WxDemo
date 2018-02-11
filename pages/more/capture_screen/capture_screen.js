var windowWidth;
var windowHeight;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageurl: "../../drawable/image1.png",
    buttonTop: 0,
    buttonLeft: 0,
    refreshImageUrl:"../../drawable/refresh.png"
  },
  reloadScreen: function () {
    var self = this;  
    console.log("reloadScreen");
    wx.showLoading({
      title: '图片加载中......',
    })
    var tempImageUrl ;
    if (this.data.imageurl === "../../drawable/image1.png"){
      tempImageUrl = "../../drawable/screen.jpg"
    }else{
      tempImageUrl = "../../drawable/image1.png"
    }
    setTimeout(function () {
      console.log("tempImageUrl:" + self.data.imageurl);
      self.setData({
        imageurl: tempImageUrl
      });
      wx.hideLoading();
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     windowWidth = wx.getSystemInfoSync().windowWidth;
     windowHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      buttonTop: windowHeight - 60,
      buttonLeft: windowWidth - 60
    });
    this.animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    })
  },
  buttonStart: function (e) {
    var startPoint = e.touches[0];
    this.setData({
      refreshImageUrl: "../../drawable/refresh_press.png"
    })
  },
  buttonMove: function (e) {
    var endPoint = e.touches[e.touches.length - 1];
    var tempTop = 0;
    var tempLeft = 0;
    console.log("endPoint.clientY:" + endPoint.clientY);
    console.log("endPoint.clientX:" + endPoint.clientX);
    if (endPoint.clientY < 30) {
      tempTop = 0
    } else if (endPoint.clientY > windowHeight-60) {
      tempTop = windowHeight - 60
    } else {
      tempTop = endPoint.clientY - 30
    }
    if (endPoint.clientX < 30) {
      tempLeft = 0
    } else if (endPoint.clientX > windowWidth - 60) {
      tempLeft = windowWidth - 60
    } else {
      tempLeft = endPoint.clientX - 30
    }

    console.log("buttonEnd tempTop:" + tempTop);
    this.setData({
      buttonTop: tempTop,
      buttonLeft: tempLeft
    })
  },
  buttonEnd: function (e) {
    var endPoint = e.changedTouches[0];
    console.log("buttonEnd endPoint.clientY:" + endPoint.clientY);
    console.log("buttonEnd endPoint.clientX:" + endPoint.clientX);
    var tempTop = 0;
    var tempLeft = 0;
    if (endPoint.clientY < 30) {
      tempTop = 0
    } else if (endPoint.clientY > windowHeight - 60) {
      tempTop = windowHeight - 60
    } else {
      tempTop = endPoint.clientY - 30
    }
    if (endPoint.clientX < 30) {
      tempLeft = 0
    } else if (endPoint.clientX > windowWidth - 60) {
      tempLeft = windowWidth - 60
    } else {
      tempLeft = endPoint.clientX - 30
    }
    console.log("buttonEnd tempTop:" + tempTop);
    this.setData({
      buttonTop: tempTop,
      buttonLeft: tempLeft,
      refreshImageUrl: "../../drawable/refresh.png"
    })
  }
  ,

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