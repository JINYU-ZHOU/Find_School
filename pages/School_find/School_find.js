// pages/mysclool/myscool.js
let key = 'AHJBZ-NMCYX-UO44G-ZC66D-YMS5V-C7FKB'; //使用在腾讯位置服务申请的key
let referer = 'test'; //调用插件的app的名称
import {
  $get,
  $post
} from '../../utils/requestbasic.js';

import {
  $getsearch
} from '../../utils/requestsearch.js';
import {
  $parseVars2Str
} from '../../utils/util.js';
import {
  $attr
} from '../../utils/util.js';

Page({
  data: {
    palce: "",
    palce_list_serrch: [],
    checked: false,
    palce_list: [],
    name: ""
  },

  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  async getWord() {
    let res = await $get("/selhot");
    console.log("============", res)
    this.setData({
      palce_list: res.selhot
    })

    console.log(res.selhot)


  },

  async selectMap(e) {
    //跳转地图页面
    console.log(e.currentTarget.dataset.id)
    let res = await $post(
      '/selMaps', {
        words: this.data.palce_list[e.currentTarget.dataset.id].words
      }, {
        'content-Type': 'application/x-www-form-urlencoded',
        'Cookie': wx.getStorageSync('cookieKey')
      }
    )
    console.log(res)

    this.addhot(e)
    console.log(res.location)
    let plugin = requirePlugin('routePlan');
    let endPoint = JSON.stringify({ //终点
      'name': res.location.name,
      'latitude': res.location.latitude,
      'longitude': res.location.longitude
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&navigation=' + 1
    });
  },

  async addhot(e) {
    console.log("=======----======", this.data.name)
    let res = await $get(
      "/hot", {
        name: this.data.palce_list[e.currentTarget.dataset.id].words,
      }, {
        'content-Type': 'application/x-www-form-urlencoded',
        'Cookie': wx.getStorageSync('cookieKey')
      })
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
    this.getWord();
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