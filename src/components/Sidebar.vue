<template>
    <div class="flex flex-col items-center px-4 bg-gray-700 min-h-full text-white">
        <div @click="openExisting" class="my-3"><i class="fas fa-folder-open"></i></div>
        <!--<i class="fas fa-plus my-3 text-orange-300 hover:text-yellow-600"></i>
        <i class="fas fa-project-diagram my-3 text-orange-300  hover:text-yellow-600"></i>
        <i class="fas fa-columns my-3 text-orange-300  hover:text-yellow-600"></i>
        <i class="fas fa-code-branch my-3 text-orange-300  hover:text-yellow-600"></i>
        <i class="fas fa-sync my-3 text-orange-300  hover:text-yellow-600"></i>
        <i class="far fa-comment my-3 text-orange-300  hover:text-yellow-600"></i>
        <i class="fas fa-wrench my-3 text-orange-300  hover:text-yellow-600"></i>
        <i class="fab fa-twitter my-3 text-orange-300  hover:text-yellow-600"></i>-->
    </div>
</template>

<script>
export default {
    methods: {
        openExisting() {
            const { ipcRenderer } = require('electron')
            ipcRenderer.send('select-current-project')
        }
    }
}
</script>