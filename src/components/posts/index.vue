<template>
    <el-space direction="vertical" :size="10">
        <el-card shadow="never" v-for="post in data.posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <el-row>
                <el-col :span="2">
                    <el-button type="primary" plain>
                        <template #icon>
                            <el-icon>
                                <CaretTop />
                            </el-icon>
                        </template>
                        <span>赞同</span>
                    </el-button>
                </el-col>
                <el-col :span="2">
                    <el-button type="primary" plain @click="getPostCommontsById(post.id)">
                        <template #icon>
                            <el-icon>
                                <Comment />
                            </el-icon>
                        </template>
                        <span>评论</span>
                    </el-button>
                </el-col>
            </el-row>
            <ul>
                <li></li>
            </ul>
        </el-card>
    </el-space>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from 'vue'
import { getPostsAsync, getPostCommontsByIdAsync, Post } from '@/api/api-posts'
import { CaretTop, Comment } from '@element-plus/icons-vue'

export default defineComponent({
    name: 'Posts',
    components: {
        CaretTop,
        Comment
    },
    setup() {

        let posts: Array<Post> = new Array<Post>()
        let data = reactive({
            posts
        })

        onMounted(() => {
            getPostsAsync().then(res => data.posts = res)
        })

        function getPostCommontsById(id: number) {
            getPostCommontsByIdAsync(id).then(res => console.log(res))
        }

        return {
            data,
            getPostCommontsById
        }
    }
})
</script>
<style></style>