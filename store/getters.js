const getters = {
  deviceType: state => state.common.deviceType,
  progressInterval: state => state.common.progressInterval,
  urlProgress: state => state.common.urlProgress,
  showLoading: state => state.common.showLoading,
  showBackButton: state => state.common.showBackButton,
  isMobile: state => state.common.isMobile,
  token: state => state.user.token,
  info: state => state.user.info,
  isLogin: state => state.user.isLogin
}
export default getters
