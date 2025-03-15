import { getAj } from 'config/arcjet';
import { NextFunction, Request, Response } from 'express';
import ErrorResponse from 'helper/errorResponse';

const arcjetMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const aj = await getAj();
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit())
        return res
          .status(429)
          .json({ success: false, message: 'Rate limit exceed' });

      if (decision.reason.isBot())
        return res
          .status(400)
          .json({ success: false, message: 'Bot detected !' });

      res.status(403).json({ success: false, message: 'Access denied' });
    }
    next();
  } catch (error) {
    next(new ErrorResponse(error, 500));
  }
};

export default arcjetMiddleware;
