<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Reglamentos técnicos para el sector energía

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      div.col-12
        p Los reglamentos técnicos para el sector energía son:
    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
    .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-left")
      div.col-12
        p En Colombia en el sector energético se encuentran vigentes los siguientes reglamentos técnicos:

    Separador
    #t_6_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.1 Reglamento técnico de instalaciones eléctricas (RETIE)
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-10.col-md-8.col-12
        p En este reglamento, que entró en vigor el 1 de mayo de 2005 mediante resolución 180372, se establecen los requisitos que deben cumplir las instalaciones eléctricas y los productos usados en ellas para garantizar la seguridad de las personas, la vida animal y vegetal y la preservación del medio ambiente ante los riesgos de origen eléctrico.
      .col-lg-2.col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema6/tema6-01.svg', alt='')

    Separador
    #t_6_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.2 Reglamento técnico de iluminación y alumbrado público (RETILAP)
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-9.col-md-8.col-12
        p En este reglamento, que entró en vigencia el 10 de abril de 2010 mediante resolución 180265, se establecen los requisitos que deben cumplir los sistemas de iluminación y alumbrado público y los productos usados en ellos para garantizar los niveles y calidades de la energía luminosa necesaria para la actividad visual, la seguridad en el abastecimiento energético, la protección del consumidor y la preservación del medio ambiente ante los riesgos originados por la instalación y uso de sistemas de iluminación.
      .col-lg-3.col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema6/tema6-02.svg', alt='')

    Separador
    #t_6_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.3 Reglamento técnico de etiquetado (RETIQ)
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12
        p En este reglamento, que entró en vigor el 31 de agosto de 2016 mediante resolución 41012, se establecen los requisitos que deben cumplir en términos de consumo y eficiencia energética los productos que usan energía eléctrica y gas combustible para fomentar el uso racional y eficiente de la energía URE a través del uso obligatorio en los productos comercializados de etiquetas que informen de forma clara al consumidor sobre su desempeño energético. De esta manera se pretende impulsar la utilización de tecnología eficiente, orientar a los usuarios a preferir equipos de mejor desempeño e incrementar la oferta y demanda en el mercado de dichos equipos.
        p Un ejemplo de etiqueta energética se muestra en la siguiente figura:
      .col-lg-4.col-md-6.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] #[i Ejemplo de etiqueta energética] 
        figure
          img(src='@/assets/curso/temas/tema6/tema6-03.png', alt='')  
    
    .row.mt-5.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12
        p El tamaño de la etiqueta debe corresponder al del formato A6 (105 x 148 mm) y podrá reducirse en los casos contemplados en el numeral 6.2 del reglamento a los formatos A7 (74 x 105 mm) o A8 (52 x 74 mm).
        p La información energética exigida en la etiqueta debe ser certificada por un organismo acreditado en las condiciones de ensayo específicas para cada producto y corresponden a:
      .col-12.mt-4
        p Complementa tu estudio sobre el Reglamento técnico de etiquetado (RETIQ) revisando el siguiente documento:
    
    .row.justify-content-center.align-items-center.mt-0.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema4/descargar.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Reglamento técnico de etiquetado (RETIQ)
                  p.mb-0.text-small Reglamento que donde se establecen los requisitos que deben cumplir en términos de consumo y eficiencia energética los productos que usan energía eléctrica y gas combustible.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-etiquetado-retiq/" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador
    #t_6_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.4 Reglamento Técnico de Sistemas e Instalaciones Térmicas (RETSIT)
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12
        p En este reglamento, que actualmente se encuentra en etapa de implementación, se establecen los requisitos que deben cumplir las instalaciones térmicas y los productos usados en ellas para garantizar la seguridad, el desempeño energético y la protección del medio ambiente integrando las iniciativas asociadas a los proyectos de reglamento de instalaciones térmicas RITE, de reglamento de calderas RTC del Ministerio de minas y energía y del proyecto "Distritos Térmicos en Colombia" del Ministerio de Ambiente y Desarrollo Sostenible.

</template>

<script>
export default {
  name: 'Tema6',
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
