import { login, regist, getInfo, logout } from '@/utils/api/user'
import { removeToken, setToken } from '@/utils/auth'
import ApiErroeNames from '@/utils/error/ApiErrorNames'
import { isNull } from 'lodash'
// import { resetRouter } from '@/router'

const state = () => ({
  token: '',
  isLogin: false,
  info: {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    summary: '',
    hash: '',
    avatar: ''
  }
})

const mutations = {
  SET_TOKEN: (state, token) => {
    setToken(token)
    state.isLogin = true
    state.token = token
  },
  SET_INFO: (state, { member_email, member_first_name, member_last_name, member_phone, summary, member_hash, member_image }) => {
    state.info['email'] = member_email
    state.info['firstName'] = member_first_name
    state.info['lastName'] = member_last_name
    state.info['phone'] = member_phone
    state.info['summary'] = summary
    state.info['hash'] = member_hash
    state.info['avatar'] = member_image
  },
  CLEAN_INFO: (state) => {
    removeToken()
    state.isLogin = false
    state.token = ''
    state.info['email'] = ''
    state.info['firstName'] = ''
    state.info['lastName'] = ''
    state.info['phone'] = ''
    state.info['summary'] = ''
    state.info['hash'] = ''
    state.info['avatar'] = ''
  }
}

const actions = {
  // user login
  login ({ commit, dispatch }, { email, password }) {
    const postData = {
      member_email: email.trim(),
      member_password: password
    }
    return new Promise((resolve, reject) => {
      login(postData)
        .then((response) => {
          const { data } = response['data']
          const { status } = response['data']
          if (status === 200) {
            const { token } = data
            commit('SET_TOKEN', token)
            dispatch('getInfo')
            resolve(ApiErroeNames.getSuccessInfo(data))
          } else {
            resolve(ApiErroeNames.getErrorInfo(response))
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // regist
  regist ({ commit, dispatch }, { firstName, lastName, email, phone, password }) {
    const postData = {
      member_first_name: firstName,
      member_last_name: lastName,
      member_email: email,
      member_pohone: phone,
      member_password: password
    }
    return new Promise((resolve, reject) => {
      regist(postData)
        .then((response) => {
          const { data } = response['data']
          const { status } = response['data']
          if (status === 200) {
            const { token } = data
            commit('SET_TOKEN', token)
            dispatch('getInfo')
            resolve(ApiErroeNames.getSuccessInfo(data))
          } else {
            resolve(ApiErroeNames.getErrorInfo(response))
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // get user info
  getInfo ({ commit, state }, token = null) {
    return new Promise((resolve, reject) => {
      const postData = {
        token: isNull(token) ? state.token : token
      }
      getInfo(postData)
        .then(response => {
          const { data } = response['data']
          const { status } = response['data']
          if (status === 200) {
            commit('SET_TOKEN', postData.token)
            commit('SET_INFO', data)
            resolve(ApiErroeNames.getSuccessInfo(data))
          } else {
            commit('CLEAN_INFO')
            resolve(ApiErroeNames.getErrorInfo(data))
          }
        })
        .catch(error => {
          commit('CLEAN_INFO')
          reject(error)
        })
    })
  },

  // user logout
  logout ({ commit, state }, token = null) {
    return new Promise((resolve, reject) => {
      const postData = {
        token: isNull(token) ? state.token : token
      }
      logout(postData)
        .then((response) => {
          commit('CLEAN_INFO')
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
