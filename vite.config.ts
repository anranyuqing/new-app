import { join } from 'path'
import { loadEnv, defineConfig } from 'vite'
import unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv

  console.log('viteEnv', viteEnv)
  return {
    plugins: [vue(), unocss(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        },
      ]
    }),

    Components({
      dirs: ['src/components', 'src/layouts'],
      resolvers: [NaiveUiResolver()]
    }),

    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [join(import.meta.dirname, "src/assets/svgIcons")],
      // 指定symbolId格式
      symbolId: `${viteEnv.VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
      inject: 'body-last',
      customDomId: '__SVG_ICON_LOCAL__'
    })
    ],

    resolve: {
      alias: {
        '@': join(import.meta.dirname, './src')
      }
    },
    server: {
      port: 3000
    }
  }
})
