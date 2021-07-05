import { APIConfig } from '@interfaces/index'
import axios, { AxiosInstance, AxiosResponse, Method } from 'axios'

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

  async performRequest(
    method: Method,
    endpoint: string,
    data?: any
  ): Promise<AxiosResponse<any>> {
    try {
      return this.client.request({ method, url: endpoint, data })
    } catch (err) {
      return err
    }
  }
}
