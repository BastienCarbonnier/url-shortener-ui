
export interface Error {
  timestamp: string
  statusCode: number
  message: string
}


export interface BackendResponse {
  data: any
  error: Error
}