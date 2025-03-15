import { NextFunction, Request, Response } from 'express';
import ErrorResponse from 'helper/errorResponse';

export const demo = (_req: Request, res: Response, next: NextFunction) => {
  try {
    const message = 'Demo message';
    res.status(200).json({
      success: true,
      message: message,
    });
  } catch (error) {
    console.error(error);
    next(new ErrorResponse(error, 500));
  }
};
