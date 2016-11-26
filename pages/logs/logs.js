//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  // 生命周期函数
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  
  // 其他的函数
  onReady: function() {},
  onReady: function() {},
})


var appInstance = getApp()

var arrPage = getCurrentPages();
