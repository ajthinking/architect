<template>
    <div v-if="this.$store.state.app" class="flex flex-col px-4 my-2 w-full justify-center text-gray-700">
        <div class="flex flex-wrap">
            <div v-for="model in this.$store.state.app.schema.entities.map(e => e.model)" v-bind:key="model"
                class="w-1/4 rounded bg-grey-light w-64 p-2 mx-2 my-2 bg-gray-700"
            >
                <div class="flex justify-between py-1">
                    <h3 :id="model" @click="clickEntity" class="text-sm text-white font-bold cursor-pointer">{{ model }}</h3>
                    <span class="text-white cursor-pointer text-xs mr-1"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="bg-red-500 h-64">asdad</div>
                <!--
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
                -->
            </div>            
        </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        clickEntity(e) {
            this.$store.commit('setEntity', e.target.id)
            this.$store.commit('setPage', 'Entity')
        }
    }
}
</script>