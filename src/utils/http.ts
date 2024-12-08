import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'

import { URL_LOGIN, URL_LOGOUT, URL_REGISTER } from 'src/api/auth.api'
import { AuthResponse } from 'src/types/auth.type'
import { clearLS, getAccessTokeFromLS, setAccessTokenToLS } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokeFromLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken

          return config
        }

        return config
      },
      (error) => Promise.reject(error)
    )

    this.instance.interceptors.response.use(
      (response) => {
        if (response.config.url === URL_LOGIN || response.config.url === URL_REGISTER) {
          this.accessToken = (response.data as AuthResponse).data.access_token

          setAccessTokenToLS(this.accessToken)
        } else if (response.config.url === URL_LOGOUT) {
          this.accessToken = ''
          clearLS()
        }

        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message, {
            autoClose: 3000
          })
        }

        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
