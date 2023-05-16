<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mr-4 
      .col-lg-7.col-12.pt-5.pr-4
        p Un requisito esencial para el inicio de la elaboración de cualquier sistema de gestión es la 
          span.clase-intro-text identificación de la matriz de requisitos legales
          span  aplicables al campo de acción del sistema de gestión. Y para lograr dicha identificación es necesario primero conocer qué es una Norma y cuáles son sus alcances.
      .col-lg-5.col-12.cajon.color-primario
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
