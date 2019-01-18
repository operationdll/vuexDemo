<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in saleProducts" :key="item.name" @click="reduce(1)">{{item.name}}/{{item.price}}</li>
    </ul>
    mapState
    <ul>
      <li v-for="item in mydate" :key="item.name" @click="reduce(1)">{{item.name}}/{{item.price}}</li>
    </ul>
    <router-link to="/test1/myid">test1</router-link>
    <a href="javascript:;" @click="goto">test2</a>
    <a href="javascript:;" @click="goto2">goto test2</a>
    <a href="javascript:;" @click="goto3">test3</a>
  </div>
</template>

<script>
import { mapActions,mapGetters, mapState} from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goto: function() {
      let userName = "李四";
      this.$router.push({ path: `/test2/${userName}` });
    },
    goto2: function() {
      this.$router.push({ name: "test2", params: { name: "张三" } });
    },
    goto3: function() {
      this.$router.push({ name: "test3", query: { name: "王五" } });
    },
    ...mapActions('hello',[
      'reduce'
    ])
  },
  computed: {
    ...mapGetters('hello',{
      saleProducts:"saleProducts"
    }),
    ...mapState({
      mydate: state => state.hello.products
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
