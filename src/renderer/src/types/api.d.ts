export interface HitokotoRespType {
  id: number
  uuid: string
  hitokoto: string
  type: string
  from: string
  from_who: string
  creator: string
  creator_uid: number
  reviewer: number
  commit_from: string
  created_at: string
  length: number
}

export interface HitokotoReqType {
  c?: string
  encode?: string
  charset?: string
  callback?: string
  select?: string
  min_length?: number
  max_length?: number
}
