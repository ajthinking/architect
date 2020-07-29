<template>
    <div tabindex="0" class="w-1/3 rounded mx-2 my-2 bg-gray-700" @keyup.enter="enterClicked()">
        <div class="flex justify-between bg-gray-600 p-2">
            <h3 tabindex="0" :id="entity.model" class="text-sm text-gray-200 font-bold cursor-pointer">{{ entity.model }}</h3>
        </div>
        <div class="bg-gray-700 text-gray-500 text-xs m-2">
            <ul class="">
                <li v-for="column in entity.columns" v-bind:key="column.name"
                    tabindex="0"
                    class="flex"
                >
                    <div tabindex="0" class="mr-2">{{ column.name }}</div>
                    <div tabindex="0" class="mr-2">string</div>
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
            isFocused: false,
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
        }
    },
    created() {
        document.addEventListener('focusin', this.focusChanged)
    },
    beforeDestroy() {
        document.removeEventListener('focusin', this.focusChanged)
    },    
}
</script>