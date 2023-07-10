<template>
  <div class="hello">
    <div>
      <span>{{ msg }}</span>
      <span>{{ msg1 }}</span>
      <button class="btn" @click="changeMsg">click me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "vue test",
      msg1: "hello",
    };
  },
  created() {
    this.msg = "aftermounted";
  },
  mounted() {
    this.msg1 = "test mounted";
  },
  methods: {
    changeMsg() {
      this.msg = "click over";
    },
  },
};
</script>

<style scoped>
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
