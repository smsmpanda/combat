import { ApiUri as urls } from "@/common/api-uri";
import { service } from '@/common/https'

export class Post {
    public id: number
    public title: string
    public body: string
    public comments: Array<PostComment>
    public isloadedComment: boolean
    public givelikeCount: number
}

export class PostComment {
    public id: number;
    public postId: number;
    public name: string
    public body: string
    public email: string
    public givelikeCount: number
}

//#region  posts
export async function getPostsAsync(): Promise<Array<Post>> {
    try {
        const response = await service.get<Array<Post>>(urls.getPosts)
        return response.data
    } catch (error) {
        return null
    }
}

export function postGivelike(post: Post): void {
    try {
        ++post.givelikeCount
    } catch (error) {
        return null
    }
}
//#endregion

//#region  post comments
export async function getPostCommontsByIdAsync(post: Post): Promise<Array<PostComment>> {
    try {
        const response = await service.get<Array<PostComment>>(urls.getPostCommentById.replace(':id', `${post.id}`))
        return response.data
    } catch (error) {
        return null
    }
}

export function commentGivelike(comment: PostComment): void {
    try {
        ++comment.givelikeCount
    } catch (error) {
        return null
    }
}
//#endregion