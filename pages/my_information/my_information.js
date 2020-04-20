const app = getApp();
Page({
  data: {
    picker: ['学生', '老师'],
    picker1: ['计算机与信息工程学院', '动物科学学院', '兽医学院', '农学院', '林学院', '草原与资源环境学院', '沙漠治理学院', '机电工程学院', '水利与土木建筑学院', '材料科学与艺术学院', '积极管理学院', '食品科学与工程学院', '生命科学学院', '人文社会科学学院', '外国语学院',            ],
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
})