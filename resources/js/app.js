require('./bootstrap');
import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import notification from '@kyvg/vue3-notification';

const token = store.getters["auth/getAuthToken"];
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

router.beforeEach((to, from) => {
    if (to.meta.auth === true && store.getters["auth/getUser"] === null) {
        return {
            name: 'login',
        }
    } else if (to.meta.auth === false && store.getters["auth/getUser"] !== null) {
        return {
            name: 'dashboard',
        }
    }
});



createApp(App)
    .use(router)
    .use(store)
    .use(notification)
    .mount("#app");