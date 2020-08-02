<template>
    <div class="flex flex-col items-center justify-center mx-auto max-w-md w-full min-h-full">
        <div v-if="message" class="flex flex-col w-full items-center justify-center mb-12">
            <div class="text-white text-2xl ">I could not bootstrap that 😥</div>
        </div>
        <div v-if="creating" class="flex flex-col w-full items-center justify-center mb-12 text-white text-xl">
            <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
        </div>        
        <div class="flex font-bold text-white mb-6">
            <div @click="openExisting" class="flex items-center px-6 py-2 rounded mx-2 text-lg hover:border hover:bg-gray-700 cursor-pointer">
                <i class="fas fa-folder-open my-3"></i>
                <div class="ml-2">Browse existing</div>
            </div>            
            <div @click="createNew" class="flex items-center px-6 py-2 rounded mx-2 text-lg  hover:border hover:bg-gray-700 cursor-pointer">
                <i class="fas fa-plus my-3"></i>
                <div class="ml-2">New project</div>
            </div>
        </div>
        <!--<div class="flex flex-col p-2 w-full border-t text-gray-400 text-sm bg-gray-800">
            <i class="fas fa-cog my-3"></i>
            <div class="ml-2">Architect v0.13.37</div>
            <div class="cursor-pointer hover:underline" @click="openRecent" v-bind:id="'car-pool'">car-pool</div>
            <div class="cursor-pointer hover:underline" @click="openRecent" v-bind:id="'host1'">host1</div>
            <div class="cursor-pointer hover:underline" @click="openRecent" v-bind:id="'hostq'">hostq</div>
        </div>-->
        <div class="h-12"></div>
        <div class="flex flex-col items-center w-full text-white">
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold shadow-lg">laravel-new</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">set-app-name</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">use-sqlite</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">make-readme</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">use-models-dir</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">use-vue-preset</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">add-tailwindcss</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">git-init</div>
            <div class="border-l-2 h-6 border-gray-600"></div>            
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">git-initial-commit</div>
            <div class="border-l-2 h-12 border-gray-600"></div>                        

            <div class="flex mx-auto justify-center bg-gray-100 w-full rounded py-2 text-sm text-indigo-500 font-bold">+ add</div>

        </div>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            message: '',
            creating: false,
        }
    },
    methods: {
        openExisting() {
            const { ipcRenderer } = require('electron')
            ipcRenderer.send('select-current-project')
        },

        createNew() {
            const { ipcRenderer } = require('electron')
            ipcRenderer.send('create-new-project')
            this.creating = true
        },
        
        openRecent(event) {
            const { ipcRenderer } = require('electron')
            ipcRenderer.send('select-recent-project', '/Users/anders/Code/' + event.srcElement.id)
        }
    }
}
</script>