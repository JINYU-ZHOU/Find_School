import {
  $post
} from '../../../../utils/requestbasic.js'
var app = getApp();
Page({
  data: {
    name:""
  },

  onLoad: function () {},
 
  onShow: function () {
   
  },

  inputName(e){
    console.log(e.detail)
    this.setData({
      name:e.detail.value
    })
  },

  setname(){
    this.selectName()
    wx.navigateTo({
      url: '../../my_information/my_information',
    })
  },

  async selectName(){
    let res = await $post('https://spergol.com/changeUser', {
      username: this.data.name
    }, {
      'content-Type': 'application/x-www-form-urlencoded',
      'Cookie': wx.getStorageSync('cookieKey')
    })
    console.log("修改信息 的接口的返回值：-----", res)
  }


})