import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as Kraken from 'kraken';
import {InjectModel} from "@nestjs/sequelize";
import {ImageOptimisation} from "../image-magic/image-magic.model";
import { Op } from 'sequelize';

@Injectable()
export class KrakenService {

    constructor(@InjectModel(ImageOptimisation) private imageOptimisationRepository: typeof ImageOptimisation) {
    }

    async krakenSend(fileName): Promise<object | any> {
        try {
            const newFileName = fileName.replace('.jpg', '');
            const kraken = new Kraken({
                api_key: process.env.KRAKEN_API_KEY,
                api_secret: process.env.KRAKEN_API_SECRET,
            });

            const selectAllImages = await this.imageOptimisationRepository.findAll({where: {
                    name_image: {
                        [Op.like]: `${newFileName}%`
                    }
                }});
            return selectAllImages;
        } catch (e) {
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
