import { IText, IText_NEW } from '@interfaces/index'
import { BaseEndpoint } from '@lib/index'

export class TextEndpoint extends BaseEndpoint{
  async createText(textData: IText_NEW, file_url: string, skip_delete_file = true): Promise<IText>{
    try {
      const { data } = await this.performRequest('POST', '/texts', {
        data: textData,
        file_url,
        skip_delete_file
      })

      return data
    } catch (err) { return err }
  }

  async deleteText(id: string): Promise<{}> {
    try {
      const { data } = await this.performRequest('DELETE', `/texts/${id}`)

      return data
    } catch (err) { return err }
  }
}

