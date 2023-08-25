
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { resumeHeadline } from '../services/resumeHeadline.service';

export const resumeHeadlineController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user
    const posts: any = { userId: '', resumeHeadline: '' }
    posts.userId = id;
    posts.resumeHeadline = req.body.resumeHeadline;
    const result = await resumeHeadline({ posts });
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