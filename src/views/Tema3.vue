<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Marco regulatorio y normativo del sector energético en Colombia

    .row.mb-4(data-aos="fade-left")
      .col-lg-4.col-12
        figure
          img(src='@/assets/curso/temas/tema3/tema3-01.svg')
      .col-lg-8.col-12
        p De acuerdo con el documento CONPES 3816 de 2014, el gobierno nacional en aras de asegurar la eficiencia económica y social del sistema legal compiló y racionalizó las normas preexistentes del sector energético a través de la expedición del Decreto Único Reglamentario 1073 de 2015 del sector administrativo de Minas y energía. Este decreto está dividido en tres libros.
        p En el libro uno establece la estructura institucional del sector minero energético enunciando las entidades adscritas y relacionadas tanto del nivel central como del sector descentralizado. En el libro dos se establece el régimen reglamentario aplicable a los cinco sectores en que se dividió la actividad minero-energética así: Sector de Hidrocarburos, Sector de Gas, Sector de energía eléctrica, de la energía nuclear y del Sector Minero. En el libro tres se encuentran notas sobre la derogatoria y vigencia de la ley. 
        p Para complementar este tema, le invitamos a que revise la siguiente información de los dos textos que le proponemos.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.cajon-tema3.py-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema3/tema3-02.svg', style="padding:1.2rem")
          .col-10
            .row
              .col-12.row.justify-content-center.align-items-center
                .col-md-9.col-12
                  h4 Decreto 1073 de 2015
                  p Decreto 1073 de 2015 junto a todas las adiciones y modificaciones desde su fecha de expedición hasta el 22 de abril de 2021.
                .col-md-3.col-12.text-right
                  a.boton.color-acento-contenido(:href="linkA" target="_blank") 
                    span(style="color:black") Ir al sitio web
                    i(style="color:black").fas.fa-link
              .col-12.row.justify-content-center.align-items-center
                .col-md-9.col-12
                  h4 Normativa
                  p Adicionalmente el Ministerio de Minas y Energía en su sitio web publicó un documento elaborado en excel denominado Normograma, en donde se compilan todas las normas que regulan sus actuaciones en desarrollo de su objeto misional.
                .col-md-3.col-12.text-right
                  a.boton.color-acento-contenido(:href="linkB" target="_blank") 
                    span(style="color:black") Ir al sitio web
                    i(style="color:black").fas.fa-link

    .row.mt-4(data-aos="fade-right")
      .col-12.mb-0
        .cajon.color-primario.p-4
          p.mb-0 También hay en el sitio web SYG #[i Energy] una página donde menciona las principales leyes  y normatividad general del sector eléctrico en Colombia, su link de acceso es 
            <a href="https://www.sygenergy.co/2021/09/05/normatividad-y-leyes-del-sector-electrico-colombiano/" class="color-link" target="_blank"> https://www.sygenergy.co/2021/09/05/normatividad-y-leyes-del-sector-electrico-colombiano</a> y aparece como muestra la siguiente figura:
            
    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.py-5
      .col-lg-12.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Página Web de consulta de Normativa Energética</i> 
        img(src='@/assets/curso/temas/tema3/tema3-03.png')   

    .row.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 Una línea de tiempo con la expedición de la normativa más relevante del sector de energía eléctrica en nuestro país se muestra a continuación.
      .col-12(data-aos="fade-right")
        p.py-4 #[strong Escala de tiempo Normativa energía eléctrica Colombia, Universidad Distrital Francisco José de Caldas, Regulación del sector energético, p. 28 y 29.]

    .tarjeta.tarjeta--gris.p-4(data-aos="fade-right")
      LineaTiempoC.color-secundario(text-small)
        .row.justify-content-center.align-items-center(titulo="1938")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Ley 126]
            p Por el cual interviene el Estado en el suministro de luz y fuerza eléctrica, con la adquisición de empresas de energia eléctrica.

        .row.justify-content-center.align-items-center(titulo="1994")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Ley 143]
            p Por la cual se establece la generación, interconexión, transmisión, distribución y comercialización de electricidad en el territorio nacional.

        .row.justify-content-center.align-items-center(titulo="1995")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Resolución 25]
            p Por la cual se establece el Código de Redes, como parte del Reglamento de Operación del Sistema Interconectado Nacional.

        .row.justify-content-center.align-items-center(titulo="1997")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Resolución 108]
            p Por la cual se señalan la protección de los derechos de los usuarios de los servicios públicos domiciliarios de energía eléctrica y gas combustible por red física, facturación, comercialización. 

        .row.justify-content-center.align-items-center(titulo="1998")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Resolución 70]
            p Por medio de la cual se establece el regamento de distribución de energía eléctrica como parte del reglamento de operación SIN.
            p.mb-0 #[strong Resolución 116]
            p Por la cual se dictan disposiciones sobre garantías de los participantes en el mercado mayorista, como parte del Reglamento de Operación del SIN.

        .row.justify-content-center.align-items-center(titulo="2003")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Ley 812]
            p Por la cual, se presta el servicio en ZNI, a través del uso de energia renovable, con empresas dedicadas al aprovechamiento de residuos sólidos.
            p.mb-0 #[strong Ley 855]
            p Por la cual se definen las Zonas No Interconectadas ZNI.
            p.mb-0 #[strong Ley 855]
            p Por la cual se modifica transitoriamente al Reglamento de Operación para permitir la conexión y operación de plantas solares fotovoltaicas y eólicas en el SIN.
        
        .row.justify-content-center.align-items-center(titulo="2007")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Ley 1151]
            p Por la cual se promociona la reducción de la pobreza a través del abastecimiento energético. Se plantea el desarrollo de infraestructura para el acceso de energía eléctrica.

        .row.justify-content-center.align-items-center(titulo="2014")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Ley 1715]
            p Por medio del cual se regula la integración de las energías renovables no convencionales al sistema energético nacional.
            p.mb-0 #[strong Decreto 2469]
            p Por el cual se establecen los lineamientos de política energética en materia de entrega de excedentes de autogeneración.

        .row.justify-content-center.align-items-center(titulo="2016")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Resolución 143]
            p Por la cual se exponen los formatos para el registro de proyectos de generación de energía eléctrica, y generación eléctrica a partir de fuentes no convencionales de energía.
        
        .row.justify-content-center.align-items-center(titulo="2017")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Decreto 1543]
            p Por la cual se reglamenta el Fondo de Energías No Convencionales y Gestión Eficiente de la Energía. FENOGE.

        .row.justify-content-center.align-items-center(titulo="2018")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Resolución 30]
            p Por la cual se regulan las actividades de autogeneración a pequeña escala y de generación distribuida en el Sistema Interconectado Nacional.

        .row.justify-content-center.align-items-center(titulo="2019")
          .col-md-3.icon-years
            img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p.mb-0 #[strong Resolución 96]
            p Por la cual se alude a la opción de acceso al despacho central, a plantas menores a 20 MW conectadas al Sistema Interconectado Nacional.

        //- .row.justify-content-center.align-items-center(titulo="2003")
        //-   .col-md-3.icon-years
        //-     img(src='@/assets/curso/temas/tema3/icon-years.svg', alt='')
        //-   .col-md-9.mb-4.mb-md-0
        //-     p.mb-0 #[strong Ley 855]
        //-     p Por la cual se modifica transitoriamente al Reglamento de Operación para permitir la conexión y operación de plantas solares fotovoltaicas y eólicas en el SIN.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    linkA:
      'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=77887',
    linkB: 'https://www.minenergia.gov.co/es/repositorio-normativo/normativa/',
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
