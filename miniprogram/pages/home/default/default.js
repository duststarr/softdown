// pages/home/default/default.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSoft: function(e){
      const pos = e.currentTarget.dataset.pos;
      wx.showModal({
        title:'支付',
        content:'支付10元'
      })
    }
  }
})
