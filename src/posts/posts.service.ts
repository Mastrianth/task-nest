import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import { Post } from './posts.model';
import {FilesService} from "../files/files.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {ImageMagicService} from "../image-magic/image-magic.service";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FilesService, private imageMagicService: ImageMagicService) {
    }

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({...dto, image: fileName});
        const imageMagic = await this.imageMagicService.initJpegTransform(fileName);
        const imageMagicAll = await this.imageMagicService.imageConversions(fileName);
        const response = {
            post,
            mimetype: image.mimetype,
            size: image.size,
            imageMagic,
            imageMagicAll
        }
        return response;
    }
}
