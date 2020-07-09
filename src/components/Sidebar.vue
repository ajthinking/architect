<template>
    <div class="flex flex-col items-center px-4 bg-gray-700 min-h-full text-white text-sm">
        <div v-if="this.$store.state.app" @click="setPage('AppSummary')" class="my-2 cursor-pointer"><i class="fas fa-home"></i></div>
        <div v-if="this.$store.state.app" @click="refresh" class="my-2 cursor-pointer"><i class="fas fa-sync-alt"></i></div>
        <div v-if="this.$store.state.app" @click="setPage('AppSchema')" class="my-2 cursor-pointer"><i class="fas fa-grip-vertical"></i></div>
        <div v-if="this.$store.state.app" @click="setPage('AppSchema')" class="my-2 cursor-pointer"><i class="fas fa-project-diagram"></i></div>
        <div v-if="this.$store.state.app" @click="create" class="my-2  cursor-pointer"><i class="fas fa-plug"></i></div>
        <div v-if="this.$store.state.app" @click="create" class="my-2  cursor-pointer"><i class="fas fa-wave-square"></i></div>
        <div v-if="this.$store.state.app" @click="create" class="my-2  cursor-pointer"><i class="fas fa-check"></i></div>
        <!--<i class="fas fa-columns my-3 text-orange-300 hover:text-yellow-600"></i>
        <i class="fas fa-code-branch my-3 text-orange-300 hover:text-yellow-600"></i>
        <i class="fas fa-sync my-3 text-orange-300 hover:text-yellow-600"></i>
        <i class="far fa-comment my-3 text-orange-300 hover:text-yellow-600"></i>
        <i class="fas fa-wrench my-3 text-orange-300 hover:text-yellow-600"></i>
        <i class="fab fa-twitter my-3 text-orange-300 hover:text-yellow-600"></i>-->


        <div @click="openExisting" class="my-2 cursor-pointer"><i class="fas fa-folder-open"></i></div>
        <div @click="create" class="my-2  cursor-pointer"><i class="fas fa-plus"></i></div>
        
    </div>
</template>

<script>
export default {
    methods: {
        refresh() {
            alert("Not implemented!")
        },

        openExisting() {
            const { ipcRenderer } = require('electron')
            ipcRenderer.send('select-current-project')
        },

        setPage(page) {
            this.$store.commit('setPage', page)
        },

        create() {
            //
        },
    }
}
</script>