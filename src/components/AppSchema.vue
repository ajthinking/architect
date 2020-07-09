<template>
    <div v-if="this.$store.state.app" class="flex flex-col px-4 my-2 w-full justify-center text-gray-700">
        <div class="flex">
            <div v-for="model in this.$store.state.app.schema.models" v-bind:key="model"
                class="rounded bg-grey-light flex-no-shrink w-64 p-2 mr-3 bg-gray-700"
            >
                <div class="flex justify-between py-1">
                    <h3 class="text-sm text-white font-bold">{{ model }}</h3>
                    <svg class="h-4 fill-current text-gray-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"></path></svg>
                </div>
                <div class="text-xs mt-2">
                    <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                        name
                    </div>
                    
                    <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                        email
                    </div>

                    <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                        nickname
                    </div>                    
                    
                    <p class="mt-3 text-gray-400 cursor-pointer">Add a card...</p>
                </div>
            </div>            
        </div>
       
    </div>
</template>

<script>
export default {
    methods: {
        //
    }
}
</script>