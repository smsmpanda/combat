import Vue from "vue";
import Router from 'vue-router';

Vue.use(Router)
const routes = [
    {
        path:'/',
        name:'home',
        component:()=>import('../views/main/main.vue')
    },
    {
        path:'/main',
        name:'main',
        component:()=>import('../views/main/main.vue')
    },
    {
        path:'/user',
        name:'usermain',
        component:()=>import('../views/user/main.vue')
    },
    {
        path:'*',
        name:'notfound',
        component:()=>import('../views/error/404.vue')
    }
]


const router = new Router({
    mode:'history',
    routes
})
 
export default router