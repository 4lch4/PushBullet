import { BaseEndpoint } from '../lib'

export class UserEndpoint extends BaseEndpoint {
  async getUser() {
    try {
      return this.performRequest('GET', '/users/me')
    } catch (err) { return err }
  }
}
