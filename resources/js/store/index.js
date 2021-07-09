import { createStore } from 'vuex';
import vuePersistedState from 'vuex-persistedstate';
import auth from './modules/auth';
import products from './modules/products';
import orders from './modules/orders';

const store = createStore({
    modules: {
        auth,
        products,
        orders
    },
    plugins: [
        vuePersistedState()
    ],
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});

export default store;