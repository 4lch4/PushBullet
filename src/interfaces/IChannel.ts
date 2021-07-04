export interface IChannel {
  /** Description of the Channel. */
  description?: string

  /** A link to an image to display for the Channel. */
  image_url?: string

  /** Name of the Channel. */
  name?: string

  /**
   * Globally unique identifier for this Channel, chosen by the channel
   * creator.
   */
  tag?: string

  /** The website for the Channel. */
  website_url?: string

  /**
   * URL for RSS feed. If this is set, the RSS feed will be used to
   * automatically create posts for this channel.
   */
  feed_url?: string

  /**
   * If this is set to `true`, a subscription will be created as soon as the
   * channel is created.
   */
  subscribe?: boolean

  /**
   * Filters to use when a `feed_url` is set, only posts matching these filters
   * will be sent out on the channel.
   */
  feed_filters?: IFeed_Filter[]
}

export interface IFeed_Filter {
  /** Field to match filter against, only `"title"` is currently supported. */
  field: string

  /**
   * Operation for filter to match value against the chosen field, only
   * `"contains"` is currently supported.
   */
  operator: string

  /**
   * Value to compare to the field using the chosen operator.
   */
  value: string

  /** Invert the results of this filter. */
  not?: boolean

  /** If `true`, match without regards to lowercase/uppercase. */
  ignore_case?: boolean
}
