import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

var _sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Andreas',
  timeout: 3000,

})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: [],


  },
  mutations: {
    setActiveBug(state, data) {
      state.activeBug = data
    },
    setBugs(state, data) {
      state.bugs = data
    },
    setNotes(state, data) {
      state.notes = data
    }
  },
  actions: {

    addBug({ commit, dispatch }, payload) {
      _sandboxApi.post('bugs', payload)
        .then(res => {
          console.log(res)
          dispatch('initialize')
        }
        )
    },

    initialize({ commit }) {
      _sandboxApi.get('bugs')
        .then(res => {
          console.log(res.data)
          commit('setBugs', res.data.results)
        })
    },
    addNote({ commit, dispatch }, payload) {
      _sandboxApi.post('bugs/' + payload.bug + '/notes', payload)
        .then(res => {
          console.log(res)
          dispatch('initialize')
        }
        )
    },

    initializeNote({ commit }, id) {
      _sandboxApi.get('bugs/' + id + '/notes')
        .then(res => {
          console.log(res.data)
          commit('setNotes', res.data.results)
        })
    },
    getNotes({ commit }, payload) {
      _sandboxApi.get('bugs/' + payload.id + '/notes')
        .then(res => {
          commit('setNotes', res.data.results)
        })
    },

    setActiveBug({ commit, dispatch }, payload) {
      commit('setActiveBug', payload)
    },

    getActiveLog({ commit, dispatch }, payload) {
      _sandboxApi.get('bugs/:id')
        .then(res => {
          commit('setActiveLog', res.data.results)
        })
    },
    // createBug({ commit }, payload) {
    //   commit('createBug', res.data.createBug)
    // },

    deleteNotes({ commit }, payload) {
      commit('deleteBug', res.data.deleteBug)
    }

  }
})
