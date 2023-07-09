<template>
    <el-menu :default-openeds="['1']" :default-active="data.activePath" class="el-menu-vertical-demo" style="height: 100%;"
        :collapse="data.isCollapse" :router="true">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span class="nav-menu-title">菜单一</span>
            </template>
            <el-menu-item index="/home/posts">
                <template #title>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>Posts Center</span>
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <icon-menu />
                </el-icon>
                <span class="nav-menu-title">菜单二</span>
            </template>
            <el-menu-item index="/home/gluttony">
                <template #title>
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span class="nav-menu-title">Gluttony</span>
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <document />
                </el-icon>
                <span class="nav-menu-title"> 菜单三</span></template>
            <el-menu-item index="/home/favimg">
                <template #title>
                    <el-icon>
                        <camera-filled />
                    </el-icon>
                    <span class="nav-menu-title">Favorite Image</span>
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <el-icon>
                    <setting />
                </el-icon>
                <span class="nav-menu-title">菜单四</span>
            </template>
        </el-sub-menu>
    </el-menu>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'

import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    ArrowLeft,
    CameraFilled

} from '@element-plus/icons-vue'

import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
    name: 'App',
    components: {
        ArrowLeft,
        Document,
        IconMenu,
        Location,
        Setting,
        CameraFilled
    },
    setup() {

        let data = reactive({
            isCollapse: false,
            activePath: useRoute().path
        })
        return {
            data,
            ArrowLeft,
        }
    }
})
</script>

<style>
.nav-menu-title {
    line-height: 24px;
}

.nav-menu {
    position: sticky;
    top: 65px;
}
</style>