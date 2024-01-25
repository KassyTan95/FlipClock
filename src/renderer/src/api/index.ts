import { http } from '@renderer/plugins'
import { HitokotoRespType, HitokotoReqType } from '@renderer/types/api'

/**
 * 每日一言
 * @param params
 * @returns
 */
export const hitokoto = (params: HitokotoReqType): Promise<HitokotoRespType> => {
  return http.request<HitokotoRespType>({
    url: 'https://v1.hitokoto.cn',
    method: 'get',
    params
  })
}
