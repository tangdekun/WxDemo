Page({
  data: {},
  gotoPage: function (e) {
    console.log(e);
    var page = e.currentTarget.dataset.page;
    var packages = e.currentTarget.dataset.packages;
    console.log("page:" + page);
    console.log("packages:" + packages);
    wx.navigateTo({
      url: '../' + packages + '/' + page + '/' + page
    });
  },
  onLoad: function () {

  }
})