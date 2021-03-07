<template>
  <div id="app">
    <Header></Header>
    <router-view ref="/"><Nav></Nav></router-view>

  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sect from "./components/section";
export default {
  components: { Header,Nav,Sect },

};
</script>

<style lang="less" src="./assets/css/app/app.less">
</style>