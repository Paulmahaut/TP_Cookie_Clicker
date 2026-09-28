import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'

const app = createApp(App)

app.use(store)

store.dispatch('demarrerProductionAuto')

app.mount('#app')
