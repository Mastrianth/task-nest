import {Body, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {PostsService} from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() @UploadedFile() image) {
        return this.postService.create(image);
    }
}
