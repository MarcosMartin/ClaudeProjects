/* ═══════════════════════════════════════════════════════════
   CuentoMágico — Spanish Reading App for Kids
   ═══════════════════════════════════════════════════════════ */

/* ─── SECTION 1: BUILT-IN STORIES ─────────────────────────── */

const BUILTIN_STORIES = [
  {
    id: 'luna-bosque-magico',
    title: 'Luna y el Bosque Mágico',
    theme: 'nature',
    difficulty: 'beginner',
    ageMin: 5,
    ageMax: 7,
    coverEmoji: '🦊🌲',
    coverColor: '#4CAF50',
    author: 'CuentoMágico',
    pages: [
      {
        pageNum: 1,
        text: 'Luna era una zorrita de pelo rojo y ojos brillantes. Vivía cerca de un gran bosque lleno de árboles altos. Un día, Luna vio un camino que nunca había visto antes. "¡Voy a explorar!", dijo Luna con alegría.',
        emoji: '🦊',
        bgColor: '#e8f5e9'
      },
      {
        pageNum: 2,
        text: 'En el bosque, Luna encontró a Pino, un erizo muy pequeño. Pino estaba triste porque no podía cruzar un río cristalino. "Yo te ayudo", dijo Luna. Luna buscó unas piedras grandes y las puso en el agua para hacer un puente.',
        emoji: '🦔🌊',
        bgColor: '#e3f2fd'
      },
      {
        pageNum: 3,
        text: 'Juntos cruzaron el río. Al otro lado había un árbol enorme lleno de moras dulces y jugosas. "¡Gracias, Luna!", dijo Pino. Los dos amigos comieron moras hasta que sus barriguitas estuvieron llenas y contentas.',
        emoji: '🫐🌳',
        bgColor: '#f3e5f5'
      },
      {
        pageNum: 4,
        text: 'Cuando el sol empezó a bajar, Luna y Pino volvieron a casa juntos. Luna aprendió que ayudar a los demás hace que el corazón se llene de alegría. Desde ese día, Luna y Pino fueron los mejores amigos del bosque.',
        emoji: '🌅🦊🦔',
        bgColor: '#fff8e1'
      }
    ],
    vocabulary: [
      { word: 'zorrita', emoji: '🦊', hint: 'Un animal de pelo rojo y cola esponjosa' },
      { word: 'bosque', emoji: '🌲', hint: 'Un lugar con muchos árboles' },
      { word: 'erizo', emoji: '🦔', hint: 'Un animalito con púas en la espalda' },
      { word: 'cristalino', emoji: '💧', hint: 'Muy limpio y transparente, como el agua clara' },
      { word: 'moras', emoji: '🫐', hint: 'Frutas pequeñas y oscuras que crecen en los árboles' }
    ]
  },

  {
    id: 'viaje-de-sara',
    title: 'El Viaje de Sara',
    theme: 'travel',
    difficulty: 'beginner',
    ageMin: 6,
    ageMax: 8,
    coverEmoji: '🚂🌸',
    coverColor: '#FF9800',
    author: 'CuentoMágico',
    pages: [
      {
        pageNum: 1,
        text: 'Sara y su abuela Lola viajaron en tren por España. Por la ventana veían campos de girasoles amarillos y pueblos blancos. "Abuela, ¿a dónde vamos primero?", preguntó Sara. "A Valencia, donde nacen los mejores naranjos del mundo", respondió la abuela con una sonrisa.',
        emoji: '🚂🌻',
        bgColor: '#fff8e1'
      },
      {
        pageNum: 2,
        text: 'En Valencia, Sara probó el zumo de naranja más rico de su vida. Los naranjos llenaban las calles con un olor dulce y fresco. La abuela Lola le enseñó a Sara cómo se recogen las naranjas con cuidado para no dañar las ramas.',
        emoji: '🍊🌳',
        bgColor: '#fff3e0'
      },
      {
        pageNum: 3,
        text: 'Luego viajaron a Sevilla. Allí vieron a una bailaora de flamenco con un vestido rojo lleno de lunares. Sus pies golpeaban el suelo: ¡tac, tac, tac! "¡Qué bonito!", exclamó Sara, aplaudiendo con fuerza.',
        emoji: '💃🌹',
        bgColor: '#fce4ec'
      },
      {
        pageNum: 4,
        text: 'Al final del viaje, Sara y la abuela Lola se sentaron en una colina a contemplar la sierra. El cielo era de color naranja y rosa. Sara tomó la mano de su abuela y dijo: "Gracias, abuela. Quiero conocer todo España contigo." La abuela la abrazó muy fuerte.',
        emoji: '⛰️🌄',
        bgColor: '#f3e5f5'
      }
    ],
    vocabulary: [
      { word: 'naranjos', emoji: '🍊', hint: 'Árboles que dan naranjas' },
      { word: 'zumo', emoji: '🥤', hint: 'El líquido que se saca de una fruta' },
      { word: 'flamenco', emoji: '💃', hint: 'Un baile muy famoso de España con palmas y zapateado' },
      { word: 'sierra', emoji: '⛰️', hint: 'Una fila de montañas con picos altos' },
      { word: 'contemplar', emoji: '👀', hint: 'Mirar algo con mucha atención y calma' }
    ]
  },

  {
    id: 'banda-de-mateo',
    title: 'La Banda de Mateo',
    theme: 'music',
    difficulty: 'intermediate',
    ageMin: 7,
    ageMax: 9,
    coverEmoji: '🎵🐭',
    coverColor: '#9C27B0',
    author: 'CuentoMágico',
    pages: [
      {
        pageNum: 1,
        text: 'Mateo era un ratón que soñaba con tocar la trompeta. Su amiga Gala, una rana verde, tocaba la batería. Y Bruno, un oso grande y amable, tocaba la guitarra. Los tres querían formar una banda de música, pero nunca habían tocado juntos.',
        emoji: '🐭🐸🐻',
        bgColor: '#f3e5f5'
      },
      {
        pageNum: 2,
        text: 'El primer ensayo fue un desastre. Mateo tocaba muy rápido. Gala golpeaba los platillos demasiado fuerte. Bruno se equivocaba con los acordes. La música sonaba desafinada y los tres se miraron sin saber qué hacer.',
        emoji: '🎺🥁🎸',
        bgColor: '#ede7f6'
      },
      {
        pageNum: 3,
        text: 'Gala tuvo una idea. "Tenemos que escucharnos los unos a los otros", dijo. Empezaron de nuevo, pero esta vez muy despacio. Mateo esperó a Gala. Gala esperó a Bruno. Poco a poco, la música empezó a sonar afinada y bonita.',
        emoji: '👂🎶',
        bgColor: '#e8eaf6'
      },
      {
        pageNum: 4,
        text: 'El día del concierto, el parque estaba lleno de animales. Mateo, Gala y Bruno tocaron juntos con mucha paciencia y amor. El público aplaudió y bailó. Mateo aprendió que la música más bonita nace cuando todos se escuchan y se respetan.',
        emoji: '🎉🎵🌟',
        bgColor: '#e0f7fa'
      }
    ],
    vocabulary: [
      { word: 'ensayo', emoji: '🎼', hint: 'Practicar algo muchas veces para hacerlo bien' },
      { word: 'desafinada', emoji: '😬', hint: 'Música que no suena bien porque las notas no están en su sitio' },
      { word: 'afinada', emoji: '🎵', hint: 'Música que suena perfecta y bonita' },
      { word: 'acordes', emoji: '🎸', hint: 'Varias notas de guitarra que suenan a la vez' },
      { word: 'paciencia', emoji: '⏳', hint: 'Esperar con calma sin ponerse nervioso' }
    ]
  },

  {
    id: 'jardin-de-noa',
    title: 'El Jardín de Noa',
    theme: 'nature',
    difficulty: 'intermediate',
    ageMin: 7,
    ageMax: 10,
    coverEmoji: '🌱🌻',
    coverColor: '#8BC34A',
    author: 'CuentoMágico',
    pages: [
      {
        pageNum: 1,
        text: 'Noa vivía con su abuelo en una casa con un jardín grande. El abuelo le dio a Noa una bolsa de semillas. "Estas semillas son tuyas", dijo el abuelo. "Si las cuidas bien, te darán algo maravilloso." Noa miró las semillas con curiosidad.',
        emoji: '🌱👴',
        bgColor: '#f1f8e9'
      },
      {
        pageNum: 2,
        text: 'Cada mañana, Noa regaba las semillas con agua fresca. Cada tarde, quitaba las malas hierbas con cuidado. Pasaron muchos días y Noa empezó a ver pequeños brotes verdes asomar por la tierra. "¡Están creciendo!", gritó Noa de alegría.',
        emoji: '🚿🌿',
        bgColor: '#e8f5e9'
      },
      {
        pageNum: 3,
        text: 'Al cabo de unas semanas, el jardín estaba lleno de tomates rojos, lechugas verdes y girasoles amarillos. Era la cosecha más bonita del barrio. Los vecinos miraban el jardín de Noa con admiración. "¡Qué jardín tan hermoso!"',
        emoji: '🍅🌻🥬',
        bgColor: '#f9fbe7'
      },
      {
        pageNum: 4,
        text: 'Noa recogió las verduras y las repartió entre todos los vecinos. "Eres muy generosa", dijo el abuelo con orgullo. Noa sonrió. Había aprendido que cuidar las cosas con amor y constancia hace que crezcan, igual que las plantas, igual que la amistad.',
        emoji: '🤝🌸',
        bgColor: '#fff9c4'
      }
    ],
    vocabulary: [
      { word: 'semillas', emoji: '🌱', hint: 'Las partes pequeñas de una planta de las que nace una nueva planta' },
      { word: 'brotes', emoji: '🌿', hint: 'Los primeros tallitos verdes que salen de la tierra' },
      { word: 'cosecha', emoji: '🧺', hint: 'Recoger los frutos y verduras que han crecido en el jardín' },
      { word: 'generosa', emoji: '🤝', hint: 'Una persona que comparte lo que tiene con los demás' },
      { word: 'constancia', emoji: '⭐', hint: 'Seguir haciendo algo cada día sin rendirse' }
    ]
  }
];
