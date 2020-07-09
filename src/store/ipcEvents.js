const { ipcRenderer } = require('electron')
import store from './index'

ipcRenderer.on('current-project-updated', (event, path) => {
    store.commit('setProject', path)
    store.commit('setPage', 'AppSummary')
    
    ipcRenderer.send('architect-api-request', {
        target: path,
        endpoint: 'get-app-summary'
    })
})

ipcRenderer.on('architect-api-request-successful', (event, data) => {

    // Even though the command executed without crashing there is some kind of failure
    if(data.status != 200) {
        alert(data);
        console.log(data);
    }

    // Update to app?
    if(data.app) {
        store.commit('setApp', data.app)
    }
})

ipcRenderer.on('architect-api-request-failed', (event, data) => {
    // The command crashed
    alert(data);
    console.log(data);
})

ipcRenderer.on('recent-projects-loaded', (event, data) => {
    alert(data);
    console.log(data);
})
