<template>
    <div class="w-1/3 mx-2 my-2 bg-gray-700" @keyup.enter="enterClicked()">
        <div class="flex justify-between bg-gray-600 p-2">
            <h3 v-if="!active" @keyup.enter="input()"
                class="text-sm text-gray-200 font-bold cursor-pointer"
                v-text="'New model'"></h3>
            <input v-else @keyup.enter="input()"
                ref="entityName"
                class="text-sm w-full bg-gray-300 text-gray-800 font-bold cursor-pointer">
        </div>
        <div class="bg-gray-700 text-gray-500 text-xs m-2">
            <ul class="">
                <li>
                    <div><i class="fas fa-plus"></i></div>                   
                </li>
            </ul>                    
        </div>
    </div>            
</template>

<script>
export default {
    data() {
        return {
            tabgroup: 'entities',
            active: false
        }
    },
    computed: {
        groupedTabIndex()
        {
            return this.$store.state.tabgroup === this.tabgroup ? '0' : '-1';
        }
    },    
    methods: {
        input() {
            this.active = !this.active
            //this.$refs.entityName.focus();
        },
        enterClicked(){
            this.$store.commit('setTabGroup', 'haha');
        },        
    }
}
</script>