import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        project: null,
        page: 'Splash',
        schema: 'Splash',
    },
    mutations: {
        setProject(state, path) {
            state.project = path
        },      
        setPage(state, page) {
            state.page = page
        },
        setSchema(state, schema) {
            state.schema = schema
        },        
    },
    actions: {
    },
    modules: {
    }
})