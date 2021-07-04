import { Method } from 'axios'

/** The available options for sending a request to the PushBullet API. */
export interface RequestOptions {
  /** The HTTP method (GET/POST/etc.) of the request. */
  method: Method

  /** The API endpoint for this request. */
  url: string

  /** An optional object to send in the body of the request. */
  data?: any

  /** An optional object containing the parameters to send with the request. */
  params?: { [key: string]: string | number | boolean }
}
