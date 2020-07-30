<template>
    <div :tabindex="parentTabGroup" class="w-1/3 rounded mx-2 my-2 bg-gray-700" @keyup.enter="enterClicked()">
        <div class="flex justify-between bg-gray-600 p-2"
            :tabindex="tabGroup"
        >
            <h3 :id="entity.model" class="text-sm text-gray-200 font-bold cursor-pointer">{{ entity.model }}</h3>
        </div>
        <div :tabindex="tabGroup" class="bg-gray-700 text-gray-500 text-xs m-2">
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
            parentTabGroup_: 'entities',
            tabGroup_: '',
            isFocused: false,
        }
    },
    computed: {
        parentTabGroup()
        {
            return this.$store.state.tabgroup === this.parentTabGroup_ ? '0' : '-1';
        },        
        tabGroup()
        {
            return this.$store.state.tabgroup === this.tabGroupId ? '0' : '-1';
        },
        tabGroupId()
        {
            return this._uid
        },
    },
    methods: {
        focusChanged (event) {
            const el = event.target
            // do something with the element.
            console.log(
                el
            )
        },
        enterClicked(){
            this.$store.commit('setTabGroup', this._uid);
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