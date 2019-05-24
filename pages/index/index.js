//获取应用实例
const app = getApp();


Page({
  data: {
    isActive: false,
    currentSelect: ''
  },
  onLoad: function (options) {

  },
  handleClick: function () {
    this.setData({
      isActive: true
    });
  },

  handleSelect: function (event) {
    console.log('data:',event.detail);
    this.setData({
      isActive: false,
      currentSelect: event.detail.currentData.name,
    });
  }
})
