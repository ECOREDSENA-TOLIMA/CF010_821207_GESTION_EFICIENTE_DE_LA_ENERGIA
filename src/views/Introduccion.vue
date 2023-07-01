<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mr-4 
      .col-lg-7.col-12.pt-5.pr-4(data-aos="fade-right")
        p Un requisito esencial para el inicio de la elaboración de cualquier sistema de gestión es la #[strong identificación de la matriz de requisitos] legales aplicables al campo de acción del sistema de gestión. Y para lograr dicha identificación es necesario primero conocer qué es una Norma y cuáles son sus alcances.
      .col-lg-5.col-12.cajon.color-primario(data-aos="fade-left")
        img(src="@/assets/curso/temas/intro/intro.svg", alt="alt")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
