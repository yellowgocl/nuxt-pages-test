import { isNull } from 'lodash'

const state = () => ({
  progressInterval: null,
  urlProgress: 0,
  showLoading: false,
  showBackButton: false,
  deviceType: '',
  isMobile: false
})

const mutations = {
  SHOW_BACK_BUTTON: (state, value) => {
    state.showBackButton = value
  },
  SHOW_LOADING: (state, value) => {
    state.showLoading = value
  },
  SET_PROGRESS_INTERVAL: (state, interval) => {
    if (!isNull(state.progressInterval)) clearInterval(state.progressInterval)
    state.progressInterval = interval
  },
  URL_PROGRESS: (state, progress) => {
    state.urlProgress = progress
  },
  SET_DEVICE_TYPE: (state, type) => {
    state.isMobile = type !== 'desktop'
    state.deviceType = type
  }
}

const actions = {
  showBackButton ({ commit }, isShow) {
    commit('SHOW_BACK_BUTTON', isShow)
  },
  showLoading ({ commit }, isShow) {
    commit('SHOW_LOADING', isShow)
  },
  setProgressInterval ({ commit }, interval) {
    commit('SET_PROGRESS_INTERVAL', interval)
  },
  updateProgress ({ commit }, progress) {
    commit('URL_PROGRESS', progress)
  },
  setDeviceType ({ commit }, type) {
    commit('SET_DEVICE_TYPE', type)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
