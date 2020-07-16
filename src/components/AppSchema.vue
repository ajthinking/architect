<template>
    <div v-if="this.$store.state.app" class="flex flex-col px-4 my-2 w-full justify-center text-gray-700">
        <div class="flex flex-wrap">
            <div v-for="entity in this.$store.state.app.schema.entities" v-bind:key="entity.model"
                class="w-1/4 rounded p-2 mx-2 my-2 bg-gray-700"
            >
                <div class="flex justify-between py-1 mb-1">
                    <h3 :id="entity.model" @click="clickEntity" class="text-sm text-white font-bold cursor-pointer">{{ entity.model }}</h3>
                    <span class="text-white cursor-pointer text-xs mr-1"><i class="fas fa-chevron-down"></i></span>                    
                </div>
                <div class="bg-gray-700 text-gray-400 text-xs p-2 min-w-24">
                    <ul>
                        <li v-for="column in entity.columns" v-bind:key="column.name">
                            {{ column.name }}
                        </li>
                    </ul>                    
                </div>
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