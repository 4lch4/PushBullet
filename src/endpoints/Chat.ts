import { BaseEndpoint } from '../lib'
import { IChat } from '../interfaces'

export class ChatEndpoint extends BaseEndpoint {
  async listChats(): Promise<IChat[]> {
    try {
      const { data, status } = await this.performRequest('GET', '/chats')

      if (status === 200) return data.chats
      else return data
    } catch (err) {
      return err
    }
  }

  async createChat(email: string): Promise<IChat> {
    try {
      const { data } = await this.performRequest('POST', '/chats', { email })

      return data
    } catch (err) {
      return err
    }
  }

  async updateChat(id: string, muted: boolean): Promise<IChat> {
    try {
      const { data } = await this.performRequest('POST', `/chats/${id}`, {
        muted
      })

      return data
    } catch (err) {
      return err
    }
  }

  async deleteChat(id: string): Promise<{}> {
    try {
      const { data } = await this.performRequest('DELETE', `/chats/${id}`)

      return data
    } catch (err) {
      return err
    }
  }
}
