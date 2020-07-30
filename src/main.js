import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/tailwind.css'
import './store/ipcEvents'

Vue.config.productionTip = false

Vue.directive('tab-group', {
    inserted: function (el, binding, vnode) {
        let shouldExposeTabIndex = vnode.context.$store.state.tabgroup === binding.value
        if(shouldExposeTabIndex) el.setAttribute('tabindex', '0')
    },

    updated: function (el, binding, vnode) {
        console.log("hey updated");
        let shouldExposeTabIndex = vnode.context.$store.state.tabgroup === binding.value
        if(shouldExposeTabIndex) el.setAttribute('tabindex', '0')
    },


    bind(el, binding, vnode) {
        if (vnode.context.$store.state.tabgroup === binding.value) {
            el.setAttribute('tabindex', '0')
        }
        const unwatch = store.watch(state => state.tabgroup, tabgroup => {
          if (tabgroup !== binding.value) { 
            el.removeAttribute('tabindex')
          } else {
            el.setAttribute('tabindex', '0')
          }
        })
       el.__tabgroup_unwatch__ = unwatch

      },

      unbind(el) {
        el.__tabgroup_unwatch__ && el._tabgroup__unwatch__()
      }
          
})

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

