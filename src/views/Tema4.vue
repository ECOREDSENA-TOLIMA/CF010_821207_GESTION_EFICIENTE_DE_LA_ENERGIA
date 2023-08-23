<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Marco regulatorio y normativo para la eficiencia energética y gestión de la energía a nivel internacional y nacional

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12
        p Revise el siguiente recurso, que le expondrá el marco normativo y regulatorio.

    .tarjeta.tarjeta--azul.p-4.my-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p El principio de conservación de la energía establece que esta no se crea ni se destruye, solo se transforma. En forma general un proceso de transformación involucra una energía de algún tipo en la entrada, una en la salida y otra (generalmente calor) correspondiente al costo energético de la transformación como se muestra a continuación:
          .col-lg-8.col-12
            .titulo-sexto.color-acento-botones
              p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Página Web de consulta de Normativa Energética</i>
            figure
              img(src='@/assets/curso/temas/tema4/tema4-01.svg', alt='', @click="modal1 = true, imagen = 'tema4-01.svg'")
              figcaption Proceso de transformación de energía.

        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p Se define como eficiencia del proceso de transformación a la fracción de la energía de entrada que efectivamente se obtiene en la salida del dispositivo.
          .col-lg-8.col-12
            figure
              img(src='@/assets/curso/temas/tema4/tema4-02.png', alt='', @click="modal1 = true, imagen = 'tema4-02.png'")
        
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            p El aumento de la eficiencia energética se aborda desde dos perspectivas:
            p a. Eficiencia en la fuente primaria: la estrategia de esta perspectiva se orienta en la naturaleza de la energía de entrada, reemplazando las fuentes no renovables por fuentes renovables de energía, que si bien es cierto no aumentan el porcentaje de eficiencia, se obtienen resultados positivos en la preservación del medio ambiente y en el aseguramiento del abastecimiento energético.
            p.mb-0 b. Eficiencia en el uso final: la estrategia de esta perspectiva se orienta en el uso y desarrollo de nuevas tecnologías que mejoren la eficiencia del proceso de conversión energético, obteniendo más energía en la salida a partir de la misma cantidad de energía en la entrada.
            p En esta estrategia la normatividad global y local se enfocan en establecer metas escalonadas en el tiempo en la mejora de eficiencia energética de los equipos y aparatos de uso final.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema4/tema4-03.png', alt='', @click="modal1 = true, imagen = 'tema4-03.png'")
              
        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p El sitio web de la Agencia Internacional de energía IEA (#[i International Energy Agency]) dispone de una base de datos de consulta muy completa sobre la normatividad energética a nivel mundial.
            p Para consultar la normatividad internacional (global) sobre eficiencia energética se deben configurar en el menú de filtros el de “Tópico” en “Eficiencia energética”, el de “Estado” en “Vigente” y el de Jurisdicción en “Internacional”, como se muestra:
          .col-lg-8.col-12
            .titulo-sexto.color-acento-botones
              p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Página web de consulta de Normatividad Eficiencia Energética Internacional</i>
            figure
              img(src='@/assets/curso/temas/tema4/tema4-04.png', alt='', @click="modal1 = true, imagen = 'tema4-04.png'")
              figcaption Página Web de consulta de Normativa Eficiencia Energética internacional

        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p Para consultar la normatividad NACIONAL sobre eficiencia energética, en la misma página del IEA, se deben configurar en el menú de filtros el de “Tópico” en “Eficiencia energética”, el de “Estado” en “Vigente”, el de Jurisdicción en “Centro y Sur América” y el de “País” en “Colombia”, como se muestra:
          .col-lg-8.col-12
            .titulo-sexto.color-acento-botones
              p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Página web de consulta de Normatividad Eficiencia Energética Internacional</i>
            figure
              img(src='@/assets/curso/temas/tema4/tema4-05.png', alt='', @click="modal1 = true, imagen = 'tema4-05.png'")
              figcaption Página Web de consulta de Normativa Eficiencia Energética Nacional

        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p Mediante La ley 697 de 2001 se declara en Colombia el Uso Racional y Eficiente de la Energía (URE) como un asunto de interés social, público y de conveniencia nacional, se crea el programa PROURE para que gradualmente toda la cadena energética, esté cumpliendo permanentemente con los niveles mínimos de eficiencia energética y se establecen los estímulos y sanciones aplicables a las personas naturales y jurídicas de acuerdo con el nivel de implementación del URE al interior de su organización.
          .col-lg-8.col-12
            figure
              img(src='@/assets/curso/temas/tema4/tema4-06.png', alt='', @click="modal1 = true, imagen = 'tema4-06.png'")

        .row
          .col-lg-4.col-12.mb-4.mb-md-0
            p El primer nivel en las metas indicativas de eficiencia energética se estableció en la resolución 180919 de 2010, mediante la adopción del Plan de Acción Indicativo PAI-PROURE 2010-2015 y el segundo nivel de las mismas metas se estableció en la resolución 41216 de 201, mediante la adopción del Plan de Acción Indicativo PAI-PROURE 2010-2015 el cual se encuentra vigente.
            p Las actuales metas de ahorro de energía por sector son:
          .col-lg-8.col-12
            .titulo-sexto.color-acento-botones
              p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Metas de los indicadores de ahorro de energía 2017- 2022.</i>
            figure
              img(src='@/assets/curso/temas/tema4/7.svg', alt='', @click="modal1 = true, imagen = 'tema4-07.png'")
              figcaption Metas indicativas de ahorro de energía 2017 - 2022, Plan de acción indicativo PAI-PROURE 2017-2022 p. 45

    .row(data-aos="fade-left")
      .col-12
        p Para complementar el marco regulatorio y normativo lo invitamos a que consulte el siguiente documento:

    .row.justify-content-center.align-items-center.mt-4(data-aos="fade-right")
      .col-lg-10.col-12
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema4/descargar.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Plan de acción indicativo PAI-PROURE 2017-2022
                  p.mb-0.text-small Se presenta el documento de plan de acción indicativo donde se pueden revisar el Marco regulatorio y normativo para la eficiencia energética y gestión de la energía a nivel internacional y nacional.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www1.upme.gov.co/DemandaEnergetica/MarcoNormatividad/PAI_PROURE_2017-2022.pdf" target="_blank")
                    span(style="color:black") Descargar
                    i(style="color:black").fas.fa-file-download
      .col-12.mt-5.mb-5
        p La ley 1715 de 2014 por medio de la cual se regula la integración de las energías renovables no convencionales al Sistema Energético Nacional y se promueve la gestión eficiente de energía, establece incentivos tributarios para los contribuyentes que realicen de forma directa inversiones en investigación y desarrollo de proyectos para utilización eficiente de la energía, así:

    .row.justify-content-center.mt-0.mb-4
      .col-lg-4.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-right")
        .tarjeta-avatar.col-12
          img(style="width: 80px;" src="@/assets/curso/temas/tema4/numero-1.svg")   
          .tarjeta.col-12.py-4.mb-4(style="background:#E4DAF7")
            p.mb-0.text-center.mt-1 Deducción del impuesto de renta de hasta el 50 % del valor de la inversión del proyecto. (artículo 11).
      .col-lg-4.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-left")
        .tarjeta-avatar.col-12
          img(style="width: 80px;" src="@/assets/curso/temas/tema4/numero-2.svg")   
          .tarjeta.col-12.py-4.mb-4(style="background:#CDFCFC")
            p.mb-0.text-center.mt-1 Depreciación de los activos relacionados con el proyecto hasta el 20 % anual (artículo 14).
      .col-lg-4.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-right")
        .tarjeta-avatar.col-12
          img(style="width: 80px;" src="@/assets/curso/temas/tema4/numero-3.svg")   
          .tarjeta.col-12.py-4.mb-4(style="background:#E4DAF7")
            p.mb-0.text-center.mt-1 Exclusión del pago del impuesto al valor agregado IVA en los bienes y servicios del proyecto (artículo 12).

    .row.justify-content-center.align-items-center.mt-4(data-aos="fade-right")
      .col-12.mb-4
        p Es indispensable en este punto, que revise la ley en referencia.
      .col-lg-10.col-12
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema4/descargar.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Ley 1715 de 2014
                  p.mb-0.text-small Marco ley por la cual se regula la integración de las energías renovables no convencionales al Sistema Energético Nacional y se promueve la gestión eficiente de energía.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="http://www.upme.gov.co/Normatividad/Nacional/2014/LEY_1715_2014.pdf" target="_blank")
                    span(style="color:black") Descargar
                    i(style="color:black").fas.fa-file-download

    .row.justify-content-center.align-items-center.mt-5 
      .col-12.mb-5(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 Finalmente, el Ministerio de Minas y energías a través de la Unidad de planeación minero-energética (UPME) desarrolló el sitio web Sistema de Información de Eficiencia Energética y energías alternativas (SI3EA) en donde se puede consultar la información oficial actualizada sobre el URE y las FNCE, como se muestra en la siguiente figura:
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 #[b Figura 8.] #[i Demanda y eficiencia energética] 
        figure
          img(src='@/assets/curso/temas/tema4/tema4-08.png', alt='')  
          figcaption Nota. https://www1.upme.gov.co/paginas/demanda-y-eficiencia-energetica.aspx

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-md-10.col-12
          figure
            img(:src="loadImg()", alt='')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    modal1: false,
    imagen: 'tema4-01.svg',
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    loadImg() {
      return require(`@/assets/curso/temas/tema4/${this.imagen}`)
    },
  },
}
</script>

<style lang="sass"></style>
