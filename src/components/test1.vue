<template>
  <div>
    asdasda id:{{id}}
    <ul>
      <li v-for="item in saleProducts" :key="item.name" @click="reduce(1)">{{item.name}}/{{item.price}}</li>
    </ul>
    mapState
    <ul>
      <li v-for="item in mydate" :key="item.name" @click="reduce(1)">{{item.name}}/{{item.price}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions("mys", ["reduce"])
  },
  computed: {
    ...mapGetters("mys", {
      saleProducts: "saleProducts"
    }),
    ...mapState({
      mydate: state => state.mys.products
    })
  }
};
</script>

<style scoped>
div {
  background: red;
}
</style>
