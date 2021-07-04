import { APIConfig } from './interfaces/APIConfig'

export class PBLib {
  config: APIConfig

  constructor(config: APIConfig) {
    this.config = config
  }
}
