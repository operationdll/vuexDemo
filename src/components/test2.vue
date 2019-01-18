<template>
  <div>
    2222p name:{{name}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:this.$route.params.name
    }
  }
}
</script>

<style scoped>
div{
  background: yellow;
}
</style>
