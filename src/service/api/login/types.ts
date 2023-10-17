//登录
export interface LoginParams {
  userName: string
  passWord: string | number
}

//注册
export interface registerParams {
  password: string
  type: number
  username: string
  phone: string
}

export interface registerApi {
  register: (params: registerParams) => Promise<any>
}

export interface LoginApi {
  login: (params: LoginParams) => Promise<any>
}
