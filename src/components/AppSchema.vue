<template>
    <div v-if="this.$store.state.app" class="flex flex-col px-4 my-2 w-full justify-center text-gray-700">
        <div class="flex flex-wrap">
            <EntityCard v-for="entity in this.$store.state.app.schema.entities"
                v-bind:key="entity.model"
                :entity="entity"
            ></EntityCard>            
        </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        //
    }
}
</script>