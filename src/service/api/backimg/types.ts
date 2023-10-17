//获取背景图
import { registerParams } from '@/service/api/login/types'

export interface backImg {
  id: number
  content?: any
  createTime: string
  updateTime: string
  url: string
}

export interface registerApi {
  getbackimg: (params: registerParams) => Promise<any>
}
