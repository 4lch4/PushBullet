import { IDevice, IDevice_NEW, IDevice_UPD } from '../interfaces'
import { BaseEndpoint } from '../lib'

export class DeviceEndpoint extends BaseEndpoint {
  async listDevices(): Promise<IDevice[]> {
    try {
      const { data } = await this.performRequest('GET', '/devices')

      return data.devices
    } catch (err) { return err }
  }

  async createDevice(device: IDevice_NEW): Promise<IDevice> {
    try {
      const { data } = await this.performRequest('POST', '/devices', device)

      return data
    } catch (err) { return err }
  }

  async updateDevice(device: IDevice_UPD): Promise<IDevice> {
    try {
      const { data } = await this.performRequest('POST', '/devices', device)

      return data
    } catch (err) { return err }
  }

  async deleteDevice(id: string): Promise<{}> {
    try {
      const { data } = await this.performRequest('DELETE', `/devices/${id}`)

      return data
    } catch (err) { return err }
  }
}
