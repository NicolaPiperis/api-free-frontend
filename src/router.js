import { createRouter, createWebHistory } from 'vue-router';

import home from './views/home.vue';
import index from './views/index.vue';
import create from './views/create.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/create',
            name: 'create',
            component: create
        }
    ]
})

export { router };