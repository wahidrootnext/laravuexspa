import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Registration from '../views/Registration.vue';
import Dashboard from '../views/Dashboard.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home, meta: { auth: undefined } },
        { path: '/login', name: 'login', component: Login, meta: { auth: false } },
        { path: '/registration', name: 'registration', component: Registration, meta: { auth: false } },
        { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { auth: true } },
        { path: '/:pathMatch(.*)*', name: '404', component: NotFound, meta: { auth: undefined } },
    ]
});

export default router;