import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"
import Foodheat from "@/views/Foodheat.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        redirect: "/home/posts",
        children: [
            {
                path: "gluttony",
                name: "Gluttony",
                component: () =>
                    import('@/components/gluttony/index.vue')
            },
            {
                path: "posts",
                name: "Posts",
                component: () =>
                    import('@/components/posts/index.vue')
            },
            {
                path: "favimg",
                name: "Favimg",
                component: () =>
                    import('@/components/daily/index.vue')
            }
        ]
    },
    {
        path: "/foodheat",
        name: "FoodHeat",
        component: Foodheat
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import('@/views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;