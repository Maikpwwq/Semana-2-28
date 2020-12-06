<template>
  <div id="app">
    <img alt="Welcome team 28" src="./assets/img/MisionTIC.jpg" />
    <MainNavigation msg="Sprint semana 2"/>
    <OfertServices/>
    <section class="page-section bg-light" id="no">
        <!-- News Grid 2 x 2 -->
        <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Noticias recientes</h2>
                    <h3 class="section-subheading text-muted">Descubra los ultimos acontecimientos.</h3>
                </div>
                <div class="row text-center">
                
                  <colombia-news></colombia-news>
                  
                </div>
        </div>
    </section>
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
