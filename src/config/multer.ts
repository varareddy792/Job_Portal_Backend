import { Express,Request } from 'express'; 
import multer, { FileFilterCallback } from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log('in multer ', file)
    cb(null, path.resolve(__dirname, `..${path.sep}..${path.sep}upload`));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // console.log('suffix', uniqueSuffix);
    cb(null, file.filename + '-' + uniqueSuffix);
  }
});

export const fileFilter = (req:Request,file:Express.Multer.File , cb:FileFilterCallback):void => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"
    || file.mimetype === "image/gif" || file.mimetype === "application/pdf" || file.mimetype === "application/msword" || file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    || file.mimetype === "application/x-abiword") {
    cb(null, true)
  } else {
    cb(null, false)
    cb(new Error("Error while uploading file using multer"));
  }
}

