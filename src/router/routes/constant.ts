import type { RouteRecordRaw } from 'vue-router'
export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: import.meta.env.VITE_APP_REDIRECT_URL,
        children: []
    },
]