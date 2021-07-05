export interface IPush {
  iden: string
  active: boolean
  created: number
  modified: number
  type: 'note' | 'file' | 'link'
  sender_name: string
  receiver_iden: string
  receiver_email: string
  receiver_email_normalized: string
  target_device_iden: string
  source_device_iden: string
  dismissed: boolean
  guid: string
  direction: 'self' | 'outgoing' | 'incoming'
  sendir_iden: string
  sender_email: string
  sender_email_normalized: string
  client_id: string
  channel_iden: string
  awake_app_guids: string[]
  title: string
  body: string
  url: string
  file_name: string
  file_type: string
  file_url: string
  image_url: string
  image_width: number
  image_height: number
}

export interface IPush_NEW {
  /**
   * Send the push to a specific device. Appears as target_device_iden on the
   * push. You can find this using the `/v2/devices` call.
   */
  device_iden?: string

  /**
   * Send the push to this email address. If that email address is associated
   * with a Pushbullet user, we will send it directly to that user, otherwise we
   * will fallback to sending an email to the email address (this will also
   * happen if a user exists but has no devices registered).
   */
  email?: string

  /** Send the push to all subscribers to your channel that has this tag. */
  channel_tag?: string

  /**
   * Send the push to all users who have granted access to your OAuth client
   * that has this `iden`.
   */
  client_iden?: string

  type: 'note' | 'link' | 'file'
  title?: string
  body?: string
  url?: string
  file_name?: string
  file_type?: string
  file_url?: string
}

export interface IListPushesOptions {
  modified_after?: string
  active?: string
  cursor?: string
  limit?: number
}

export interface Push_File {
  type: 'file'

  /** Title of the push, used for all types of pushes. */
  title: string

  /** Body of the push, used for all types of pushes. */
  body?: string

  /** File name, used for type="file" pushes. */
  file_name?: string

  /** File mime type, used for type="file" pushes. */
  file_type?: string

  /** File download url, used for type="file" pushes. */
  file_url?: string

  /** Device iden of the sending device. */
  source_device_iden?: string

  /**
   * Device iden of the target device, if sending to a single device. Appears as
   * target_device_iden on the push.
   */
  device_iden?: string

  /**
   * Client iden of the target client, sends a push to all users who have
   * granted access to this client. The current user must own this client.
   */
  client_iden?: string

  /**
   * Channel tag of the target channel, sends a push to all people who are
   * subscribed to this channel. The current user must own this channel.
   */
  channel_tag?: string

  /**
   * Email address to send the push to. If there is a pushbullet user with this
   * address, they get a push, otherwise they get an email.
   */
  email?: string

  /**
   * Unique identifier set by the client, used to identify a push in case you
   * receive it from /v2/everything before the call to `/v2/pushes` has
   * completed. This should be a unique value. Pushes with guid set are mostly
   * idempotent, meaning that sending another push with the same guid is
   * unlikely to create another push (it will return the previously created
   * push).
   */
  guid?: string
}
