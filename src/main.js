import { createApp } from 'vue'
import './style.css'
import setupDisableDevtools from './utils/disable-devtools'
import App from './App.vue'

createApp(App).mount('#app')

setupDisableDevtools({
    enableDetector: true,
})