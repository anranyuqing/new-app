import { defineConfig } from 'unocss'

export default defineConfig({
    shortcuts: {
        'wh-full': 'w-full h-full',
        'flex-center': 'flex justify-center items-center',
    },
    rules: [
        ['c-primary', { color: 'var(--color-primary)' }],
        ['c-secondary', { color: 'var(--color-text-secondary)' }],
        ['bg-card', { background: 'var(--card-bg-color)' }],
        ['c-specila', { color: 'var(--menu-icon-color)' }],
        ['shadow-card', { 'box-shadow': '2px 2px 2px 1px var(--color-shadow)' }]
    ]
})
