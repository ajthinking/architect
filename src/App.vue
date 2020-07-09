<template>
    <div id="app" class="flex h-screen bg-gray-800">
        <Sidebar></Sidebar>
        <Page></Page>        
    </div>            
</template>

<script>

import Sidebar from './components/Sidebar.vue'
import Page from './components/Page.vue'

export default {
    name: 'App',
    components: {
        Sidebar,
        Page
    },
}
</script>