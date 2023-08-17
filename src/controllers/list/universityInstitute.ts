
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { companyList } from '../../services/list/company';
import { universityInstituteList } from '../../services/list/universityInstitute';

export const universityInstituteController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await universityInstituteList();
    return res.status(201).json({
      message: 'University institute list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}