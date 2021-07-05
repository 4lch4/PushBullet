import { IChannel } from './IChannel'
import { IPush } from './IPush'

export interface ISubscription {
  /** Unique identifier for this {@link ISubscription}. */
  iden: string

  /** `false` if this item has been deleted. */
  active: boolean

  /** Creation time in floating point seconds. */
  created: number

  /** Last modified time in floating point seconds. */
  modified: number

  /**
   * If `true`, notifications from this {@link ISubscription} will not be shown.
   */
  muted: boolean

  /** Information about the {@link Channel} that is being subscribed to. */
  channel: IChannel
}

export interface IChannelInfo {
  /** Unique identifier for the channel. */
  iden: string

  /** The name of the channel. */
  name: string

  /** The description of the channel. */
  description: string

  /** Image to display for the channel. */
  image_url: string

  /** Number of subscribers to the channel. */
  subscriber_count: number

  /**
   * Globally unique identifier for the channel, chosen by the channel creator.
   */
  tag: string

  /** Array of recent {@link IPush} objects sent to the channel. */
  recent_pushes: IPush[]
}
