import Vue from 'vue'
import Vuex from 'vuex'
const { ipcRenderer } = require('electron')
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        project: null,
        //projects: {},
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
            ipcRenderer.send('persist-state', state)
        },
        setPluginsDirectory(state, path) {
            state.pluginsDirectory = path
            ipcRenderer.send('persist-state', state)
        },
        setProject(state, path) {
            state.project = path
            ipcRenderer.send('persist-state', state)
        },      
        setPage(state, page) {
            state.page = page
            ipcRenderer.send('persist-state', state)
        },
        setApp(state, app) {
            state.app = app
            ipcRenderer.send('persist-state', state)
        },
        setEntity(state, entity) {
            state.entity = entity
            ipcRenderer.send('persist-state', state)
        },
        setTabGroup(state, key) {
            state.tabgroup = key
            ipcRenderer.send('persist-state', state)
        },                        
    },
    // computed: {
    //     project() {
    //       return this.$store.state.projects[project]
    //     }
    // },
    actions: {
    },
    modules: {
    },
    plugins: [vuexLocal.plugin]
})