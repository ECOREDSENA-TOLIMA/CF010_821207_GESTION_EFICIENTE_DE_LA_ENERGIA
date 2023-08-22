<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 ¿Qué es normativa y cuáles son sus aplicaciones?
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Normativa
      div.col-12
        p Desde una perspectiva general se puede decir que la normativa es un fenómeno de la sociedad humana que algunas veces se usa para evaluar o emitir juicios sobre el comportamiento o los resultados y otras veces para describir lo que se hace normalmente o lo que se espera que la mayoría de los demás hagan en la práctica.
        p Revise la siguiente presentación que dará mayor información sobre normativa: 

    .tarjeta.tarjeta--gris.p-4(data-aos="fade-down")
      PasosB.color-acento-contenido
        .row
          .col-md-6.mb-4.mb-md-0
            p Dada la inmensa variabilidad del ser humano, se requiere de un consenso que establezca la figura de autoridad para que prescriba las reglas que regulan el comportamiento humano mediante el otorgamiento de derechos y declaración de deberes a cada uno de los integrantes del grupo social. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Cuando el grupo social es un estado, la figura de autoridad máxima es la constitución política del país y del ejercicio de los principios allí consagrados y conforme a las circunstancias que se van presentando, se expiden las reglas necesarias, conocidas como Leyes, Decretos y Resoluciones, para regular las actividades asociadas a cada aspecto en particular. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Las leyes son expedidas por el poder legislativo (Congreso), y son de carácter definitorio y los decretos son expedidos por el poder ejecutivo (Presidencia) y son generalmente de carácter reglamentario, es decir establecen cómo se aplican las leyes. Las resoluciones, como su nombre lo indica, son actos de una autoridad mediante los cuales se resuelve una petición o se ordena el cumplimiento de una medida.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Uno de los aspectos más importantes a tener en cuenta a la hora de regular, es el del uso y explotación de los recursos naturales, especialmente los de contenido energético. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')

    .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-right")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Normativa Energética
    .row.justify-content-center.mt-4.mb-5(data-aos="fade-right")
      .col-lg-8.col-12(data-aos="fade-down")
        p En términos muy generales, la normativa energética produce una regulación con el fin de garantizar la competencia efectiva del mercado y se considera necesaria para proteger a los consumidores, la sociedad y / o el medio ambiente.
        p El principal objetivo de la regulación de los sectores de infraestructura (sectores de servicios públicos) como la energía es, en general, garantizar una competencia adecuada y evitar el crecimiento de un grupo dominante o de un solo servicio público que preste servicios en cualquiera de las funciones; en esencia, se trata de un intento de mantener bajos los precios.
        p En los siguientes recursos podrá ampliar información de una manera detallada:
      .col-lg-4.col-12
        img(src="@/assets/curso/temas/tema1/tema1-01.svg")

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4.text-center A menudo se sugiere que:
              p.text-center “La competencia es el mejor regulador”, es decir, que la competencia efectiva conducirá al funcionamiento más eficiente del mercado, ya que las empresas reciben incentivos para satisfacer las necesidades de los consumidores. No significa necesariamente que donde exista competencia, la regulación ya no sea necesaria.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4.text-center En los mercados no liberalizados
              p.text-center El grado de regulación con las normas es una decisión política directa y está explícitamente relacionado con los objetivos de la política. En teoría, la introducción de la competencia a menudo se ha visto como una forma de reducir la regulación.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4.text-center En un sentido puramente económico
              p.text-center La regulación en mercados competitivos sólo necesita aplicarse cuando los beneficios de hacerlo actúan para reducir el costo para el consumidor en mayor grado que si la regulación no existiera, por ejemplo, para limitar el abuso del mercado.

    //- SlyderF(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
    //-   .tarjeta.cajon.color-primario.p-4
    //-     .row.justify-content-center.mb-3
    //-       .col-8.col-lg-6
    //-         img(src='@/assets/curso/temas/tema1/tema1-05.svg' alt='AvatarTop')
    //-     h2.text-center A menudo se sugiere que:
    //-     p.text-center “La competencia es el mejor regulador”, es decir, que la competencia efectiva conducirá al funcionamiento más eficiente del mercado, ya que las empresas reciben incentivos para satisfacer las necesidades de los consumidores. No significa necesariamente que donde exista competencia, la regulación ya no sea necesaria.
    
    //-   .tarjeta.cajon.color-primario.p-4
    //-     .row.justify-content-center.mb-3
    //-       .col-8.col-lg-6
    //-         img(src='@/assets/curso/temas/tema1/tema1-03.svg' alt='AvatarTop')
    //-     h2.text-center En los mercados no liberalizados
    //-     p.text-center El grado de regulación con las normas es una decisión política directa y está explícitamente relacionado con los objetivos de la política. En teoría, la introducción de la competencia a menudo se ha visto como una forma de reducir la regulación.

    //-   .tarjeta.cajon.color-primario.p-4
    //-     .row.justify-content-center.mb-3
    //-       .col-8.col-lg-6
    //-         img(src='@/assets/curso/temas/tema1/tema1-04.svg' alt='AvatarTop')
    //-     h2.text-center En un sentido puramente económico
    //-     p.text-center La regulación en mercados competitivos sólo necesita aplicarse cuando los beneficios de hacerlo actúan para reducir el costo para el consumidor en mayor grado que si la regulación no existiera, por ejemplo, para limitar el abuso del mercado.

    .tarjeta.tarjeta--azul.p-4.my-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p  Es posible que se requiera reglamentación para garantizar que se mantenga una competencia efectiva, por ejemplo, para evitar comportamientos anticompetitivos de empresas con poder de mercado que puedan dañar a los consumidores y competidores. También puede ser necesaria la reglamentación para garantizar que se presten determinados servicios o bienes cuando la competencia por sí sola no lo garantice.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-06.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p En general, los mercados están regulados para garantizar la eficiencia económica y mitigar las fallas del mercado para garantizar que se proporcionen o protejan los bienes y servicios socialmente deseables. Brevemente, los motivos de la regulación en mercados competitivos se pueden enumerar como:
            ul
              li ●   Eficiencia económica (por ejemplo, prevención del abuso del mercado).
              li ●   Protección del consumidor (por ejemplo, para mantener bajos los precios).
              li ●   Protección del medio ambiente (por ejemplo, para reducir emisiones nocivas como CO2, SO2, NOx, etc.).
              li ●   Justicia social (por ejemplo, para garantizar el suministro universal).
              li ●   Seguridad de suministro (para mantener las luces encendidas).
            p La mayoría de estos motivos también podrían aplicarse a la regulación en mercados no competitivos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-07.png', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            p Puede que aumenten los precios de la energía, pero a más largo plazo, con las nuevas tecnologías cada vez más baratas (a través de los efectos del aprendizaje) y el aumento de los precios del petróleo, bien pueden dar lugar a una reducción de los precios. De manera similar, la conveniencia social de garantizar el suministro universal puede aumentar los precios, pero esto debe equilibrarse con una mejor calidad de vida para los ciudadanos, por ejemplo. por la reducción de la pobreza mediante la generación de empleo, por la mejora de la salud y los beneficios ambientales.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-08.png', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            p Sin duda alguna, equilibrar estos problemas será un desafío, y los políticos y los responsables de la formulación de políticas podrían abordarlos de manera más apropiada que los reguladores.
            p Sin embargo, la puesta en práctica de las políticas es tarea del regulador y, en la práctica, muchas opciones de medidas y reglas afinarán el equilibrio de los objetivos de la política. Entonces, si bien la regulación podría verse institucionalmente separada de la decisión política de cómo equilibrar los objetivos de las políticas, en el mundo real, es muy posible que los reguladores decidan sobre cuestiones específicas caso por caso.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-09.png', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            p Los reguladores también están involucrados en asesorar a los formuladores de políticas sobre opciones de políticas, debido a su experiencia en economía y en los aspectos prácticos de diseñar y monitorear reglas para implementar políticas. Por lo tanto, son participantes en el debate sobre la elección de políticas, a menudo con un grado considerable de influencia y, por lo tanto, no solo están implementando políticas que se formulan en otros lugares.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='Texto que describa la imagen')
        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
