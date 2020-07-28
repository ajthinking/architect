<template>
    <div tabindex="0"  class="w-1/3 mx-2 my-2 bg-gray-700">
        <div class="flex justify-between bg-gray-600 p-2">
            <h3 v-if="active" tabindex="0" @keyup.enter="input()"
                class="text-sm text-gray-200 font-bold cursor-pointer"
                v-text="'New model'"></h3>
            <input v-else tabindex="0" @keyup.enter="input()"
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
            active: false
        }
    },
    methods: {
        input() {
            this.active = !this.active
        }
    }
}
</script>