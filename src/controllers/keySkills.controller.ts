
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { keySkillsList } from '../services/keySkills.service';

export const getKeySkills: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
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