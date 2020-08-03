<template>
    <div v-if="this.$store.state.app" class="flex flex-col w-full justify-center text-gray-400">
           <div class="container mx-auto p-8 pt-2">
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

                            <div class="font-bold text-xs">
                                <span>{{ this.$store.state.app.env.DB_CONNECTION }}</span>
                                <span v-if="this.$store.state.app.env.DB_DATABASE">
                                    {{ this.$store.state.app.env.DB_DATABASE }}
                                </span>
                            </div>

                            <hr class="my-2 bg-red-500 text-red-500">
                            <div class="block w-full px-4 mb-1 pt-4 text-xs">
                                <span class="text-green-400 mr-2"><i class="fas fa-check"></i></span>Bootstrap successful
                            </div>
                            <!--<div class="block w-full px-4 mb-1 text-xs">
                                <span class="text-green-400 mr-2"><i class="fas fa-check"></i></span>Using strategy: {{ this.$store.state.app.schema.strategy_used}}
                            </div>-->
                            <div class="block w-full px-4 mb-1 text-xs">
                                <span class="text-green-400 mr-2"><i class="fas fa-check"></i></span>
                                <span class="font-bold">laravel/framework</span> version {{ this.$store.state.app.version }}
                            </div>                            
                            <div v-if="this.$store.state.app.can_connect_to_database" class="block w-full px-4 mb-1 text-xs">
                                <span class="text-green-400 mr-2"><i class="fas fa-check"></i></span>Database connection
                            </div>

                            <div v-else class="block w-full px-4 mb-1 text-xs">
                                <span class="text-red-400 mr-2"><i class="fas fa-times"></i></span>Could not connect to database
                            </div>                                                        
                            
                            <div class="block w-full px-4 mb-1 text-xs hover:underline hover:cursor-pointer">
                                <span class="text-green-400 mr-2"><i class="fas fa-check"></i></span>Found {{ this.$store.state.app.schema.entities.length }} models using strategy {{ this.$store.state.app.schema.strategy_used }}
                            </div>                            
                            <div v-if="this.$store.state.app.name == 'Laravel'" class="block w-full px-4 mb-1 text-xs">
                                <span class="text-yellow-400 mr-2"><i class="fas fas fa-exclamation-triangle"></i></span>APP_NAME has default value
                            </div>
                            <!--    
                            <div class="block w-full px-4 mb-1 text-xs">
                                <span class="text-red-400 mr-2"><i class="fas fa-times"></i></span>4 unparsable files
                            </div>-->
                        </div>
                    </div>
                    <div class="w-full lg:w-full md:h-auto mb-4 px-2">
                        <div class="flex w-full h-full bg-gray-700 p-4">
                            <div @click="sync" class="transition duration-700 cursor-pointer font-bold text-xs text-gray-200 border px-4 py-2 rounded mx-1">
                                <span class="text-white-400 mr-2"><i class="fas fa-sync-alt"></i></span>Sync
                            </div>
                            <!--
                            <div class="font-bold text-xs text-gray-200 border px-4 py-2 rounded  mx-1">
                                <span class="text-white-400 mr-2"><i class="fas fa-plus"></i></span>Duplicate
                            </div>                                                                                                                                         
                            -->
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
        sync() {
            const { ipcRenderer } = require('electron')
            ipcRenderer.send('open-project', this.$store.state.project)
        }
    },
}
</script>