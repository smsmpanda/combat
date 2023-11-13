<template>
    <ElSkeleton animated :loading="UIControl.renderLoading">
        <ElSpace fill alignment="flex-start" direction="vertical" :size="10">
            <ElCard v-for="post in data.posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
                <ElRow style="margin-top: 10px;">
                    <ElCol :span="2">
                        <el-button type="primary" plain @click="givePostLikeHandle(post)">
                            <template #icon>
                                <el-icon>
                                    <CaretTop />
                                </el-icon>
                            </template>
                            <label>赞同 <span>{{ post.givelikeCount }}</span> </label>
                        </el-button>
                    </ElCol>
                    <ElCol :span="2">
                        <el-button type="primary" plain @click="getPostCommontsById(post)" :loading="post.isloadedComment">
                            <template #icon>
                                <el-icon>
                                    <Comment />
                                </el-icon>
                            </template>
                            <span>评论</span>
                        </el-button>
                    </ElCol>
                </ElRow>
                <ElSkeleton animated :loading="post.isloadedComment" style="margin-top: 10px;">
                    <ul>
                        <li v-for="comment in post.comments" class="comment-list">
                            <div class="container-flex-row">
                                <div class="comment-content container-flex-row container-fill">
                                    <div style="width: 20px;">
                                        <ElIcon>
                                            <Promotion />
                                        </ElIcon>
                                    </div>
                                    <div class="container-fill comment-detail-container container-flex-column">
                                        <div>
                                            <h5>{{ comment.name }}</h5>
                                        </div>
                                        <div class="comment-body">
                                            {{ comment.body }}
                                        </div>
                                    </div>
                                </div>
                                <div class="comment-operate">
                                    <i class="iconfont iconcolor">&#xe621;</i>
                                    <ElLink :underline="false" @click="givePostCommentLikeHandle(comment)">
                                        <span>{{ comment.givelikeCount }}</span>
                                    </ElLink>
                                </div>
                            </div>
                        </li>
                    </ul>
                </ElSkeleton>
            </ElCard>
        </ElSpace>
    </ElSkeleton>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from 'vue'
import { getPostsAsync, getPostCommontsByIdAsync, postGivelike, commentGivelike, PostComment, Post } from '@/api/api-posts'
import { CaretTop, Comment, Promotion } from '@element-plus/icons-vue'
import { getRandomInt } from '@/common/utils'

export default defineComponent({
    name: 'Posts',
    components: {
        CaretTop,
        Comment,
        Promotion,
    },
    setup() {

        //业务数据
        let posts: Array<Post> = new Array<Post>()
        let data = reactive({
            posts
        })

        //UI控制
        let UIControl = reactive({
            renderLoading: true,
        })

        onMounted(() => {
            getPostsAsync().then(res => {
                res.map(p => {
                    p.givelikeCount = getRandomInt(1, 200)
                    p.isloadedComment = false
                })
                data.posts = res
                UIControl.renderLoading = false
            })
        })

        function getPostCommontsById(post: Post) {
            post.isloadedComment = true
            getPostCommontsByIdAsync(post).then(res => {
                res.map(c => {
                    c.givelikeCount = getRandomInt(1, 1000)
                })
                post.comments = res
                post.isloadedComment = false
            })
        }

        function givePostLikeHandle(post: Post) {
            postGivelike(post)
        }

        function givePostCommentLikeHandle(comment: PostComment) {
            commentGivelike(comment)
        }

        return {
            data,
            UIControl,
            getPostCommontsById,
            givePostLikeHandle,
            givePostCommentLikeHandle
        }
    }
})
</script>
<style lang="less">
.posts-comment-container {
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
    margin: 5px 0px;
    padding: 10px;
}

.comment-list {
    padding: 10px 20px 14px;
}

.comment-detail-container {
    margin: 0 10px
}

.comment-content {
    justify-content: space-between;
}

.comment-body {
    overflow-wrap: break-word;
    color: rgb(68, 68, 68);
    margin-top: 4px;
}

.comment-operate {
    width: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    font-size: 10px;
}
</style>