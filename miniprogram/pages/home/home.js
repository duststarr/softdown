const app = getApp()

Page({
  data: {
    PageCur: 'default',
    isAdmin: true,
    isClient: true
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  /**
   * 
   * 更新权限
   */
  userDetailUpdated: function (detail) {
    this.setData({
      isAdmin: detail.isAdmin,
      isClient: detail.isClient
    })
  },
  onLoad: function (options) {
    console.log('home onLoad', options)
    app.globalWatch('userDetail', this.userDetailUpdated)
  },
 
})