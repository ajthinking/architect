<template>
    <div class="flex flex-col items-center justify-center mx-auto max-w-md w-full min-h-full">
        <div class="flex font-bold text-white mb-6">
            <div @click="openExisting" class="flex items-center px-6 py-2 rounded mx-2 text-lg hover:border hover:bg-gray-700 cursor-pointer">
                <i class="fas fa-folder-open my-3"></i>
                <div class="ml-2">Open existing</div>
            </div>            
            <div class="flex items-center px-6 py-2 rounded mx-2 text-lg  hover:border hover:bg-gray-700 cursor-pointer">
                <i class="fas fa-plus my-3"></i>
                <div class="ml-2">New project</div>
            </div>
        </div>
        <div class="flex items-center w-full border-t text-gray-400 text-xs bg-gray-800">
            <!--<i class="fas fa-cog my-3"></i>
            <div class="ml-2">Architect v0.13.37</div>-->
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        openExisting() {
            const { ipcRenderer } = require('electron')
            
            ipcRenderer.on('asynchronous-reply', (event, arg) => {
                console.log(arg)
                this.$store.commit('openProject', '/Users/anders/Code/host1')
                this.$store.commit('navigate', 'AppSummary')                
            })
            
            ipcRenderer.send('asynchronous-message', 'ping')
            


        }
    }
}
</script>