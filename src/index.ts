import {
  ChannelEndpoint,
  ChatEndpoint,
  DeviceEndpoint,
  PushEndpoint,
  SubscriptionsEndpoint,
  TextEndpoint,
  UploadEndpoint,
  UserEndpoint
} from './endpoints'
import { APIConfig } from './interfaces'

export class PBLib {
  private config: APIConfig

  constructor(config: APIConfig) {
    this.config = config
  }

  get ChannelEndpoint() {
    return new ChannelEndpoint(this.config)
  }

  get ChatEndpoint() {
    return new ChatEndpoint(this.config)
  }

  get DeviceEndpoint() {
    return new DeviceEndpoint(this.config)
  }

  get PushEndpoint() {
    return new PushEndpoint(this.config)
  }

  get SubscriptionsEndpoint() {
    return new SubscriptionsEndpoint(this.config)
  }

  get TextEndpoint() {
    return new TextEndpoint(this.config)
  }

  get UploadEndpoint() {
    return new UploadEndpoint(this.config)
  }

  get UserEndpoint() {
    return new UserEndpoint(this.config)
  }
}
