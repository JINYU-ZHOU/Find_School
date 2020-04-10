// pages/mysclool/myscool.js
Page({
  data: {
    palce: "",
    palce_list: [
      {
        name: "图书馆",
      },
      {
        name: "大不同超市",
      }, 
      {
        name: "财务处",
      },
      {
        name: "校园卡管理中心",
      },
      {
        name: "计算机学院",
      },
      {
        name: "勤学楼",
      },

    ],
  },

  /**
   * 页面的初始数据
   */

  palce_set: function (res) {

    console.log("====对象======", res)

    this.setData({

      palce: res.detail.value

    })

    console.log("====palce==", this.data.palce)

  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    

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