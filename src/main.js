import '@bcgov/bc-sans/css/BCSans.css';
import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

import router from './router'




const app = createApp(App)

library.add(fas);

app.component('fa',FontAwesomeIcon)

app.use(router)

app.mount('#app')

    
