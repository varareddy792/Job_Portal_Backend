
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { keySkills, keySkillsGet } from '../../services/jobSeeker/keySkills';

export const keySkillsController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const { id } = req.user
    const posts: any = { userId: '', keySkills: '' }

    posts.userId = id;
    posts.keySkills = req.body.keySkills;

    const result = await keySkills({ posts });
    return res.status(201).json({
      message: 'Key skill updated successfully',
      data: result
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const keySkillsGetController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.user
    const result = await keySkillsGet(id);
    return res.status(201).json({
      message: 'Key skill fetch successfully',
      data: result
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}