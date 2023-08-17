
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { companyList } from '../../services/list/company';
import { keySkillsList } from '../../services/list/keySkills';

export const keySkillsController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await keySkillsList();
    return res.status(201).json({
      message: 'Key Skills list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}