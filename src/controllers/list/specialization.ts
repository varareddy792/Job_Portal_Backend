
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { companyList } from '../../services/list/company';
import { specializationList } from '../../services/list/specialization';

export const specializationController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await specializationList();
    return res.status(201).json({
      message: 'Specialization list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}