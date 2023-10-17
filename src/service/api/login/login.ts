import http from '@/service/api/http'
import * as T from './types'
//注册
export const registerApi: T.registerApi = {
  register(params) {
    return http.post('/nologin/register', params)
  },
}

//登录
const loginApi: T.LoginApi = {
  login(params) {
    return http.post('/login', params)
  },
}
export default { loginApi, registerApi }
