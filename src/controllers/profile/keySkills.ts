
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { keySkills, keySkillsDataSet } from '../../services/profile/keySkills';

export const keySkillsController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const id = req.params.id
    const posts = { userId: '', keySkills: '' }
    const resultData = await keySkillsDataSet("1").then(data => data);
    const skillData = resultData[0].keySkills;
    posts.userId = req.body.userId;
    posts.keySkills = `${skillData},${req.body.keySkills}`;

    const result = await keySkills(id, { posts });
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

    const id = req.params.id
    const posts = { userId: '', keySkills: '' }
    const result = await keySkills(id, { posts });
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