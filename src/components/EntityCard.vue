<template>
    <div
        :id="id" 
        v-tab-group="parentTabGroup"
        class="w-1/3 rounded mx-2 my-2 bg-gray-700"
        @keyup.enter="enterClicked()"
        @keyup.escape="escapeClicked()"
    >
        <div class="flex justify-between bg-gray-600 p-2">
            <h3 v-tab-group="tabGroup" ref="name" :id="entity.model" class="text-sm text-gray-200 font-bold cursor-pointer">{{ entity.model }}</h3>
        </div>
        <div class="bg-gray-700 text-gray-500 text-xs m-2">
            <ul class="">
                <li v-for="column in entity.columns" v-bind:key="column.name" class="flex">
                    <Column v-tab-group="tabGroup" :column=column></Column>
                </li>

                <li v-if="entity.columns.length == 0" class="flex">
                    Could not retrieve columns
                </li>                

            </ul>                    
        </div>
    </div>            
</template>

<script>
export default {
    props: ['entity'],
    data() {
        return {
            parentTabGroup: 'entities',
            isFocused: false,
        }
    },
    computed: {      
        id() {
            return this.entity.model
        },
        tabGroup()
        {
            return this.id;
        }
    },
    methods: {
        focusChanged () {
            // const el = event.target
        },
        enterClicked(){
            this.$store.commit('setTabGroup', this.id);
            setTimeout(() => {
                this.$refs.name.focus()
            })
            
        },
        escapeClicked(){
            this.$store.commit('setTabGroup', this.parentTabGroup);
            setTimeout(() => {
                this.$refs.name.focus()
            })
            
        },        
    },
    created() {
        document.addEventListener('focusin', this.focusChanged)
    },
    beforeDestroy() {
        document.removeEventListener('focusin', this.focusChanged)
    },    
}
</script>