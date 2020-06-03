//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  globalData: {
    userDetail: null
  },
  /**
   * 手动触发更新
   * @param {*} name 
   */
  globalEmit: function (name) {
    if (this.globalData._watches && this.globalData._watches[name]) {
      this.globalData._watches[name].forEach(func => {
        func(this.globalData[name])
      })
    }
  },
  /**
   * 订阅全局变量的变更
   * @param {*} name 
   * @param {*} callback 
   * @param {*} callAtonce 如果有值是否立即回调
   */
  globalWatch: function (name, callback, callAtonce = true) {
    if (!this.globalData._watches)
      this.globalData._watches = {}
    if (!this.globalData._watches[name])
      this.globalData._watches[name] = []
    this.globalData._watches[name].push(callback)
    if (callAtonce && this.globalData[name])
      callback(this.globalData[name])
  },
})