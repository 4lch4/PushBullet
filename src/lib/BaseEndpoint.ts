import axios, { AxiosInstance, AxiosResponse, Method } from 'axios'
import { APIConfig } from '../interfaces'

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

  protected async performRequest(
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
