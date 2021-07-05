import { BaseEndpoint } from '@lib/index'

export class UserEndpoint extends BaseEndpoint {
  async getUser() {
    try {
      return this.performRequest('GET', '/users/me')
    } catch (err) { return err }
  }
}
