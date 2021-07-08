import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Registration from '../views/Registration.vue';
import Admin from '../views/Admin.vue';
import Dashboard from '../views/Dashboard.vue';
import NotFound from '../views/NotFound.vue';
import Products from '../components/products/ProductList.vue';
import Orders from '../components/orders/OrderList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home, meta: { auth: undefined } },
        { path: '/login', name: 'login', component: Login, meta: { auth: false } },
        { path: '/registration', name: 'registration', component: Registration, meta: { auth: false } },
        {
            path: '/dashboard',
            component: Admin,
            meta: { auth: true },
            children: [
                { path: '', name: 'dashboard', component: Dashboard },
                { path: '/products', name: 'products', component: Products },
                { path: '/orders', name: 'orders', component: Orders },
            ]
        },
        { path: '/:pathMatch(.*)*', name: '404', component: NotFound, meta: { auth: undefined } },
    ]
});

export default router;