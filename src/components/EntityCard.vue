<template>
    <div class="w-1/3 rounded mx-2 my-2 bg-gray-700">
        <div class="flex justify-between bg-gray-600 p-2">
            <h3 :id="entity.model" class="text-sm text-gray-200 font-bold cursor-pointer">{{ entity.model }}</h3>
        </div>
        <div class="bg-gray-700 text-gray-500 text-xs m-2">
            <ul class="">
                <li v-for="column in entity.columns" v-bind:key="column.name">
                    {{ column.name }}
                </li>
            </ul>                    
        </div>
    </div>            
</template>

<script>
export default {
    props: ['entity'],
    data() {
        return {}
    },
    methods: {
        //
    }
}
</script>