export default {
    namespaced: true,
    state: {
        user: null,
        authToken: null
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getAuthToken(state) {
            return state.authToken;
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setAuthToken(state, token) {
            state.authToken = token;
        }
    },
    actions: {
        registration({ commit }, user) {
            return new Promise((resolve, reject) => {
                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post("/api/registration", user)
                        .then(response => {
                            resolve(response);
                        })
                        .catch(error => {
                            reject(error);
                        });
                });
            });
        },
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post("/api/login", user)
                        .then(response => {
                            commit("setUser", response.data.user);
                            commit("setAuthToken", response.data.access_token);
                            axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.access_token;
                            resolve(response);
                        })
                        .catch(error => {
                            commit("setUser", null);
                            commit("setAuthToken", null);
                            delete axios.defaults.headers.common['Authorization'];
                            reject(error);
                        });
                }); 
            });
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post("/api/logout")
                        .then(response => {
                            commit("setUser", null);
                            commit("setAuthToken", null);
                            delete axios.defaults.headers.common['Authorization'];
                            resolve(response);
                        })
                        .catch(error => reject(error));
                }); 
            });
        }
    }
}