<template>
  <div id="app">
    <!-- <img alt="Welcome team 28" src="./assets/img/MisionTIC.jpg" /> -->    
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
    <!-- Team <TeamMembers/> -->
    <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Un increible equipo</h2>
                    <h3 class="section-subheading text-muted">Tripulacion MisionTic2022 #elegidosparatriunfar.</h3>
                </div>
                    
                <div class="row">
                    <div class="col-3" v-for="(item, index) of equipo" :key="index">
                        <team-card :member="item"></team-card>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <p class="large text-muted">El Motivante del desarrollo.</p>
                    </div>
                </div>
            </div>
    </section>
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
//import TeamMembers from "./components/TeamMembers";
import TeamCard from "./components/TeamCard";
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
    //TeamMembers,
    TeamCard,
    AboutUs,
    OurClients,
    FormContact,
    FooterContent
  },
  // Miembros grupo 28
  data() {
    return {
      equipo: [''],
    };
  },
  methods: {
      getJson: function (){
          axios.get(
              "../data/miembrosEquipo.json"
          )
          .then((response) => {
            (this.equipo = response.data),
            console.log(this.equipo)
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false) 
      }
  },
  mounted() {
    this.getJson();
  },
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