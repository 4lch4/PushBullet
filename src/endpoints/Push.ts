import { IListPushesOptions, IPush, IPush_NEW } from '@interfaces/index'
import { BaseEndpoint } from '@lib/index'

export class PushEndpoint extends BaseEndpoint {
  async listPushes(opts?: IListPushesOptions): Promise<IPush> {
    try {
      const { data } = await this.performRequest('GET', '/pushes', opts)

      return data.pushes
    } catch (err) {
      return err
    }
  }

  async createPush(push: IPush_NEW): Promise<IPush> {
    try {
      const { data } = await this.performRequest('POST', '/pushes', push)

      return data
    } catch (err) {
      return err
    }
  }

  async updatePush(id: string, dismissed: boolean): Promise<IPush> {
    try {
      const { data } = await this.performRequest('POST', `/pushes/${id}`, {
        dismissed
      })

      return data
    } catch (err) {
      return err
    }
  }

  async deletePush(id: string): Promise<{}> {
    try {
      const { data } = await this.performRequest('DELETE', `/pushes/${id}`)

      return data
    } catch (err) { return err }
  }

  async deleteAllPushes(): Promise<{}> {
    try {
      const { data } = await this.performRequest('DELETE', '/pushes')

      return data
    } catch (err) { return err }
  }
}
