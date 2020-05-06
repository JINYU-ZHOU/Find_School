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
   
    this.selectUserInfo();

    this.selectName()

    app.globalData.picker_xueyuan = this.data.my_xueyuan
  },

  async selectName(){
    let res = await $post('https://spergol.com/seluser',{}, {
      'content-Type': 'application/x-www-form-urlencoded',
      'Cookie': wx.getStorageSync('cookieKey')
    })
    this.setData({
      name:res.user.username
    })
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

  selectXue(){
    wx.navigateTo({
      url: '/pages/PEPLO/MYSET/xueyue-set/xueyue-set?xueyuan={{my_xueyuan}}',
    })
  },
  
  onReady: function () {

  },


})