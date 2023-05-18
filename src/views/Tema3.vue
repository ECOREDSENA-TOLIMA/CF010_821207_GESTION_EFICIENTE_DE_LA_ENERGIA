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
        p Para complementar este tema, te invitamos a que revises la siguiente información de los dos textos que te proponemos.

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
                  a.boton.color-acento-botones(:href="linkA" target="_blank") 
                    span Ir al sitio web
                    i.fas.fa-link
              .col-12.row.justify-content-center.align-items-center
                .col-md-9.col-12
                  h4 Normativa
                  p Adicionalmente el Ministerio de Minas y Energía en su sitio web publicó un documento elaborado en excel denominado Normograma, en donde se compilan todas las normas que regulan sus actuaciones en desarrollo de su objeto misional.
                .col-md-3.col-12.text-right
                  a.boton.color-acento-botones(:href="linkB" target="_blank") 
                    span Ir al sitio web
                    i.fas.fa-link

    .row.mt-4 
      .col-12.mb-0
        .cajon.color-primario.p-4
          p.mb-0 También hay en el sitio web del ministerio una página dedicada a la búsqueda de normativa relevante que puede ser consultada por varios criterios y su link de acceso es 
            <a href="https://www.minenergia.gov.co/normatividad" class="color-link"> https://www.minenergia.gov.co/normatividad</a> y aparece como muestra la siguiente figura:
            

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
