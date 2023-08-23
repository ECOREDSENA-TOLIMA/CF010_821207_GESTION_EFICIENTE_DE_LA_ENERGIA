<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Marco regulatorio y normativo para las fuentes de energías renovables no convencionales a nivel internacional y nacional

    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12
        p Adicional a la base de datos del IEA sobre normativa nacional en energías renovables, el Ministerio de Minas y energía puso a disposición de la ciudadanía los decretos que se han expedido en el marco de la reglamentación de la ley 1715 de 2014 así:

    .tarjeta.tarjeta--azul.p-4.my-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p Para consultar la normatividad internacional (global) sobre energías renovables se deben configurar en el menú de filtros de la página web del IEA el de “Tópico” en “Energía renovable”, el de “Estado” en “Vigente” y el de Jurisdicción en “Internacional”, como se muestra a continuación:
          .col-lg-8.col-12
            .titulo-sexto.color-acento-botones
              p.titulo.pb-0.mb-0 <b>Figura 9.</b> <i>Página Web de consulta de Normativa Eficiencia Energética internacional</i>
            figure
              img(src='@/assets/curso/temas/tema5/1.svg', alt='', @click="modal1 = true, imagen = 'tema4-01.svg'")
              figcaption Página Web de consulta de Normativa Eficiencia Energética internacional

        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p Para consultar la normatividad NACIONAL sobre eficiencia energética, en la misma página del IEA, se deben configurar en el menú de filtros el de “Tópico” en “Eficiencia energética”, el de “Estado” en “Vigente”, el de Jurisdicción en “Centro y Sur América” y el de “País” en “Colombia”, como se muestra:
          .col-lg-8.col-12
            .titulo-sexto.color-acento-botones
              p.titulo.pb-0.mb-0 <b>Figura 10.</b> <i>Página web de consulta respecto a normativa nacional de energías renovables</i>
            figure
              img(src='@/assets/curso/temas/tema5/2.svg', alt='', @click="modal1 = true, imagen = 'tema4-02.png'")
              figcaption Página Web de consulta de Normativa Eficiencia Energética Nacional

        .row
          .col-md-4.col-12.mb-4.mb-md-0
            p La ley 1715 de 2014 por medio de la cual se regula la integración de las energías renovables no convencionales al Sistema Energético Nacional y se promueve la gestión eficiente de energía.
          .col-md-8.col-12
            figure
              img(src='@/assets/curso/temas/tema5/3.png', alt='', @click="modal1 = true, imagen = 'tema4-03.png'")
              
        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p Establece incentivos tributarios para los contribuyentes que realicen de forma directa inversiones en investigación y desarrollo de proyectos para la producción de energía a partir de Fuentes Naturales No Convencionales (FNCE), así:
            p a. Deducción del impuesto de renta de hasta el 50% del valor de la inversión del proyecto. (artículo 11)
            p b. Depreciación de los activos relacionados con el proyecto hasta el 20% anual (artículo 14)
            p c. Exclusión del pago del impuesto al valor agregado IVA en los bienes y servicios del proyecto (artículo 12)
            p d. Exención de pago de arancel de importación de equipos con tecnología en FNCE del proyecto.
          .col-lg-8.col-12
            figure
              img(src='@/assets/curso/temas/tema5/4.png', alt='', @click="modal1 = true, imagen = 'tema4-04.png'")

        

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
