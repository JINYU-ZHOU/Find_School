import {
  $post
} from '../../../../utils/requestbasic.js'
import Dialog from '../../../../colorui/components/vant/dialog/dialog';
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
    this.selectXueYuan()
    wx.navigateTo({
      url: '../../../PEPLO/my_information/my_information?xueyuan=' + this.data.picker1[this.data.index_xueyuan]
    })

  },

  onLoad: function (options) {
    this.GetXueYuan()
    this.setData({
      [this.data.picker1.index_xueyuan]: this.data.my_xueyuan
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

  async selectXueYuan() {
    console.log("xueyuan-set中学院信息：", this.data.picker1[this.data.index_xueyuan])
    let xueyuan = this.data.picker1[this.data.index_xueyuan]
    let res = await $post('https://spergol.com/changeUser', {
      classes: xueyuan
    }, {
      'content-Type': 'application/x-www-form-urlencoded',
      'Cookie': wx.getStorageSync('cookieKey')
    })
    console.log("修改信息 的接口的返回值：-----", res)
  }

})