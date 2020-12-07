<template>
    <div class="team-member card" id="teamCard">
        
        <div class="d-flex justify-content-center p-2" >
            <img class="mx-auto rounded-circle" v-bind:src="member.image" alt="Fotografia del equipo" :title="member.nombre"/>
        </div>               
        
        <div class="card-body">
            <h4 class="card-title">{{ member.codigo }}.{{member.nombre}}</h4>
            <p class="text-muted">Rol: {{member.rol}}</p>
            <p class="card-text">{{member.descripcion}}</p>
        </div>                   
        
        <div class="card-footer">
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>    
        </div>      
        
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    };
</script>

<style scoped>

</style>