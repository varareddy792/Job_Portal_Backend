
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { companyList } from '../../services/list/company';

export const companyController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await companyList();
    return res.status(201).json({
      message: 'company list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}