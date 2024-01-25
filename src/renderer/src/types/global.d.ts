export interface ConfigType {
  clock: ClockType
  footer: FooterType
  oneWord: OneWordType
}

export interface ClockType {
  bgColor: string
  color: string
  type: 'clock' | 'timing'
  mode: 'normal' | 'offWork'
  timing: TimingType
  offTime: string
  isTop: boolean
}

export interface TimingType {
  hour: number
  minute: number
  second: number
}

export interface FooterType {
  bgColor: string
  color: string
  content: string
  isShow: boolean
}

export interface OneWordType {
  content: string
  time: string
}
