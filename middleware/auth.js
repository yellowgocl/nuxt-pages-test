import { basePath } from '@/utils/route'
import { isEmpty } from 'lodash'

export default ({ redirect, route, store }) => {
  const loginPath = '/login'
  const registPath = '/regist'
  const loginning = basePath(route.path) === loginPath || registPath
  const loginArgs = [[loginPath, { return_url: route.path }], ['/']]
  const autoRedirect = redirect.bind(this, ...loginArgs[loginning | 0])
  const token = store.getters.token
  if (!isEmpty(token)) {
    if (loginning) {
      redirect('/')
    }
  } else {
    if (!loginning) {
      autoRedirect()
    }
  }
}
