import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import { Post } from './posts.model';
import {FilesService} from "../files/files.service";
import {CreatePostDto} from "./dto/create-post.dto";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FilesService) {
    }

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        console.log(3333)
        const post = await this.postRepository.create({...dto, image: fileName});
        return post;
    }
}
