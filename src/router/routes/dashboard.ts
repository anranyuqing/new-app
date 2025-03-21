import type { RouteRecordRaw } from 'vue-router'
export const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        redirect: import.meta.env.VITE_APP_REDIRECT_URL,
        component: () => import('@/layout/basic.vue'),
        children: [
            {
                path: '/workBench',
                name: 'WorkBench',
                component: () => import('@/pages/workBench/index.vue'),
                meta: { title: 'WorkBench', icon: 'workBench' }
            },
            {
                path: '/three',
                name: 'Three',
                component: () => import('@/pages/three/index.vue'),
                meta: { title: 'Three', icon: 'three' }
            }
        ]
    },
]
