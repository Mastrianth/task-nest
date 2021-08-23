import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import { Post } from './posts.model';
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FilesService) {
    }

    async create(image: any) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({image: fileName});
        return post;
    }
}
