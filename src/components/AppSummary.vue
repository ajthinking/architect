<template>
  <div class="flex w-full justify-center text-gray-200">
    {{ this.$store.state.currentProject }}
    
    <div v-for="model in this.$store.state.schema" v-bind:key="model"
        class="text-white text-xl px-12 py-4 m-8 border rounded"
    >
        {{ model }}
    </div>
  </div>
</template>

<script>
export default {

}
</script>