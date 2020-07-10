import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        project: null,
        page: 'Splash',
        app: null,
        entity: null,
    },
    mutations: {
        setProject(state, path) {
            state.project = path
        },      
        setPage(state, page) {
            state.page = page
        },
        setApp(state, app) {
            state.app = app
        },
        setEntity(state, entity) {
            state.entity = entity
        },                
    },
    actions: {
    },
    modules: {
    }
})