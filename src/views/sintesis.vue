<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El tema tratado se centra en el contexto normativo aplicado al sector energético. Se explora la importancia de la normativa y sus aplicaciones en este ámbito, así como el impacto de la economía circular y los objetivos del desarrollo sostenible en Colombia en la industria energética. También se analiza el marco regulatorio y normativo tanto a nivel nacional como internacional para aspectos clave como la eficiencia energética, las energías renovables no convencionales y la gestión de la energía. Además, se mencionan los reglamentos técnicos específicos, como el RETIE, RETILAP, RETIQ y RETSIT, que establecen requisitos y estándares para diferentes aspectos del sector energético.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
