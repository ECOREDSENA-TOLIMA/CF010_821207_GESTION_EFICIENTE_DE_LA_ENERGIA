export default {
  global: {
    componenteFormativo: 'Contexto normativo aplicable al sector energético',
    descripcionCurso:
      'El primer paso para la elaboración de un sistema de Gestión de Energía en cualquier organización es determinar el marco jurídico aplicable, los reglamentos técnicos del sector y las normas técnicas asociadas, en donde se establezcan claramente los requisitos necesarios para la implementación del sistema propuesto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es normativa y cuáles son sus aplicaciones?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'La economía circular y objetivos de desarrollo sostenible en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Economía Circular',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Objetivos del desarrollo sostenible en Colombia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Marco regulatorio y normativo del sector energético en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Marco regulatorio y normativo para la eficiencia energética y gestión de la energía a nivel internacional y nacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Marco regulatorio y normativo para las fuentes de energías renovables no convencionales a nivel internacional y nacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Reglamentos técnicos para el sector energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Reglamento técnico de instalaciones eléctricas (RETIE)',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Reglamento técnico de iluminación y alumbrado público (RETILAP)',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Reglamento técnico de etiquetado (RETIQ)',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Reglamento Técnico de Sistemas e Instalaciones Térmicas (RETSIT)',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_010.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '3. Marco regulatorio y normativo del sector energético en Colombia.',
      referencia:
        'Departamento Administrativo de la Función Pública (2015) Decreto 1073 de 2015 junto a todas las adiciones y modificaciones desde su fecha de expedición hasta el 22 de abril de 2021.',
      tipo: 'Decreto de función pública',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=77887',
    },
    {
      tema:
        '3. Marco regulatorio y normativo del sector energético en Colombia',
      referencia:
        'Ministerio de Minas y Energía. (s.f.). Repositorio normativo: Normativa.',
      tipo: 'Decreto de función pública',
      link: 'https://www.minenergia.gov.co/es/repositorio-normativo/normativa/',
    },
    {
      tema:
        '4. Marco regulatorio y normativo para la eficiencia energética y gestión de la energía a nivel internacional y nacional.',
      referencia:
        'Ley 1715 de 2014 [Ministerio de Minas y Energía de Colombia]. Por medio de la cual se regula la integración de las energías renovables no convencionales al Sistema Energético Nacional y se promueve la gestión eficiente de energía, establece incentivos tributarios para los contribuyentes que realicen de forma directa inversiones en investigación y desarrollo de proyectos para utilización eficiente de la energía. Función Pública. (s.f.). Gestor normativo: Norma.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=57353',
    },
    {
      tema: '6.3 Reglamento técnico de etiquetado (RETIQ)',
      referencia:
        'Resolución Número 41012 de 2015, anexo general reglamento técnico de etiquetado-RETIQ. Septiembre 18 de 2015. Ministerio de Minas y Energía. (s.f.). Reglamento Técnico de Etiquetado RETIQ',
      tipo: 'Resolución',
      link:
        'https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-etiquetado-retiq/',
    },
  ],
  glosario: [
    {
      termino: 'Eficiencia energética',
      significado:
        'en un proceso de conversión energético es igual al cociente de la energía de salida sobre la energía de entrada.',
    },
    {
      termino: 'FNCE',
      significado: 'sigla de fuente no convencional de energía.',
    },
    {
      termino: 'IEA',
      significado:
        'sigla de Agencia internacional de energía (International Energy Agency).',
    },
    {
      termino: 'PAI-PROURE',
      significado: 'sigla de Plan de acción indicativo del PROURE.',
    },
    {
      termino: 'PROURE',
      significado:
        'sigla de Programa de uso racional y eficiente de la energía.',
    },
    {
      termino: 'RETIQ',
      significado: 'sigla de Reglamento Técnico de Etiquetado.',
    },
    {
      termino: 'SI3EA',
      significado:
        'sigla de Sistema de Información de Eficiencia Energética y Energías Alternativas.',
    },
    {
      termino: 'UPME',
      significado: 'sigla de Unidad de Planeación minero-energética.',
    },
    {
      termino: 'URE',
      significado: 'sigla de Uso Racional y Eficiente de la energía.',
    },
  ],
  referencias: [
    {
      referencia:
        'ICONTEC. (s.f.). NTC 2050: Código Eléctrico Colombiano. Recuperado de ',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=1292',
    },
    {
      referencia:
        'Resolución Número 90708 de 2013 y anexo. (30 de agosto 2013). <em>Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de Generación, Transmisión, Transformación, Distribución y Utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones.</em> Ministerio de Minas y Energía de Colombia. ',
      link:
        'https://www.minenergia.gov.co/documents/3822/22726-Resolucion_9_0708_de_agosto_30_de_2013_expedicion_RETIE_2013.pdf',
    },
    {
      referencia:
        'Resolución Número 181331 de 2009 y anexo. (6 de agosto de 2009). <em>Por la cual se expide el Reglamento Técnico de Iluminación y Alumbrado Público RETILAP y se dictan otras disposiciones.</em> Ministerio de Minas y Energía de Colombia. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=37131',
    },
    // {
    //   referencia:
    //     'Resolución Número 5018 de 2019 y anexo. (20 de noviembre de 2019). Por la cual se establecen lineamientos en Seguridad y Salud en el Trabajo en los procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Ministerio del Trabajo. ',
    //   link:
    //     'https://camacol.co/sites/default/files/descargables/Resoluci%C3%B3n%205018%20del%2020112019%20SST%20en%20energ%C3%ADa%20el%C3%A9ctrica_0.pdf',
    // },
    // {
    //   referencia:
    //     'Servicio Nacional de Aprendizaje - SENA. (2013). <em>Caracterización del sector eléctrico colombiano.</em> Recuperado el 6 de julio del 2021 del repositorio SENA.',
    //   link: 'https://biblioteca.sena.edu.co/ ',
    // },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Javier González Cuevas',
          cargo: 'Experto Técnico',
          centro:
            'Regional Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Jaime Mauricio Peñaloza Trespalacio',
          cargo: 'Experto Técnico',
          centro:
            'Regional Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Carolina Arias',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
