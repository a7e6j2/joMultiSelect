/*
 * 两层全屏选择应用
 *
 * 作者: Joey Wong 黄俊研
 */
const { modelList} = require('./school.js')

Component({
  properties: {
    openStatus: {
      type: Boolean,
      value: false,
      
      observer: function (newVal) {
        this.setData({
          isActive: newVal,
          isRootSelected: false,
          pickName:'',
         
        });
      }
    }
  },
  data: {
   
    isActive: false,
    isRootSelected: false,
    modelList: [],
    secondList: [],
    rootList:[],
    pickName:'',

  
  },

  methods: {

    selectRoot: function (event) {
      let proId = event.target.dataset.id;
     
      this.data.modelList.forEach((value) => {
        if (value.id === proId) {

          this.setData({
            rootList: value,
            secondList: value.children,
            isRootSelected: true,
            pickName: value.name,          
          });
        }
      });
    },
   

    // 处理返回
    backToRoot: function () {
      this.setData({
        rootList: [],
        secondList: [],
        isRootSelected: false
      });
    },

    // 处理点击二级事件
    selectSecond: function (event) {
      let { index } = event.target.dataset;

      let returnData = { rootData: this.data.rootList, currentData: this.data.secondList[index]}

      this.triggerEvent('handleSelect', returnData);
    }
  },
  ready: function () {
    this.setData({
      modelList: modelList
    });
  }
})