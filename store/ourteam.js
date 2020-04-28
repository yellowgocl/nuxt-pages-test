import ApiErroeNames from '@/utils/error/ApiErrorNames'
import { isNull } from 'lodash'
import getters from './getters'
import { getHotStaff } from '@/utils/api/ourTeam' // , getMemberInfo, getMemberGroup

const state = () => ({
})

const mutations = {}

const actions = {
  getHotStaff ({ commit, state }, token = null) {
    return new Promise((resolve, reject) => {
      const postData = {
        token: isNull(token) ? getters.token : token
      }
      getHotStaff(postData)
        .then(response => {
          const { data } = response['data']
          const { status } = response['data']
          if (status === 200) {
            resolve(ApiErroeNames.getSuccessInfo(data))
          } else {
            resolve(ApiErroeNames.getErrorInfo(data))
          }
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
