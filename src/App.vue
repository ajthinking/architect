<template>
    <div id="app" class="flex h-screen bg-gray-800">
        <Workbench></Workbench>
    </div>            
</template>

<script>
import Workbench from './components/Workbench.vue'

export default {
  name: 'App',
  components: {
    Workbench
  }
}
</script>
