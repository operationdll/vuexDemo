<template>
  <div>
    33333 name:{{name}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:this.$route.query.name
    }
  }
}
</script>

<style scoped>
div{
  background: yellow;
}
</style>
