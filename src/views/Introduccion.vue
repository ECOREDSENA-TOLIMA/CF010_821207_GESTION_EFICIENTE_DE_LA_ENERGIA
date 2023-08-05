<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.cajon.color-primario.p-3.mb-4
      .col-md-8.col-12(data-aos="fade-right")
        p #[b ¡Bienvenido al componente "Contexto normativo aplicable al sector energético"!]
        p En este componente, exploraremos el fascinante mundo de la normativa y su aplicación en el sector energético. Comenzaremos a comprender qué es la normativa y cómo se aplica en diferentes contextos. 
        p Además, nos sumergiremos en la importancia de la economía circular y los Objetivos de desarrollo sostenible en Colombia. Analizaremos cómo la economía circular impulsa la sostenibilidad y cómo los objetivos de desarrollo sostenible guiarán las acciones en busca de un futuro más responsable y equitativo. 
        p Luego, nos enfocaremos en el marco regulatorio y normativo específico del sector energético en Colombia. Exploraremos las leyes que rigen la producción, distribución y consumo de energía en el país, comprendiendo su impacto en el desarrollo energético sostenible. 
      .col-md-4.col-12(data-aos="fade-left")
        img(src="@/assets/curso/temas/intro/intro.svg", alt="alt")

    p(data-aos="fade-down") A medida que avanzamos, examinaremos los marcos regulatorios y normativos tanto a nivel nacional como internacional para la eficiencia energética y la gestión de la energía. Descubriremos cómo estas regulaciones impulsan prácticas más eficientes y responsables en el uso de recursos energéticos. 
    p(data-aos="fade-down") Además, exploraremos el emocionante campo de las fuentes de energías renovables no convencionales. Analizaremos las regulaciones a nivel nacional e internacional que promueven y regulan la adopción de energías limpias y sostenibles, como la solar, eólica, biomasa y más. 
    p(data-aos="fade-down") Por supuesto, no podemos dejar de lado los reglamentos técnicos que son fundamentales para garantizar la seguridad y calidad en el sector energético. Nos enfocaremos en el Reglamento Técnico de Instalaciones Eléctricas (RETIE), el Reglamento Técnico de Iluminación y Alumbrado Público (RETILAP), el Reglamento Técnico de Etiquetado (RETIQ) y el Reglamento Técnico de Sistemas e Instalaciones Térmicas (RETSIT). 
    p(data-aos="fade-down") Estamos contentos de contar con su participación en este componente formativo, donde exploraremos el contexto normativo que impulsa la transformación del sector energético hacia un futuro más sostenible y responsable. 
    
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
