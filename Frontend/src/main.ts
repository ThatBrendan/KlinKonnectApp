import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//styles
import '../src/styles/layout.css'
import '../src/styles/typography.css'
import '../src/styles/styles.css'

//Fontawesome

// Import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser, faHouse, faBroom, } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faBroom, faHouse)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
