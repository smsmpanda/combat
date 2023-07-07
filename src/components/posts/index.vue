<template>
    <el-space direction="vertical" :size="10" v-for="post in data.posts" :key="post.id">
        <el-card shadow="never">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <el-row style="margin-top: 10px;">
                <el-col :span="3">
                    <el-button type="primary" plain>
                        <template #icon>
                            <el-icon>
                                <CaretTop />
                            </el-icon>
                        </template>
                        <span>赞同</span>
                    </el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" plain @click="getPostCommontsById(post)">
                        <template #icon>
                            <el-icon>
                                <Comment />
                            </el-icon>
                        </template>
                        <span>评论</span>
                    </el-button>
                </el-col>
            </el-row>
            <ul class="posts-comment-container" v-if="post.isshowComment">
                <li v-for="commonte in post.commontes" class="comment-list">
                    <div class="container-flex-row">
                        <div style="width: 40px;">
                            <el-icon>
                                <Promotion />
                            </el-icon>
                        </div>
                        <div class="comment-detail-container container-flex-column container-fill">
                            <div>
                                <h5>{{ commonte.name }}</h5>
                            </div>
                            <div class="comment-body">
                                {{ commonte.body }}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </el-card>
    </el-space>
    <el-backtop :right="100" :bottom="100" />
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from 'vue'
import { getPostsAsync, getPostCommontsByIdAsync, Post } from '@/api/api-posts'
import { CaretTop, Comment, Promotion } from '@element-plus/icons-vue'

export default defineComponent({
    name: 'Posts',
    components: {
        CaretTop,
        Comment,
        Promotion
    },
    setup() {

        let posts: Array<Post> = new Array<Post>()
        let data = reactive({
            posts
        })

        onMounted(() => {
            getPostsAsync().then(res => data.posts = res)
        })

        function getPostCommontsById(post: Post) {
            if (post.isshowComment) {
                post.isshowComment = false
                return
            }
            getPostCommontsByIdAsync(post).then(res => {
                post.commontes = res
                post.isshowComment = true
            })
        }

        return {
            data,
            getPostCommontsById
        }
    }
})
</script>
<style>
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
    margin: 0 0 0 10px
}

.comment-body {
    overflow-wrap: break-word;
    color: rgb(68, 68, 68);
    margin-top: 4px;
}
</style>