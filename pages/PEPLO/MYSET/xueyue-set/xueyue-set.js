<<<<<<< HEAD:pages/PEPLO/MYSET/xueyue-set/xueyue-set.js
var app = getApp();
=======

import {
  $get
} from "../../utils/requestbasic.js"

const app = getApp();
>>>>>>> eb1a989ef03ffec883fa97bd184237060bea8a86:pages/my_information/my_information.js
Page({
  data: {
    my_xueyuan: app.globalData.picker_xueyuan,
    picker: ['学生', '老师'],
<<<<<<< HEAD:pages/PEPLO/MYSET/xueyue-set/xueyue-set.js
    picker1: ['计算机与信息工程学院', '动物科学学院', '兽医学院', '农学院', '林学院', '草原与资源环境学院', '沙漠治理学院', '机电工程学院', '水利与土木建筑学院', '材料科学与艺术学院', '积极管理学院', '食品科学与工程学院', '生命科学学院', '人文社会科学学院', '外国语学院',],
  },

  onLoad: function () {
=======
    picker1: [],
>>>>>>> eb1a989ef03ffec883fa97bd184237060bea8a86:pages/my_information/my_information.js
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index_xueyuan: app.globalData.picker.detail.value
    })
  },
  PickerChange1(e) {
    console.log(e);
    this.setData({
      index_xueyuan: e.detail.value
    })
  },
<<<<<<< HEAD:pages/PEPLO/MYSET/xueyue-set/xueyue-set.js
  clickFun: function () {
    app.globalData.picker_xueyuan = 'hhhh'
  },
  onShow: function () {
    this.setData({
      my_xueyuan: app.globalData.picker_xueyuan
    })
  }


=======
  onLoad: function (options) {
    let xueyaun = this.GetXueYuan()
    
  },

  async GetXueYuan(){
    let {
      classes
    } = await $get("https://spergol.com/selclasses")
    let name = classes.map(r => r.name)
    console.log(name)
    this.setData({
      picker1:name
    })
  }
>>>>>>> eb1a989ef03ffec883fa97bd184237060bea8a86:pages/my_information/my_information.js
})