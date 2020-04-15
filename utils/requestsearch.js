import {
  BasicUrl
} from '../config/index.js';

function $res(url, method , data) {
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
      }
    })
  })
}

export function $getsearch(url , data) {
  return $res(url, 'Get' , data)
}


export function $postsearch(url , data) {
  return $request(url, 'POST' , data)
}