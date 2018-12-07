import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

let authApi = Axios.create({
  baseURL: 'http://mage-warz.herokuapp.com/auth',
  withCredentials: true
})

let mageApi = Axios.create({
  baseURL: 'https://mage-warz.herokuapp.com/api',
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    spellbooks: []
  },
  mutations: {
    SETUSER(state, user) {
      state.user = user
    },
    setSpellbooks(state, spellbooks) {
      state.spellbooks = spellbooks
    }
  },
  actions: {
    login({ commit }, creds) {
      authApi.post('login', creds)
        .then(res => {
          commit('SETUSER', res.data)
        })
        .catch(err => alert(err))

    },
    logout({ commit }) {
      authApi.delete('logout')
        .then(res => commit('SETUSER', {}))
    },
    authenticate({ commit }) {
      authApi.get('authenticate')
        .then(res => {
          commit('SETUSER', res.data)
        })
        .catch(err => {
          router.push({ name: 'auth' })
        })
    },
    getSpellbooks({ commit }) {
      mageApi.get('spellbooks')
        .then(res => {
          console.log(res.data)
          commit('setSpellbooks', res.data)
        })
    },
    createSpellbook({ commit }, name) {
      mageApi.post('spellbooks', name)
        .then(res => {
          mageApi.get('spellbooks')
            .then(res => {
              commit('setSpellbooks', res.data)
            })
        })
    },
    goToSpellbook({ commit }, selectedSpellbook) {
      mageApi.get('spellbooks/' + selectedSpellbook.id)
        .then(res => {
          router.push({ name: 'Spellbook', params: { id: res.data._id } })
        })
    }
  }
})
