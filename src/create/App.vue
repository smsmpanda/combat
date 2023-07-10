<template>
    <NavHeader />
    <RouterView>

    </RouterView>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
import NavHeader from '@/create/components/NavHeader.vue'

export default defineComponent({
    name: 'App',
    components: {
        NavHeader
    },
    setup() {
        return {}
    }
})
</script>

<style scoped></style>