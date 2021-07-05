import { IUpload, IUpload_RES } from '@interfaces/index'
import { BaseEndpoint } from '@lib/index'

export class UploadEndpoint extends BaseEndpoint {
  async uploadRequest(upload: IUpload): Promise<IUpload_RES> {
    try {
      const { data } = await this.performRequest('POST', '/upload-request', upload)

      return data
    } catch (err) { return err }
  }
}

