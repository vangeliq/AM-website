import { createRouter, createWebHistory } from 'vue-router'

import Home from '../../src/components/Home.vue'
import ContactUs from '../../src/components/ContactUs.vue'
import RequestIntegration from '../../src/components/RequestIntegration.vue'
import IntegrationInstructions from '../../src/components/IntegrationInstructions.vue'

const routes =  [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/contact-us',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: '/request-integration',
            name: 'RequestIntegration',
            component: RequestIntegration,
        },
        {
            path: '/integration-instructions',
            name: 'RequestIntegrationInstructions',
            component: IntegrationInstructions
        },
    ]


    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
      })
      export default router