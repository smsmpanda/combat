<template>
    <el-menu :default-active="data.activePath" class="el-menu-demo" mode="horizontal" :ellipsis="false" :router="true">
        <el-menu-item index="/">
            <template #title>
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>主页</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/foodheat">
            <template #title>
                <el-icon>
                    <Menu />
                </el-icon>
                <span>应用中心</span>
            </template>
        </el-menu-item>
        <div class="container-fill" />
        <el-menu-item @click="gotoCreationCenter">
            <template #title>
                <el-icon>
                    <DataBoard />
                </el-icon>
                <span>创作中心</span>
            </template>
        </el-menu-item>
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <User />
                </el-icon>
                <span>个人空间</span>
            </template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { HomeFilled, Menu, User, Guide, DataBoard } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    name: 'App',
    components: {
        HomeFilled,
        Menu,
        User,
        Guide,
        DataBoard
    },
    setup() {

        const route = useRoute()
        const data = reactive({
            activePath: ''
        });

        onMounted(() => {
            data.activePath = route.path
        })

        const gotoCreationCenter = (e) => {
            window.open('/create', '_blank')
        }

        return {
            data,
            gotoCreationCenter
        }
    }
})
</script>
