import axios, { AxiosInstance, Method } from 'axios'
import { APIConfig } from '../interfaces/APIConfig'

export abstract class BaseEndpoint {
  private client: AxiosInstance

  constructor({ baseURL, accessToken }: APIConfig) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      }
    })
  }

  async performRequest(method: Method, endpoint: string, data?: any) {
    try {
      return this.client.request({ method, url: endpoint, data })
    } catch (err) {
      return err
    }
  }
}
