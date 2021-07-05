export interface IUpload {
  /** The name of the file you want to upload. */
  file_name: string

  /** The MIME type of the file. */
  file_type: string
}

export interface IUpload_RES {
  /**
   * The file name that will be used for the file (may be truncated from the
   * original `file_name`.
   */
  file_name: string

  /**
   * The file type that will be used for the file (may be different from the one
   * provided to `upload-request`.
   */
  file_type: string

  /** The URL where the file will be available after it is uploaded. */
  file_url: string

  /**
   * The URL to POST the file to. The file must be posted using
   * multipart/form-data encoding.
   */
  upload_url: string
}
