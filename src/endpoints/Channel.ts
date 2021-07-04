import { IChannel } from '../interfaces/IChannel'
import { BaseEndpoint } from '../lib'

export class ChannelEndpoint extends BaseEndpoint {
  async createChannel(channel: IChannel) {
    try {
      return this.performRequest('POST', '/channels', channel)
    } catch (err) {
      return err
    }
  }
}
