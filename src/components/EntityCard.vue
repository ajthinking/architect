<template>
    <div :tabindex="groupedTabIndex" class="w-1/3 rounded mx-2 my-2 bg-gray-700" @keyup.enter="enterClicked()">
        <div class="flex justify-between bg-gray-600 p-2">
            <h3 :id="entity.model" class="text-sm text-gray-200 font-bold cursor-pointer">{{ entity.model }}</h3>
        </div>
        <div class="bg-gray-700 text-gray-500 text-xs m-2">
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
            tabgroup: 'entities',
            isFocused: false,
        }
    },
    computed: {
        groupedTabIndex()
        {
            return this.$store.state.tabgroup === this.tabgroup ? '0' : '-1';
        }
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
            if(this.isFocused) alert("HEY!!");
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