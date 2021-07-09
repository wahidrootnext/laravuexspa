export default {
    namespaced: true,
    state: {
        user: null,
        errors: null
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getErrors(state) {
            return state.errors;
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setErrrors(state, errors) {
            state.errors = errors;
        }
    },
    actions: {
        registration({ commit }, user) {
            axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post("/registration", user)
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(error => {
                        console.log(error.response.data);
                    })
            });
        },
        login({commit}, data) {
            axios.get('/sanctum/csrf-cookie').then(() => {
                
            });
        },
    }
}