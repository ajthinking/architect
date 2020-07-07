import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentProject: null,
        currentPage: 'Splash'
    },
    mutations: {
        openProject(state, path) {
            state.currentProject = path
        },      
        navigate(state, page) {
            state.currentPage = page
        }
    },
    actions: {
    },
    modules: {
    }
})