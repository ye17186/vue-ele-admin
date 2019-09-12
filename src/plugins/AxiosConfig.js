import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL = process.env.VUE_APP_ZUUL_URL
axios.defaults.timeout = 10000

// request请求器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
axios.interceptors.response.use(res => {
  return res.data
}, error => {
  console.error(error)
  return {
    code: 999,
    msg: '网络异常'
  }
})

const postHandle = function (resolve, reject, res) {
  if (res.hasOwnProperty('code') && res.code === 0) {
    resolve(res.data)
  } else {
    reject(res)
  }
}

const get = function (url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: url,
      params: params,
      paramsSerializer: function (params) {
        return Qs.stringify(params, {
          arrayFormat: 'repeat',
          skipNulls: true
        })
      }
    }).then(res => {
      postHandle(resolve, reject, res)
    })
  })
}

const post = function (url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: url,
      data: params
    }).then(res => {
      postHandle(resolve, reject, res)
    })
  })
}

export default {
  get, post
}
