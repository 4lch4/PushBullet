export interface IText {
  /** Unique identifier for this object. */
  iden: string

  /** `false` if the item has been deleted. */
  active: boolean

  /** Creation time in floating point seconds (unix timestamp) */
  created: number

  /** Last modified time in floating point seconds (unix timestamp). */
  modified: number

  /**
   * Map of values specifying this text message.
   *
   * Example:
   * ```
   * {
   *   "addresses": [
   *     "+13035551212"
   *   ],
   *   "guid": "993aaa48567d91068e96c75a74644159",
   *   "message": "Text message body.",
   *   "status": "queued",
   *   "target_device_iden": "ujpah72o0sjAoRtnM0jc"
   * }
   * ```
   */
  data: { [key: string]: any }

  /** File download URL for an image to send with the text message. */
  file_url: string

  /** If set to `false`, delete the attached file when the Text is deleted. */
  skip_delete_file: boolean
}

/*
data - map of values specifying this text message
target_device_iden - The device_iden of the Device to send the message. This device must have SMS Android permissions granted.
addresses - A list of 1 more phone numbers to send this message to. Including than one number sends a group MMS message.
message - The text content of the text message.
guid - Unique identifier optionally set by the client, used to identify a text message to ensure it is not sent multiple times in the case create-text is called for it more than once.
status - The state of this message. One of "queued" / absent, "sent" or "failed".
file_type - The mime type of the file_url being sent with this message. Only required for messages sending a file.
*/
export interface IText_NEW {
  /**
   * The `device_iden` of the Device to send the message. This device must have
   * SMS Android permissions granted.
   */
  target_device_iden?: string

  /**
   * A list of 1 or more phone numbers to send this message to. Including more
   * than one number sends a group MMS message.
   */
  addresses?: string[]

  /** The text content of the text message. */
  message: string

  /**
   * Unique identifier optionally set by the client, used to identify a text
   * message to ensure it is not sent multiple times in the case `create-text`
   * is called for it more than once.
   */
  guid: string

  /** The state of this message. */
  status: 'queued' | 'absent' | 'sent' | 'failed'

  /**
   * The MIME type of the file_url being sent with this message. Only required
   * for messages sending a file.
   */
  file_type: string
}
