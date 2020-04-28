import Cookies from 'js-cookie'

const tokenKey = 'user_token'

export const getToken = () => {
  return Cookies.get(tokenKey) || ''
}

export const setToken = (token) => {
  return Cookies.set(tokenKey, token)
}

export const removeToken = () => {
  return Cookies.remove(tokenKey)
}
