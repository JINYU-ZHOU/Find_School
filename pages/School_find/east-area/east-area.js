import {
  $post
} from "../../../utils/requestbasic";

let key = 'AHJBZ-NMCYX-UO44G-ZC66D-YMS5V-C7FKB'; //使用在腾讯位置服务申请的key
let referer = 'test'; //调用插件的app的名称

const app = getApp();
Page({
  data: {
    location: [],
    id:-1,
    lng:[],
    lat:[]
  },

  async selMap() {
    let res = $post(
      '/selMapsByCla', {
        cla: 1
      }, {
        'content-Type': 'application/x-www-form-urlencoded',
        'Cookie': wx.getStorageSync('cookieKey')
      },
    )

    res.then(res => {
      let location = res.location.map(r => r.name)
      // console.log("res转换为的值" , res.location[1].name)
      console.log("res转换为的值", location)

      let lng = res.location.map(r => r.longitude)
      console.log("lng:",lng)

      let lat = res.location.map(r => r.latitude)
      console.log("lat:",lat)

      this.setData({
        location,
        lng,
        lat
      })
    })
    console.log("----res的值是-----", res)
  },

  onLoad: function (options) {
    this.setData({
      name: options.locationName,
      latitude: options.lat,
      longitude: options.lng
    })
    this.selMap()
  },

  toMap(e){
    this.setData({
      id:e.currentTarget.dataset.id
    })
    console.log(this.data.location[this.data.id])
    // wx.navigateTo({
    //   url: './new-area?locationName='+this.data.location[this.data.id]+'&lng='+this.data.lng[this.data.id]+'&lat='+this.data.lat[this.data.id]
    // })
    let plugin = requirePlugin('routePlan');
    let endPoint = JSON.stringify({ //终点
      'name': this.data.location[this.data.id],
      'latitude': this.data.lat[this.data.id],
      'longitude': this.data.lng[this.data.id]
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&navigation=' + 1
    });

  },

  onReady: function () {

  },

});