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
                <div class="bg-gray-600 h-12">-</div>
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