import {
  $post
} from "../../../../utils/requestbasic";

var app = getApp();
Page({
  data: {
    name:""
  },

  onLoad: function () {},


  input(e) {
    this.setData({
      name: e.detail.value
    })
  },

  updateName() {
    this.updateNamehou()
    wx.navigateTo({
      url: '../../my_information/my_information',
    })
  },

  async updateNamehou() {
    let name = this.data.name
    let res = await $post('https://spergol.com/changeUser', {
      username: name
    }, {
      'content-Type': 'application/x-www-form-urlencoded',
      'Cookie': wx.getStorageSync('cookieKey')
    })
    console.log("修改昵称信息 的接口的返回值：-----", res)
  }


})