import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {ImageOptimisation} from "./image-magic.model";
const gm = require('gm').subClass({ imageMagick: true });

const date = new Date().toLocaleString();

@Injectable()
export class ImageMagicService {

    constructor(@InjectModel(ImageOptimisation) private imageOptimisationRepository: typeof ImageOptimisation) {
    }

    async initJpegTransform(fileName) {
        const fileNameNew = fileName.replace('.jpg', '');
        console.log(fileNameNew);
        gm(`dist/static/${fileName}`)
            .size((err, size) => {
            const initSize = size;
            if (!err) console.log(initSize);
        }).write(`dist/static/${fileNameNew}init.jpeg`, async (err) => {
            if (err) console.log(err);
            console.log('To initial image!');
        });
}
    async imageConversions (fileName)  {
        const fileNameNew = fileName.replace('.jpg', '');
        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(500, 500, '!')
            .font('Helvetica.ttf', 14)
            .drawText(0, 10, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}_500x500.jpeg`, async (err) => {
                if (err) console.log(err);
                console.log('To jpeg 500x500!');
                await ImageOptimisation.create({
                    nameImage: `${fileNameNew}_500x500.jpeg`,
                    isOptimized: false
                });
            });

        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(500, 500, '!')
            .font('Helvetica.ttf', 14)
            .drawText(0, 10, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}.png`, async (err) => {
                if (err) console.log(err);
                console.log('To png!');
                await ImageOptimisation.create({
                    nameImage: `${fileNameNew}_500x500.png`,
                    isOptimized: false
                });
            });

        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(500, 500, '!')
            .font('Helvetica.ttf', 14)
            .drawText(0, 10, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}.gif`, async (err) => {
                if (err) console.log(err);
                console.log('To gif!');
                await ImageOptimisation.create({
                    nameImage: `${fileNameNew}_500x500.gif`,
                    isOptimized: false

                });
            });

        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(50, 50, '!')
            .drawText(0, 7, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}_50x50.jpeg`, async (err) => {
                if (err) console.log(err);
                console.log('To jpeg 50x50!');
                await ImageOptimisation.create({
                    nameImage: `${fileNameNew}_50x50.jpeg`,
                    isOptimized: false
                });
            });

        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(100, 100, '!')
            .drawText(0, 10, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}_100x100.jpeg`, async (err) => {
                if (err) console.log(err);
                console.log('To jpeg 100x100!');
                await ImageOptimisation.create({
                    nameImage: `${fileNameNew}_100x100.jpeg`,
                    isOptimized: false
                });
            });

        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(150, 150, '!')
            .drawText(0, 10, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}150x150.jpeg`, async (err) => {
                if (err) console.log(err);
                console.log('To jpeg 150x150!');
                await ImageOptimisation.create({
                    nameImage: `${fileNameNew}150x150.jpeg`,
                    isOptimized: false
                });
            });

        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(200, 200, '!')
            .drawText(0, 10, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}200x200.jpeg`, async (err) => {
                if (err) console.log(err);
                console.log('To jpeg 200x200!');
                await ImageOptimisation.create({
                    nameImage: `${fileNameNew}200x200.jpeg`,
                    isOptimized: false
                });
            });

        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(350, 350, '!')
            .drawText(0, 10, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}350x350.jpeg`, async (err) => {
                if (err) console.log(err);
                console.log('To jpeg 350x350!');
                const imageNewLoadOpt = await ImageOptimisation.create({
                    nameImage: `${fileNameNew}350x350.jpeg`,
                    isOptimized: false
                });
            });

        gm(`dist/static/${fileName}`)
            .autoOrient()
            .stroke('#ffffff')
            .resize(500, 500, '!')
            .font('Helvetica.ttf', 14)
            .drawText(0, 10, `Копия,${date}`)
            .write(`dist/static/${fileNameNew}.bmp`, async (err) => {
                if (err) console.log(err);
                console.log('To bmp!');
                await ImageOptimisation.create({
                    nameImage: `${fileNameNew}500x500.bmp`,
                    isOptimized: false
                });
            });
    };


}
