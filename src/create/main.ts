import { createApp } from 'vue'
import App from '@/create/App.vue'
import router from '@/create/router'

const app = createApp(App)

// antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

app.use(Antd)
app.use(router)
app.mount('#app')