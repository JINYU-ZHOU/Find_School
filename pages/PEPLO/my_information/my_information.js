import {
  $post
} from '../../../utils/requestbasic.js'
const app = getApp();
Page({
  data: {
    my_xueyuan: "",
    picker: ['学生', '老师'],
    suserInfo: {},
    name:""
  },
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

   this.selectUserInfo();

    app.globalData.picker_xueyuan = this.data.my_xueyuan
  },

  backHome() {
    wx.switchTab({
      url: '../../New_student/New_student/New_student',
      complete: (res) => {},
      fail: (res) => {},
      success: (res) => {
        
      },
    })
  },

  async selectUserInfo() {
    let res = await $post('https://spergol.com/seluser',{}, {
      'content-Type': 'application/x-www-form-urlencoded',
      'Cookie': wx.getStorageSync('cookieKey')
    })

    this.setData({
      name:res.user.username
    })

    if(res.user.classes !== ""){
      this.setData({
        my_xueyuan: res.user.classes
      })
    }else{
      this.setData({
        my_xueyuan: "点我设置学院信息"
      })
    }
    console.log("查询接口中的值" , res)

  },
  onShow(){
  }


})