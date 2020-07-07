<template>
    <div id="app" class="flex h-screen bg-gray-800">
        <Splash v-if="!this.$store.state.currentProject"></Splash>
        <Workbench v-else></Workbench>
    </div>            
</template>

<script>
import Splash from './components/Splash.vue'
import Workbench from './components/Workbench.vue'

export default {
  name: 'App',
  components: {
    Splash,
    Workbench
  },
  data: function() {
      return {
          //'currentProject': null
      }
  }

}
</script>
