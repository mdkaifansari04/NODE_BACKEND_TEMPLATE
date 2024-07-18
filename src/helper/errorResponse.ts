class ErrorResponse extends Error {
  public statusCode: any;

  constructor(message: any, statusCode: any) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorResponse;
