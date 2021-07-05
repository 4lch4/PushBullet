import { IChannel } from '@interfaces/index'
import { BaseEndpoint } from '@lib/BaseEndpoint'

export class ChannelEndpoint extends BaseEndpoint {
  async createChannel(channel: IChannel) {
    try {
      return this.performRequest('POST', '/channels', channel)
    } catch (err) {
      return err
    }
  }
}
