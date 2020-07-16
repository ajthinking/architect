<template>
    <div v-if="this.$store.state.app" class="flex flex-col w-full justify-center text-gray-400">
           <div class="container mx-auto p-8">
                <div class="flex flex-row flex-wrap -mx-2">
                    <div class="w-full lg:w-full md:h-auto mb-4 px-2">
                        <div class="block w-full h-full bg-gray-700 p-4">
                            <div class="font-bold text-xl text-gray-200">
                                {{ this.$store.state.app.name }}
                            </div>
                            <div class="font-bold text-xs">
                                {{ this.$store.state.project }}
                            </div>
                            <div class="font-bold text-xs">
                                laravel/framework {{ this.$store.state.app.version }}
                            </div>
                            <hr class="my-2 bg-red-500 text-red-500">
                            <div class="block w-full px-4 mb-1 pt-4 text-xs">
                                <span class="text-green-400 mr-2"><i class="fas fa-check"></i></span> Bootstrap successful
                            </div>
                            <div class="block w-full px-4 mb-1 text-xs">
                                <span class="text-green-400 mr-2"><i class="fas fa-check"></i></span> Strategy: Database
                            </div>
                            
                            <div class="block w-full px-4 mb-1 text-xs hover:underline hover:cursor-pointer">
                                <span class="text-green-400 mr-2"><i class="fas fa-check"></i></span>12 models
                            </div>                            
                            <div class="block w-full px-4 mb-1 text-xs">
                                <span class="text-yellow-400 mr-2"><i class="fas fas fa-exclamation-triangle"></i></span> APP_NAME has not been set
                            </div>    
                            <div class="block w-full px-4 mb-1 text-xs">
                                <span class="text-red-400 mr-2"><i class="fas fa-times"></i></span>4 unparsable files
                            </div>                                                                                                                
                        </div>
                    </div>
                    <div class="w-full lg:w-full md:h-auto mb-4 px-2">
                        <div class="flex w-full h-full bg-gray-700 p-4">
                            <div class="font-bold text-xs text-gray-200 border px-4 py-2 rounded mx-1">
                                <span class="text-white-400 mr-2"><i class="fas fa-sync-alt"></i></span>Sync
                            </div>
                            <div class="font-bold text-xs text-gray-200 border px-4 py-2 rounded  mx-1">
                                <span class="text-white-400 mr-2"><i class="fas fa-plus"></i></span>Duplicate
                            </div>                                                                                                                                         
                        </div>
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
    },
    components: {
        //
    }
}
</script>