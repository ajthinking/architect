import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        project: null,
        pluginsDirectory: null,
        codeHome: null,
        page: 'Splash',
        app: null,
        entity: null,
        tabgroup: 'entities',
    },
    mutations: {
        setCodeHome(state, path) {
            state.codeHome = path
        },
        setPluginsDirectory(state, path) {
            state.pluginsDirectory = path
        },
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
        setTabGroup(state, key) {
            state.tabgroup = key
        },                        
    },
    actions: {
    },
    modules: {
    }
})