var app = getApp();
import {
  $get
} from '../../../../utils/requestbasic.js';

Page({
  data: {
    my_xueyuan: app.globalData.picker_xueyuan,
    picker: ['学生', '老师'],
    index_xueyuan: 0,
    picker1: [],
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index_xueyuan: e.detail.value
    })
  },

  clickFun: function () {
    wx.navigateTo({
      url: '../../../PEPLO/my_information/my_information?xueyuan=' + this.data.picker1[this.data.index_xueyuan]
    })
  },

  onLoad: function (options) {
    this.GetXueYuan()
    this.setData({
      [this.data.picker1.index_xueyuan]:this.data.my_xueyuan
    })
  },

  async GetXueYuan() {
    let {
      classes
    } = await $get("https://spergol.com/selclasses")
    let name = classes.map(r => r.name)
    console.log(name)
    this.setData({
      picker1: name
    })
  },
})