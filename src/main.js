import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/tailwind.css'
import './store/ipcEvents'

Vue.config.productionTip = false

// import Splash from './components/Splash.vue'

// Vue.component('Splash', Splash)

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => {
    var parts = key.split('/');
    var name = parts[parts.length - 1].split('.vue')[0];
    return Vue.component(name, files(key).default)
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

