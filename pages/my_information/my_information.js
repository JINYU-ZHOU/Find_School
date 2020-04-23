
import {
  $get
} from "../../utils/requestbasic.js"

const app = getApp();
Page({
  data: {
    picker: ['学生', '老师'],
    picker1: [],
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index_shenfen: e.detail.value
    })
  },
  PickerChange1(e) {
    console.log(e);
    this.setData({
      index_xueyuan: e.detail.value
    })
  },
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
})