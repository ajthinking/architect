<template>
    <div class="flex flex-col min-h-screen items-center bg-gray-700 text-gray-400 text-sm">
        <div>
            <div :class="buttonStyle()" @click="setPage('Splash')" title="home"><i class="fas fa-home"></i></div>
        </div>
        <div v-if="this.$store.state.app">
            <div :class="buttonStyle()" @click="setPage('AppSummary')" title="app"><i class="fas fa-rocket"></i></div>
            <!--<div :class="buttonStyle()" @click="refresh" ><i class="fas fa-sync-alt"></i></div>-->
            <!--<div :class="buttonStyle()" @click="setPage('AppSchema')" ><i class="fas fa-grip-vertical"></i></div>-->
            <div :class="buttonStyle()" @click="setPage('AppSchema')" title="schema"><i class="fas fa-project-diagram"></i></div>
            <!--<div :class="buttonStyle()" @click="create" ><i class="fas fa-plug"></i></div>-->
            <!--<div :class="buttonStyle()" @click="create" ><i class="fas fa-wave-square"></i></div>-->
            <!--<div :class="buttonStyle()" @click="create" ><i class="fas fa-check"></i></div>-->
        </div>

        <div>
            <!--<div :class="buttonStyle()" @click="openExisting" ><i class="fas fa-folder-open"></i></div>-->
            <!--<div :class="buttonStyle()" @click="create" ><i class="fas fa-plus"></i></div>-->
            <div :class="buttonStyle()" @click="setPage('Settings')" title="settings"><i class="fas fa-cog"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        buttonStyle() {
            return 'flex justify-center w-12 py-2 cursor-pointer hover:text-white hover:shadow-xl'
        },

        refresh() {
            alert("Not implemented!")
        },

        openExisting() {
            const { ipcRenderer } = require('electron')
            ipcRenderer.send('open-project-browse')
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


<!--
        SYMBOLS
        <i class="fas fa-columns></i>
        <i class="fas fa-code-branch></i>
        <i class="fas fa-sync></i>
        <i class="far fa-comment></i>
        <i class="fas fa-wrench></i>
        <i class="fab fa-twitter></i>-->

-->