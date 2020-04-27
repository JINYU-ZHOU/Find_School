//app.js
App({

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var code
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        code = res.code
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
                //用户名storage
                wx.setStorageSync('username', res.userInfo.nickName)
              }
              //用户信息后台登录注册并设置cookie
              wx.request({
                url: 'https://spergol.com/login',
                method: 'POST',
                header: {
                  'content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
                data: {
                  code: code,
                  username: res.userInfo.nickName,
                  //这里设置一下登录弹窗，选择所在专业
                  classes: '计算机与信息工程学院',
                  //身份默认学生
                  identify: '1',
                  //授权码，仅在老师注册时生效
                  password: '123456'

                },
                success: (a) => {
                  console.log(a.data)
                  if (a && a.header && a.header['Set-Cookie']) {
                    wx.setStorageSync('cookieKey', a.header['Set-Cookie']);//保存Cookie到Storage

                  }
                }
              })
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    picker_shenfen: '学生',
    picker_xueyuan: '计算机信息与工程学院',
  }
})