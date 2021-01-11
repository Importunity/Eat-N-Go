import multer from 'multer';
import path from 'path';

export default multer({
    storage: multer.diskStorage({}),
    fileFilter: (request, file, callback) => {
        let extension_name = path.extname(file.originalname).toLowerCase();
        if(extension_name !== ".jpg" && extension_name !== ".jpeg" && extension_name !== ".png"){
            callback(new Error("File type not supported"), false);
            return;
        }
        callback(null, true);
    },
});