
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { companyList } from '../../services/list/company';
import { highestQualificationList } from '../../services/list/highestQualification';

export const highestQualificationController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await highestQualificationList();
    return res.status(201).json({
      message: 'Highest qualification list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}