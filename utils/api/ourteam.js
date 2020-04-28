import Vue from 'vue'
const host = 'http://192.168.0.13'
const api = '/api_v2'

export const getHotStaff = ({ token }) => {
  return Vue.prototype.$nuxt.$axios.get(`${host}${api}/?method=get_hot_staff`, {
    params: { token }
  })
}

export const getMemberInfo = ({ token }) => {
  return Vue.prototype.$nuxt.$axios.get(`${host}${api}/?method=get_member_info`, {
    params: { token }
  })
}

export const getMemberGroup = ({ token }) => {
  return Vue.prototype.$nuxt.$axios.get(`${host}${api}/?method=get_member_group`, {
    params: { token }
  })
}
