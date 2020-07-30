<template>
    <div
        :id="id" 
        v-tab-group="parentTabGroup"
        class="w-1/3 rounded mx-2 my-2 bg-gray-700"
        @keyup.enter="enterClicked()"
    >
        <div v-tab-group="tabGroup" class="flex justify-between bg-gray-600 p-2">
            <h3 :id="entity.model" class="text-sm text-gray-200 font-bold cursor-pointer">{{ entity.model }}</h3>
        </div>
        <div v-tab-group="tabGroup" class="bg-gray-700 text-gray-500 text-xs m-2">
            <ul class="">
                <li v-for="column in entity.columns" v-bind:key="column.name" class="flex">
                    <Column :column=column></Column>
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
            tabGroup_: '',
            isFocused: false,
        }
    },
    computed: {      
        id() {
            return this.entity.model
        },
        tabGroup()
        {
            return this.$store.state.tabgroup === this.tabGroupId ? '0' : '-1';
        }
    },
    methods: {
        focusChanged (event) {
            const el = event.target
        },
        enterClicked(){
            this.$store.commit('setTabGroup', this.id);
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