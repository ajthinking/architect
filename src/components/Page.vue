<template>
    <div class="w-full bg-gray-800">
        <component :is="activePage"></component>
    </div>
</template>

<script>

export default {
    computed: {
        activePage: function() {
            return this.$store.state.page ?? 'Splash';
        }
    }
}
</script>


