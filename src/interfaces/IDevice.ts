export interface IDevice {
  /** Unique identifier for this object. */
  iden: string

  /** `false` if the item has been deleted. */
  active: boolean

  /** Creation time in floating point seconds (unix timestamp). */
  created: number

  /** Last modified time in floating point seconds (unix timestamp). */
  modified: number

  /**
   * Icon to use for this device, can be an arbitrary string. Commonly used
   * values are:
   *
   * - `desktop`
   * - `browser`
   * - `website`
   * - `laptop`
   * - `tablet`
   * - `phone`
   * - `watch`
   * - `system`
   */
  icon: string

  /** Name to use when displaying the device */
  nickname: string

  /**
   * `true` if the nickname was automatically generated from the manufacturer and
   * model fields (only used for some android phones).
   */
  generated_nickname: boolean

  /** Manufacturer of the device. */
  manufacturer: string

  /** Model of the device. */
  model: string

  /**
   * Version of the Pushbullet application installed on the device.
   */
  app_version: number

  /**
   * String fingerprint for the device, used by apps to avoid duplicate devices.
   * Value is platform-specific.
   */
  fingerprint: string

  /**
   * Fingerprint for the device's end-to-end encryption key, used to determine
   * which devices the current device (based on its own key fingerprint) will be
   * able to talk to.
   */
  key_fingerprint: string

  /**
   * Platform-specific push token. If you are making your own device, leave this
   * blank and you can listen for events on the Realtime Event Stream.
   */
  push_token: string

  /**
   * `true` if the devices has SMS capability, currently only `true` for
   * type="android" devices
   */
  has_sms: string
}

export interface IDevice_NEW {
  nickname?: string
  model?: string
  manufacturer?: string
  push_token?: string
  app_version?: string
  icon?: string
  has_sms?: string
}

export interface IDevice_UPD extends IDevice_NEW {}
