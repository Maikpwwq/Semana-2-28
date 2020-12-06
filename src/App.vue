<template>
  <div id="app">
    <img alt="Welcome team 28" src="./assets/img/MisionTIC.jpg" />
    <MainNavigation msg="Sprint semana 2" />
    <OfertServices />
    <ColombiaNews />

    <section class="page-section bg-light" id="team">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Un increible equipo</h2>
          <h3 class="section-subheading text-muted">
            Tripulacion MisionTic2022 #elegidosparatriunfar.
          </h3>
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

    <AboutUs />
    <OurClients />
    <FormContact />
    <FooterContent />

    <div class="container-fluid">
      <colombia-news></colombia-news>
    </div>
  </div>
</template>

<script>
import MainNavigation from "./components/MainNavigation";
import OfertServices from "./components/OfertServices";
import ColombiaNews from "./components/ColombiaNews";
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
    TeamCard,
    AboutUs,
    OurClients,
    FormContact,
    FooterContent,
  },
  data() {
    return {
      equipo: [
    {        
        codigo: 1,
        nombre: "Daniel Eslava",
        descripcion: "Ingeniero Industrial de la Escuela de Ingenieros con énfasis en proyectos, hobbie trompetista .",
        rol: "Ingeniero Indistrial / Desarrollador backend",
        image: "src/assets/img/integrantes/daniel.png"
    },
    {
        codigo: 2,
        nombre: "Carlos Ruiz",
        descripcion: "Ingeniero de sistemas de la Universidad Nacional de Colombia, experiencia en uso de framework php (Yii), hobbie bailar salsa.",
        rol: "Scrum Master",
        image: "src/assets/img/integrantes/carlos.ong"
    },
    {
        codigo: 3,
        nombre: "Michael Arias",
        descripcion: "Director de proyectos de ingeniería, Ingeniero mecánico de la Universidad Distrital Francisco José de Caldas",
        rol: "Desarrollador web (Ux-Ui)",
        image: "src/assets/img/integrantes/mike.jpeg"
    },
    {
        codigo: 4,
        nombre: "Heywin Meneses",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.",
        rol: "Desarrollador backend",
        image: "src/assets/img/integrantes/heywin.jpeg"
    }
]
    };
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
