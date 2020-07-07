<template>
  <div class="flex w-full min-h-full">
      <div class="flex flex-col items-center mx-4 bg-gray-800 min-h-full text-white">
          <i class="fas fa-folder-open my-3"></i>
          <i class="fas fa-plus my-3 text-orange-300 hover:text-yellow-600"></i>
          <i class="fas fa-project-diagram my-3 text-orange-300  hover:text-yellow-600"></i>
          <i class="fas fa-columns my-3 text-orange-300  hover:text-yellow-600"></i>
          <i class="fas fa-code-branch my-3 text-orange-300  hover:text-yellow-600"></i>
          <i class="fas fa-sync my-3 text-orange-300  hover:text-yellow-600"></i>
          <i class="far fa-comment my-3 text-orange-300  hover:text-yellow-600"></i>
          <i class="fas fa-wrench my-3 text-orange-300  hover:text-yellow-600"></i>
          <i class="fab fa-twitter my-3 text-orange-300  hover:text-yellow-600"></i>
      </div>
      <div class="w-full bg-gray-700"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
