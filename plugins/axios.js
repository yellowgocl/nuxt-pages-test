import { assign } from 'lodash'
// import { MessageBox, Message } from 'element-ui'
import { Message } from 'element-ui'

export default ({ $axios, store }) => {
  // 基本配置
  // $axios.defaults.baseURL = process.env.baseUrl
  // $axios.defaults.timeout = 10000
  // $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  $axios.onRequest((req) => {
    const { headers } = req
    if (store.getters.token) {
      const auth = {
        'X-Token': `${store.getters.token}`,
        'Authorization': `${store.getters.token}`
      }
      assign(headers, auth)
    }
    console.log('request:', req)
  })

  // 返回回调
  $axios.onResponse((res) => {
    const { data } = res
    const { status, statusText } = data
    Message({
      message: status === 200 ? statusText : 'Error',
      type: status === 200 ? 'success' : 'error',
      duration: 5 * 1000
    })
    console.log('response:', res)
  })

  // 错误回调
  $axios.onError((error) => {
    console.log('error', error)
  })
}
