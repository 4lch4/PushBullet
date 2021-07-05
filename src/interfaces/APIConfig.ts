/**
 * The interface which defines the properties needed to interact with the
 * PushBullet API.
 *
 * @interface
 */
export interface APIConfig {
  /** The base url of the API and it's endpoints. */
  baseURL: string

  /** The access token provided by PushBullet for API access. */
  accessToken: string
}
