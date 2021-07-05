import { BaseEndpoint } from '../lib'
import { IChannel } from '../interfaces'

export class ChannelEndpoint extends BaseEndpoint {
  async createChannel(channel: IChannel) {
    try {
      return this.performRequest('POST', '/channels', channel)
    } catch (err) {
      return err
    }
  }
}
