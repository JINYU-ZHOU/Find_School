//wx.request工具类

/*
  参数为三个参数：_this传参为this指针   ，   url为接口地址   ，   list为page页面data中定义的集合的名称，形式为字符串

  函数为getListsByGet         getListsByPost   

  引入方法：
        import {
          $getListsByGet
        } from '../../utils/ajax.js';
        
        存在问题接口中的集合名称需要在此工具文档中修改
  
*/

import {
  BasicUrl
} from '../config/index.js';

function $res(url, method , data) {

  wx.showLoading({
    title: '加载中...',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: url.startsWith("http") ? url : BasicUrl + url,
      method,
      data,
      success: (res => {
        resolve(res.data)
      }),
      fail(e) {
        reject(e)
      },
      complete(){
        wx.hideLoading()
      }
    })
  })
}

export function $get(url , data) {
  return $res(url, 'Get' , data)
  // pro.then(res => {
  //   console.log(res)
  // })
}


export function $post(url , data) {
  return $request(url, 'POST' , data)
  let pro = $request(url, 'POST')
  pro.then(res => {
    console.log(res)
  })
}



