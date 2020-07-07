<template>
    <div class="w-full bg-gray-800">
        <component :is="this.$store.state.currentPage"></component>
    </div>
</template>

<script>

import AppSummary from './AppSummary.vue'

export default {
    components: {
        AppSummary
    }
}
</script>


