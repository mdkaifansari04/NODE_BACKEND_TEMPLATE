import { NextFunction, Request, Response } from 'express';

import ErrorResponse from '@src/helper/errorResponse';

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let error = { ...err };
  error.message = err.message;

  // Log to console
  console.error('Error log From Middleware ->', error);

  // Bad ObjectID
  if (err.name === 'CastError') {
    const message = `Resource not Found`;
    error = new ErrorResponse(message, 404);
  }
  // Duplicate entries
  if (err.code === 11000) {
    if (err.message.includes('email_1 dup key:')) {
      const message = `User already Exist`;
      error = new ErrorResponse(message, 400);
    } else {
      const message = `Duplicate Field values.`;
      error = new ErrorResponse(message, 400);
    }
  }
  // Validation
  if (err.name === 'ValidationError') {
    const message = Object.values(error.errors).map(
      (val: any) => val?.message ?? 'Validation Error',
    );
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
  });
};

export default errorHandler;
