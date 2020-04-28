// @ts-nocheck
import { device } from '@/utils/device'
import { basePath } from '@/utils/route'
import Cookies from 'js-cookie'
import { isUndefined, isEmpty } from 'lodash'

export default async (context) => {
  const { redirect, route, store } = context
  // 处理token  持久化登陆
  const cookiesToken = isUndefined(Cookies.get('user_token')) ? {} : Cookies.get('user_token')
  const { token } = store.getters
  if (!isEmpty(cookiesToken) && isEmpty(token)) {
    store.commit('user/SET_TOKEN', cookiesToken)
    await store.dispatch('user/getInfo')
  }
  // 判断设备
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  context.device = device(context.userAgent)
  const { type } = context.device
  store.commit('common/SET_DEVICE_TYPE', type)
  const path = basePath(route.path)
  const extendPath = type === 'desktop' ? '/desktop' : '/mobile'
  const redirectPath = route.path === '/' ? `${extendPath}/home` : `${extendPath}${path}`
  if (redirectPath !== route.path) {
    redirect(redirectPath)
  }
  //
}
