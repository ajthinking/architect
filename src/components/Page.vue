<template>
    <div class="w-full bg-gray-800">
        <component :is="activePage"></component>
    </div>
</template>

<script>

import AppSchema from './AppSchema.vue'
import AppSummary from './AppSummary.vue'
import Entity from './Entity.vue'
import Splash from './Splash.vue'

export default {
    components: {
        AppSchema,
        AppSummary,
        Entity,
        Splash,
    },
    computed: {
        activePage: function() {
            return this.$store.state.page ?? 'Splash';
        }
    }
}
</script>


