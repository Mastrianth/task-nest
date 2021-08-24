import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";

export const FilesHelper = (req: any, file: any, callback: any) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|bmp|gif)$/)) {
        console.log('Пiймав на гендзюцу');
        return callback(new HttpException('Only image files are allowed(type like jpg, jpeg, png, bmp, gif)', HttpStatus.TOO_MANY_REQUESTS), false);

    }
    if(file.width < 500 || file.height < 500) {
        console.log('Пiймав на гендзюцу знов');
        return callback(new HttpException('Only image files more than 500x500px', HttpStatus.BAD_REQUEST), false);
    }
    callback(null, true)
    console.log('validation ok');
}