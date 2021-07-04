import { IChannel } from './IChannel'

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