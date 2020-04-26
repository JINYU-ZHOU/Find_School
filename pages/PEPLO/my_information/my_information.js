const app = getApp();
Page({
  data: {
    my_xueyuan: app.globalData.picker_xueyuan,
    picker: ['学生', '老师'],
    picker1: ['计算机与信息工程学院', '动物科学学院', '兽医学院', '农学院', '林学院', '草原与资源环境学院', '沙漠治理学院', '机电工程学院', '水利与土木建筑学院', '材料科学与艺术学院', '积极管理学院', '食品科学与工程学院', '生命科学学院', '人文社会科学学院', '外国语学院',],
      userInfo: {},
  },
 

  onLoad: function () {
    console.log(app.globalData);
    console.log(app.globalData.picker_xueyuan);
    
  },
  onShow: function () {
    this.setData({
      my_xueyuan: app.globalData.picker_xueyuan
    })
  },
  onLoad: function () {
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
  },

  
})