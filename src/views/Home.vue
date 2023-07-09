<template>
    <div class="home-container container-flex-row">
        <div class="home-navmenu-container">
            <Navmenu />
        </div>
        <section class="home-content-container container-fill">
            <router-view></router-view>
        </section>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navmenu from '@/components/Navmenu.vue';


export default defineComponent({
    name: 'Home',
    components: {
        Navmenu
    },
    setup() {
        return {}
    }
})
</script>

<style>
.home-content-container {
    padding: 5px 5px;
    background-color: #fff;
    overflow: auto;
}

.home-navmenu-container {
    width: 200px;
    margin-right: 5px;
}

.home-menu-nav {
    position: relative;
}

.home-container {
    position: relative;
    height: 100%;
}
</style>