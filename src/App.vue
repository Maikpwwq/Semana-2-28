<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <MainNavigation msg="Welcome team 28"/>
    <OfertServices/>
    <ColombiaNews/>
    <TeamMembers/>
    <AboutUs/>
    <OurClients/>
    <FormContact/>
    <FooterContent/>
  </div>
</template>

<script>
import MainNavigation from "./components/MainNavigation";
import OfertServices from "./components/OfertServices";
import ColombiaNews from "./components/ColombiaNews";
import TeamMembers from "./components/TeamMembers";
import AboutUs from "./components/AboutUs";
import OurClients from "./components/OurClients";
import FormContact from "./components/FormContact"; 
import FooterContent from "./components/FooterContent"; 

export default {
  name: "App",
  components: {
    MainNavigation,
    OfertServices,
    ColombiaNews,
    TeamMembers,
    AboutUs,
    OurClients,
    FormContact,
    FooterContent
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
