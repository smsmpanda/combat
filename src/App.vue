<template>
    <Nav class="app-nav" />
    <div class="container-fill banner">
        <router-view>

        </router-view>
    </div>
</template>
<script  lang="ts">
import { defineComponent, defineAsyncComponent, provide } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        Nav: defineAsyncComponent(() => import('@/components/Nav.vue'))
    }
})
</script>

<style lang="less">
.app-nav {
    position: sticky !important;
    top: 0;
    z-index: 999;
}
</style>