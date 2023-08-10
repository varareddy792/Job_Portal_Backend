import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('in multer ', file)
    cb(null, '/upload');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.filename + '-' + uniqueSuffix);
  }
});

export default storage;
