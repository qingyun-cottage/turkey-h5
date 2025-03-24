// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
// 引入vant
import vant from 'vant'
// 引入组件样式 (这里是全部引入)
import 'vant/lib/index.css'
// 适配rem
import 'amfe-flexible'
// 引入全局样式
import './style/index.less'

const app = createApp(App)

// app.use(router)
app.use(vant) // vant组件已使用插件自动引入
app.mount('#app') // 全局返回上一页方法
