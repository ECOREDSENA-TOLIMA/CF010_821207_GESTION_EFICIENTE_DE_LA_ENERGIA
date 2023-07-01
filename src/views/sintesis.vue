<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El mapa conceptual aborda el tema del contexto normativo aplicado al sector energético. Comienza con una definición de normativa y sus aplicaciones. Luego, se exploran dos subtemas principales: la economía circular y los objetivos del desarrollo sostenible en Colombia. Estos subtemas se desglosan en economía circular y objetivos del desarrollo sostenible en Colombia como nodos separados. A continuación, se aborda el marco regulatorio y normativo del sector energético en Colombia, seguido por los marcos regulatorios y normativos tanto a nivel internacional como nacional para la eficiencia energética y la gestión de la energía, así como para las fuentes de energías renovables no convencionales.
    p Finalmente, se presentan los reglamentos técnicos específicos relacionados con el sector energético, como el Reglamento Técnico de Instalaciones Eléctricas (RETIE), el Reglamento Técnico de Iluminación y Alumbrado Público (RETILAP), el Reglamento Técnico de Etiquetado (RETIQ) y el Reglamento Técnico de Sistemas e Instalaciones Térmicas (RETSIT). El mapa proporciona una visión general de los temas principales y las relaciones entre ellos en el contexto normativo del sector energético.

    .row.justify-content-center
      .col-12.mb-5
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
