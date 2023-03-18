<template>
 <div>
    <div>{{txt}}</div>
     <router-view></router-view>
    <router-link to="/main">Go to Foo</router-link>
    <router-link to="/user">Go to Bar</router-link>
 </div>
</template>
<script>
export default {
    name:'App',
    data(){
        return {
            txt:'这是App.vue'
        }
    }
}
</script>
<style>
div{
    color:red;
}
</style>