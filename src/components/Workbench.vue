<template>
  <div class="flex w-full min-h-full">
      <Sidebar></Sidebar>
      <Page></Page>
  </div>
</template>

<script>

import Sidebar from './Sidebar.vue'
import Page from './Page.vue'

export default {
    components: {
        Sidebar,
        Page
    }
}
</script>