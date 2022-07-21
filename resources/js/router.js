import { createRouter, createWebHistory } from "vue-router";

import Container from "./views/layouts/Container.vue";

const routes = [
    {
        path: '/',
        component: Container
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router