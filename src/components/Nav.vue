<template>
    <el-menu :default-active="data.activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" :router="true">
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
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <User />
                </el-icon>
                <span>Workspace</span>
            </template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/about">
            <template #title>
                <el-icon>
                    <Guide />
                </el-icon>
                <span>About</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { HomeFilled, Menu, User, Guide } from '@element-plus/icons-vue'


export default defineComponent({
    name: 'App',
    components: {
        HomeFilled,
        Menu,
        User,
        Guide
    },
    setup() {
        const data = reactive({
            activeIndex: '/'
        });

        return {
            data
        }
    }
})
</script>
