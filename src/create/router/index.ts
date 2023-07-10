import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "@/create/views/Home.vue"
import About from "@/create/views/About.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/create',
        children: [
            {
                path: "about",
                name: "About",
                component: About
            },
            {
                path: 'home',
                name: "Home",
                component: Home
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;