import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export default class {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  private interceptors(): void {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }

  /**
   * 请求拦截器
   */
  private interceptorsRequest(): void {
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  /**
   * 响应拦截器
   */
  private interceptorsResponse(): void {
    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}
