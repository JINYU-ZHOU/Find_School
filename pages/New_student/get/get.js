// pages/mysclool/myscool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    profession:"学生公寓D座门口"

  },
  showModal(e) {
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ['http://m.qpic.cn/psc?/V13PT9hC0AsL2N/u0qUMsilGdkhXscKj.lHLgkykNhwb4q8k4bbKo*Z7sMfNGfelm1CQJ3Vt*Qozw2AfUa*pm3hao6QP.g4Oh7W4w!!/b&bo=bAPzBAAAAAADB7o!&rf=viewer_4']// 需要预览的图片http链接列表
    })
    
  },
  hideModal(e) {
    this.setData({
      modalName: null
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