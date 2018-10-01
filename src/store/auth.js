/* eslint-disable */
export default {
  state: {
    authed: false,
    usernameStore: null,
    passwordStore: null
  },
  getters: {
    authed: state => state.authed,
    usernameStore: state => state.usernameStore,
    passwordStore: state => state.passwordStore
  },
  actions: {
    setAuthed({ commit }, authed) {
      commit('authed', authed);
    },
    setUsernameStore({ commit }, usernameStore) {
      commit('usernameStore', usernameStore);
    },
    setPasswordStore({ commit }, passwordStore) {
      commit('passwordStore', passwordStore);
    }
  },
  mutations: {
    authed(state, authed) {
      state.authed = authed;
    },
    usernameStore(state, usernameStore) {
      state.usernameStore = usernameStore;
    },
    passwordStore(state, passwordStore) {
      state.passwordStore = passwordStore;
    }
  },
};
