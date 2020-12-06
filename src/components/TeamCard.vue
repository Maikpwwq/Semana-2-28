<template>
  <div class="team-member">
    <img
      class="mx-auto rounded-circle"
      v-bind:src="member.image"
      alt="Carlos Ruiz"
    />
    <h4>{{ member.codigo }}. {{ member.nombre }}</h4>
    <p class="text-muted">{{ member.rol }}</p>
    <p class="large text-muted">{{ member.descripcion }}</p>
    <a class="btn btn-dark btn-social mx-2" href="#!"
      ><i class="fab fa-twitter"></i
    ></a>
    <a class="btn btn-dark btn-social mx-2" href="#!"
      ><i class="fab fa-facebook-f"></i
    ></a>
    <a class="btn btn-dark btn-social mx-2" href="#!"
      ><i class="fab fa-linkedin-in"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"]
};
</script>

<style scoped>

</style>