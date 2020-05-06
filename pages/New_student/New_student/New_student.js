// pages/mysclool/myscool.js
import {
  $post
} from '../../../utils/requestbasic.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes: "",
    palce_list: [{
        name: "在新的学校，你的优秀需要重新证明",
      },
      {
        name: "养成注意看学校和寝室通告板的习惯",
      },
      {
        name: "多给家里亲人打电话",
      },
      {
        name: "尊重自己，尊重老师，尊重同学",
      },
      {
        name: "适度消费，不盲目攀比",
      },
      {
        name: "最理想的爱情是和另一半一同走向优秀",
      },
      {
        name: "革命靠自觉，大学靠自学",
      },
    ],

  },

  select_xueyuan() {
    console.log("xueyuan")
    wx.navigateTo({
      url: '../../PEPLO/my_information/my_information',
      complete: (res) => {},
      fail: (res) => {},
      success: (result) => {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("全局变量的首页的值为：", app.globalData.picker_xueyuan)
    console.log(this.data.classes)
  },

  async selectXuYuan() {
    let res = await $post ('https://spergol.com/seluser', {}, {
      'content-Type': 'application/x-www-form-urlencoded',
      'Cookie': wx.getStorageSync('cookieKey')
    })
   console.log("数据",res)
    if (res.user.classes !== "" && res.user.classes !== null) {
      this.setData({
        classes: res.user.classes
      })
    } else {
      this.setData({
        classes: "点我添加学院信息"
      })
    }
    console.log("asssd", res)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.selectXuYuan()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})