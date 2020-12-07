<template>
    <!-- Team-->
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
</template>

<script>
import TeamCard from "./TeamCard";
//import miembrosEquipo from "./";

    export default {
        name: "TeamMembers",
        components: {
            TeamCard
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

<style scoped>

</style>