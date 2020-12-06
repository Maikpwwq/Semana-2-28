<template>
  <div class="team-member">
    <img
      class="mx-auto rounded-circle"
      :src="member.imagen"
      alt="Avatar"
      title="Avatar"
    />
    <h4>{{ member.nombre }}</h4>
    <p class="text-muted">{{ member.rol }}</p>
    <p>{{ member.descripcion }}</p>
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