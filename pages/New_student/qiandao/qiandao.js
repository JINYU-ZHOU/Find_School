// pages/mysclool/myscool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    profession: "内蒙古自治区呼和浩特市内蒙古农业大学",

  },
  onclick:function(e){
    wx.showModal({
      title: '签到成功',
      content: '请及时领取物品',
      showCancel:false,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } 
      }
    })
    
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