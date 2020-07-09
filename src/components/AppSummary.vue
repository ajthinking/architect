<template>
    <div v-if="this.$store.state.app" class="flex flex-col px-4 py-8 w-full justify-center text-gray-200">
        <div>{{ this.$store.state.project }}</div>
        <div>{{ this.$store.state.app.name }}</div>
        <div>{{ this.$store.state.app.version }}</div>
        <div>{{ this.$store.state.app.database }}</div>
        <div>{{ this.$store.state.app.url }}</div>
    </div>
    <div v-else class="border border-dashed text-white m-8 p-4 text-sm font-bold">
        Hey load a project
    </div>
</template>

<script>
export default {
    methods: {
        //
    }
}
</script>