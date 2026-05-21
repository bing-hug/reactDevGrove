// index.ts
import axios from 'axios'
import { checkStatus } from "./errorStatus.ts";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError
} from 'axios'

type Result<T> = {
  success: boolean
  error_msg: string
  data: T
}

const baseURL =
  import.meta.env.VITE_APP_ENV === 'development'
    ? '/api'
    : import.meta.env.VITE_API_BASE_URL

// 导出Request类，可以用来自定义传递配置来创建实例
export class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置，url和超时时间
  baseConfig: AxiosRequestConfig = { baseURL: baseURL, timeout: 60000 }

  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 一般会请求拦截里面加token，用于后端的验证
        const token = localStorage.getItem('token') as string
        if (token) {
          config.headers!.Authorization = token
        }

        return config
      },
      (err: Error) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.status === 200 && res.data.success) {
          return res.data
        }
        // message.error(res.data.errorMsg)
        return Promise.reject(res.data.errorMsg)
      },
      (err: AxiosError) => {
        // 这里用来处理http常见错误，进行全局提示
        const message = checkStatus(err.response?.status)
        console.log(message)
        // 这里错误消息可以使用全局弹框展示出来
        // 比如element plus 可以使用 ElMessage
        // ElMessage({
        //   showClose: true,
        //   message: `${message}，请检查网络或联系管理员！`,
        //   type: "error",
        // });
        // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
        return Promise.reject(err.response)
      }
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.get(url, config)
  }

  public post<T>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
    const data = config?.data || null
    return this.instance.post(url, data, config)
  }
}

// 默认导出Request实例
export default new Request({})
