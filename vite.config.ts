import { join } from 'path'
import { loadEnv, defineConfig } from 'vite'
import unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import vitePluginAutoI18n, { YoudaoTranslator } from 'vite-auto-i18n-plugin';

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
    }),

    vitePluginAutoI18n({
      targetLangList: ['en', 'ko', 'ja'],
      translator: new YoudaoTranslator({
        appId: '6adbb009a22f7ef2',
        appKey: 'Rx9UbWYWhCcuEZvA23VUrJG8zr3BV1XT',
      }),
      globalPath: './src/lang',
      excludedPath: [
        'node_modules', 
        'src/layout/components/HeaderLayout/widgets/LocaleSwitcher']

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
