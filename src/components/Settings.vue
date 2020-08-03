<template>
    <div class="flex flex-col w-full justify-center text-gray-400">
        <div class="mx-8 my-2">
            <h1 class="text-gray-500 border-b mb-8 py-2">settings</h1>
            <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Code home
                </label>
                <div class="text-xs my-2">The directory where you keep your projects.</div>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 text-sm appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"
                    :value="this.$store.state.codeHome" @input="setCodeHome">
                </div>
            </div>
            </form>

        </div>
    </div>
</template>

<script>

export default {
    methods: {
        setCodeHome() {
            const { ipcRenderer } = require('electron')
            ipcRenderer.send('set-code-home-browse')
        }
    }
}
</script>