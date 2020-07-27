<template>
    <div v-if="this.$store.state.app" class="flex flex-col px-4 my-2 w-full justify-center text-gray-700">
        <div class="flex flex-wrap">
            <EntityCard v-for="entity in entities"
                v-bind:key="entity.model"
                :entity="entity"
            ></EntityCard>
            <NewEntityCard></NewEntityCard>            
        </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            entities: [
                {
                    model: 'App\\User',
                    columns: [
                        {
                            name: 'id'
                        },                        
                        {
                            name: 'name'
                        },
                        {
                            name: 'email'
                        },
                        {
                            name: 'created_at'
                        },
                        {
                            name: 'updated_at'
                        },                                                                        
                    ],
                },
                {
                    model: 'App\\Car',
                    columns: [
                        {
                            name: 'id'
                        },                        
                        {
                            name: 'brand'
                        },
                        {
                            name: 'color'
                        },
                        {
                            name: 'created_at'
                        },
                        {
                            name: 'updated_at'
                        },                                                
                    ],
                },
                {
                    model: 'App\\Garage',
                    columns: [
                        {
                            name: 'id'
                        },                        
                        {
                            name: 'location'
                        },
                        {
                            name: 'created_at'
                        },
                        {
                            name: 'updated_at'
                        },                        
                    ],
                },                                                
            ]
        }
    },
    methods: {
        //
    }
}
</script>