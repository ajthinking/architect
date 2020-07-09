const { ipcRenderer } = require('electron')
import store from './index'

ipcRenderer.on('current-project-updated', (event, path) => {
    store.commit('setProject', path)
    ipcRenderer.send('architect-api-request', {
        target: path,
        endpoint: 'get-app-summary'
    })
})

ipcRenderer.on('architect-api-request-successful', (event, data) => {
    // Update to app?
    if(data.app) {
        store.commit('setApp', data.app)
    }
})