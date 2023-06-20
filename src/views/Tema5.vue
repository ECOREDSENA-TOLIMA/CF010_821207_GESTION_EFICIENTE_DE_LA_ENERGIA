<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Marco regulatorio y normativo para las fuentes de energías renovables no convencionales a nivel internacional y nacional

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.py-5
      .col-12
        p.mb-5(data-aos="fade-right") Adicional a la base de datos del IEA sobre normativa nacional en energías renovables, el Ministerio de minas y energía puso a disposición de la ciudadanía los decretos que se han expedido en el marco de la reglamentación de la ley 1715 de 2014 así:
      .col-lg-12.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Página Web del Ministerio de Minas y Energía sobre normativa en energías renovables.</i> 
        figure
          img(src='@/assets/curso/temas/tema5/tema5-01.png')
          figcaption Nota.  https://www.minenergia.gov.co/energias-renovables-no-convencionales

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
