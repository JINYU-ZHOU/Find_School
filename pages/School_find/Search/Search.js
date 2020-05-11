import {
  $post,
  $get
} from "../../../utils/requestbasic";
let key = 'AHJBZ-NMCYX-UO44G-ZC66D-YMS5V-C7FKB'; //使用在腾讯位置服务申请的key
let referer = 'test'; //调用插件的app的名称
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    is: true,
    searchName: "",
    text: [],
    textvalue: []
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this),
    })
  },

  input(e) {
    console.log(e.detail.value)
    this.setData({
      searchName: e.detail.value
    })
  },

  async selectMap() {
    let res = await $get(
      "/selWords", {
        name: this.data.searchName
      }, {
        'content-Type': 'application/x-www-form-urlencoded',
        'Cookie': wx.getStorageSync('cookieKey')
      })

    
    

    let text = res.selwords.map(r => r.words)
    console.log("集合的值是=====", text)
    this.setData({
      text
    })
    this.data.textvalue = []
    this.data.text.forEach(t => {
      this.data.textvalue.push({
        text: t
      })
    })
    console.log("打印text的值为什么----------", this.data.textvalue)
  },

  search: function (value) {
    this.setData({
      is: false
    })

    this.selectMap()

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data.textvalue)
      }, 350)
    })
  },

  clear(){
    this.setData({
      textvalue:[]
    })
  },

  async addhot(e) {
    let res = await $get(
      "/hot", {
        name: e.detail.item.text,
      }, {
        'content-Type': 'application/x-www-form-urlencoded',
        'Cookie': wx.getStorageSync('cookieKey')
      })
    },
  selectResult: async function (e) {
    console.log('select result', e.detail.item.text)
    this.addhot(e)
    let res = await $post(
      '/selMaps', {
        words: e.detail.item.text
      }, {
        'content-Type': 'application/x-www-form-urlencoded',
        'Cookie': wx.getStorageSync('cookieKey')
      }
    )
    console.log(res)

    let plugin = requirePlugin('routePlan');
    let endPoint = JSON.stringify({ //终点
      'name': res.location.name,
      'latitude': res.location.latitude,
      'longitude': res.location.longitude
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&navigation=' + 1
    });
  }
});