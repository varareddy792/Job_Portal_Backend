
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { keySkills } from '../../services/profile/keySkills';

export const keySkillsController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const id = req.params.id
    const posts = { userId: '', keySkills: '' }
    posts.userId = req.body.userId;
    posts.keySkills = req.body.keySkills;

    const result = await keySkills(id, { posts });
    return res.status(201).json({
      message: 'Resume headline updated successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}