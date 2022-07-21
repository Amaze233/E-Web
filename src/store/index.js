import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: window.sessionStorage.getItem('user')
  },
  getters: {
    getUser: (state) =>{
      return state.user
    }
  },
  mutations: {
    setUser: (state,data) =>{
      state.user = data
      window.sessionStorage.setItem("user",data)
    },
    removeUser: (state) => {
      state.user = null
      window.sessionStorage.removeItem("user")
    }
  },
  actions: {
  },
  modules: {
  }
})
