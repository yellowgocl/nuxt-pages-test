import getters from './getters'
import common from './common'
import ourTeam from './ourTeam'
import user from './user'
import { isUndefined, isEmpty } from 'lodash'
import CookieParser from 'cookieparser'

export default {
  modules: {
    common,
    ourTeam,
    user
  },
  getters,
  actions: {
    async nuxtServerInit ({ commit, dispatch }, { req }) {
      const requestCookies = isUndefined(req.headers.cookie) ? {} : CookieParser.parse(req.headers.cookie)
      if (!isEmpty(requestCookies) && !isEmpty(requestCookies['user_token'])) {
        const token = requestCookies['user_token']
        commit('user/SET_TOKEN', token)
        await dispatch('user/getInfo')
      }
    }
  }
}
