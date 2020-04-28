import Vue from 'vue'
const host = 'http://192.168.0.13'
// const host = ''
const api = '/api_v2'
export const login = ({ member_email, member_password, member_guid, member_agent }) => {
  return Vue.prototype.$nuxt.$axios.post(`${host}${api}/?method=member_login`, {
    member_email,
    member_password,
    member_guid,
    member_agent
  })
}

export const regist = ({ member_first_name, member_last_name, member_email, member_pohone, member_password }) => {
  return Vue.prototype.$nuxt.$axios.post(`${host}${api}/?method=member_reg`, {
    member_first_name,
    member_last_name,
    member_email,
    member_pohone,
    member_password
  })
}

export const updatePassword = ({ token, member_password }) => {
  return Vue.prototype.$nuxt.$axios.post(`${host}${api}/?method=update_password`, {
    token,
    member_password
  })
}

export const getInfo = ({ token }) => {
  return Vue.prototype.$nuxt.$axios.get(`${host}${api}/?method=get_member_info`, {
    params: { token }
  })
}

export const logout = ({ token }) => {
  console.log(token)
  return Vue.prototype.$nuxt.$axios.get(`${host}${api}/?method=member_logout`, {
    params: { token }
  })
}
