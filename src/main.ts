import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStyle } from './styles'
import { setupAssets } from './plugins'
import { setupStore } from '@/store'

const app = createApp(App)
/*注册全局样式 */
setupStyle()
/*注册静态资源 */
setupAssets()
/*注册路由 */
setupRouter(app)
/*注册状态管理器 */
setupStore(app)
app.mount('#app')
