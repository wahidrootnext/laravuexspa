export default {
    namespaced: true,
    state: {
        user: null,
        errors: null,
        loggedIn: false,
        authToken: null
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getErrors(state) {
            return state.errors;
        },
        isLoggedIn(state) {
            return state.loggedIn;
        },
        getAuthToken(state) {
            return state.authToken;
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setErrrors(state, errors) {
            state.errors = errors;
        },
        setLoggedIn(state, loggedIn) {
            state.loggedIn = loggedIn;
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
                            commit("setErrrors", null);
                            resolve(response);
                        })
                        .catch(error => {
                            commit("setErrrors", error.response.data.errors);
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
                            commit("setErrrors", null);
                            commit("setUser", response.data.user);
                            commit("setLoggedIn", true);
                            commit("setAuthToken", response.data.access_token);
                            axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.access_token;
                            resolve(response);
                        })
                        .catch(error => {
                            commit("setErrrors", error.response.data.errors);
                            commit("setUser", null);
                            commit("setLoggedIn", false);
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
                            commit("setErrrors", null);
                            commit("setUser", null);
                            commit("setLoggedIn", false);
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