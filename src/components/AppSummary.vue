<template>
    <div v-if="this.$store.state.app" class="flex flex-col px-4 my-2 w-full justify-center text-gray-200">
        <div class="overflow-hidden text-gray-200 sm:rounded-lg">
            <div class="flex justify-between px-4 py-5 border-b border-gray-200 sm:px-6">
                <div class="flex">
                    <div class="text-lg leading-6 font-medium text-gray-200">
                        {{ this.$store.state.app.name }}
                    </div>
                    <div class="ml-2 mt-1 max-w-2xl text-xs leading-5 text-gray-500">
                        {{ this.$store.state.project }}
                    </div>
                </div>
                <div class="text-xs text-white px-3 py-1 rounded bg-gray-700">
                    laravel/framework {{ this.$store.state.app.version }}
                </div>
            </div>           
        </div>        
    </div>
    <div v-else class="flex items-center justify-center text-5xl text-white">
        <span><i class="fa fa-spinner fa-spin" aria-hidden="true"></i></span>
    </div>
</template>

<script>
export default {
    methods: {
        //
    }
}
</script>