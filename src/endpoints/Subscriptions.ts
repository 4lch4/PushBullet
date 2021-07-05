import { IChannelInfo, ISubscription } from '../interfaces'
import { BaseEndpoint } from '../lib'

export class SubscriptionsEndpoint extends BaseEndpoint {
  async listSubscriptions(): Promise<ISubscription[]> {
    try {
      const { data } = await this.performRequest('GET', '/subscriptions')

      return data.subscriptions
    } catch (err) {
      return err
    }
  }

  async createSubscription(channel_tag: string): Promise<ISubscription> {
    try {
      const { data } = await this.performRequest('POST', '/subscriptions', {
        channel_tag
      })

      return data
    } catch (err) {
      return err
    }
  }

  async updateSubscription(id: string, muted: boolean): Promise<ISubscription> {
    try {
      const { data } = await this.performRequest(
        'POST',
        `/subscriptions/${id}`,
        { muted }
      )

      return data
    } catch (err) {
      return err
    }
  }

  async deleteSubscription(id: string): Promise<{}> {
    try {
      const { data } = await this.performRequest(
        'DELETE',
        `/subscriptions/${id}`
      )

      return data
    } catch (err) {
      return err
    }
  }

  async getChannelInfo(
    channel_tag: string,
    no_recent_pushes = false
  ): Promise<IChannelInfo> {
    try {
      const { data } = await this.performRequest('GET', '/subscriptions', {
        tag: channel_tag,
        no_recent_pushes
      })

      return data
    } catch (err) {
      return err
    }
  }
}
