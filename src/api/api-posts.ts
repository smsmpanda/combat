import { ApiUri as urls } from "@/common/api-uri";
import service from '@/common/https'

export class Post {
    public id: number
    public title: string
    public body: string
    public commontes: Array<PostComment>
    public isshowComment: boolean
}

export class PostComment {
    public id: number;
    public postId: number;
    public name: string
    public body: string
    public email: string
}

export async function getPostsAsync(): Promise<Array<Post>> {
    try {
        const response = await service.get<Array<Post>>(urls.getPosts)
        return response.data
    } catch (error) {
        return null
    }
}

export async function getPostCommontsByIdAsync(post: Post): Promise<Array<PostComment>> {
    try {
        const response = await service.get<Array<PostComment>>(urls.getPostCommentById.replace(':id', `${post.id}`))
        return response.data
    } catch (error) {
        return null
    }
}