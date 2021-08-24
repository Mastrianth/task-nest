import {Body, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {PostsService} from "./posts.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {diskStorage} from "multer";
import {FilesHelper} from "../files/files.helper";

@Controller('posts')
@UsePipes(
    new ValidationPipe({
        whitelist: true,
        transform: true,
    }),
)
export class PostsController {
    constructor(private postService: PostsService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
       fileFilter: FilesHelper,
        limits: {
           fileSize: 10485760,
        }
    }))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image: Express.Multer.File) {
        return this.postService.create(dto, image);
    }
}
