
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { resumeHeadline } from '../../services/profile/resumeHeadline';

export const resumeHeadlineController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const id=req.params.id
    const posts = { userId: '', resumeHeadline: '' }
    posts.userId = req.body.userId;
    posts.resumeHeadline = req.body.resumeHeadline;

    const result = await resumeHeadline(id,{ posts });
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