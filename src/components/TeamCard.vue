<template>
    <div section class="page-section bg-light" id="teamCard">
        <div class="row">
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="image" alt="nombre" title="nombre"/>
                    <h4>Charlitos</h4>
                    <p class="text-muted">{{rol}}</p>
                    <p class="">{{descripcion}}</p>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
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