//获取应用实例
const app = getApp();

const { modelList } = require('./school.js')

Page({
  data: {
    modelList:null,
    isActive: false,
    currentSelect: ''
  },
  onLoad: function (options) {
    this.setData({modelList:modelList})
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
