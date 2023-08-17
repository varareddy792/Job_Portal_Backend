
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { currencyList } from '../../services/list/currency';

export const currencyController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await currencyList();
    return res.status(201).json({
      message: 'currency list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}