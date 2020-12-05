<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MainNavigation/>
    <OfertServices/>
    <ColombiaNews/>
    <TeamMembers/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MainNavigation from "./components/MainNavigation";
import OfertServices from "./components/MainNavigation";
import ColombiaNews from "./components/MainNavigation";
import TeamMembers from "./components/MainNavigation";

export default {
  name: "App",
  components: {
    HelloWorld,
    MainNavigation,
    OfertServices,
    ColombiaNews,
    TeamMembers
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
