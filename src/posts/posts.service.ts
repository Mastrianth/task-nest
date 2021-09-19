import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Post} from './posts.model';
import {FilesService} from "../files/files.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {ImageMagicService} from "../image-magic/image-magic.service";
import {KrakenService} from "../kraken/kraken.service";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FilesService, private imageMagicService: ImageMagicService, private krakenService: KrakenService) {
    }

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({...dto, image: fileName})
        await this.imageMagicService.initJpegTransform(fileName);
        await this.imageMagicService.imageConversions(fileName);
        const kraken = await this.krakenService.krakenSend(fileName);

        const response = [fileName, post, kraken ];


        return response;


    }
}
