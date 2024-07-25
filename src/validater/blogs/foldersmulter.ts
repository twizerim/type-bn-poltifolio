
import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
  destination: 'uploads/', 
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});


const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: any) => {
  if (file.mimetype.startsWith('documa/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an document! Please upload an document.'), false);
  }
};

const uploaddocuma = multer({ storage,fileFilter });

export default uploaddocuma;
