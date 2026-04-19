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
        text: 'Luna era una zorrita de pelo rojo y ojos brillantes. Vivía cerca de un gran bosque lleno de árboles altísimos. Un día, Luna vio un camino entre los árboles que nunca había visto antes. Las hojas brillaban con la luz del sol. "¡Voy a explorar!", dijo Luna con alegría, y se adentró en el bosque dando saltitos.',
        emoji: '🦊',
        bgColor: '#e8f5e9'
      },
      {
        pageNum: 2,
        text: 'En el bosque, Luna encontró a Pino, un erizo muy pequeño sentado junto a un río cristalino. Pino estaba triste porque no podía cruzar al otro lado. El agua corría rápida y fría. "Yo te ayudo", dijo Luna con una gran sonrisa. Buscó unas piedras grandes y planas, y las fue colocando una a una en el agua para hacer un puente.',
        emoji: '🦔🌊',
        bgColor: '#e3f2fd'
      },
      {
        pageNum: 3,
        text: 'Juntos cruzaron el río, saltando de piedra en piedra. Al otro lado había un árbol enorme cubierto de moras dulces y jugosas. "¡Gracias, Luna!", dijo Pino con los ojos brillantes. Los dos amigos se pusieron a comer moras hasta que sus barriguitas estuvieron bien llenas. Las moras eran oscuras, dulces y un poco ácidas, las mejores que habían probado nunca.',
        emoji: '🫐🌳',
        bgColor: '#f3e5f5'
      },
      {
        pageNum: 4,
        text: 'De repente, oyeron un sonido triste entre los arbustos. Era una familia de conejos cuya madriguera se había llenado de agua con la lluvia. Los conejitos temblaban de frío. Luna y Pino se miraron. "¡Vamos a ayudarles!", dijeron los dos a la vez.',
        emoji: '🐰🌧️',
        bgColor: '#e8eaf6'
      },
      {
        pageNum: 5,
        text: 'Luna llamó a todos los animales del bosque: los pájaros, las ardillas y los ratones. Entre todos cavaron una nueva madriguera seca y cálida entre las raíces del gran árbol. Los conejos entraron felices. "¡Gracias a todos!", dijo la mamá coneja con lágrimas de alegría.',
        emoji: '🐦🐿️🤝',
        bgColor: '#f1f8e9'
      },
      {
        pageNum: 6,
        text: 'Cuando el sol empezó a bajar, todo el bosque brillaba con una luz dorada. Luna y Pino volvieron a casa juntos, cansados pero muy felices. Luna había aprendido algo importante: ayudar a los demás llena el corazón de alegría, y cuando todos trabajan juntos, nada es imposible. Desde ese día, Luna y Pino fueron los mejores amigos del bosque.',
        emoji: '🌅🦊🦔',
        bgColor: '#fff8e1'
      }
    ],
    vocabulary: [
      { word: 'zorrita', emoji: '🦊', hint: 'Un animal de pelo rojo y cola esponjosa' },
      { word: 'bosque', emoji: '🌲', hint: 'Un lugar con muchos árboles' },
      { word: 'erizo', emoji: '🦔', hint: 'Un animalito con púas en la espalda' },
      { word: 'cristalino', emoji: '💧', hint: 'Muy limpio y transparente, como el agua clara' },
      { word: 'moras', emoji: '🫐', hint: 'Frutas pequeñas y oscuras que crecen en los árboles' },
      { word: 'madriguera', emoji: '🕳️', hint: 'La casa que cavan los conejos bajo la tierra' }
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
        text: 'Sara y su abuela Lola subieron al tren una mañana de primavera. Por la ventana veían campos de girasoles amarillos, olivos plateados y pueblos blancos que brillaban bajo el sol. "Abuela, ¿a dónde vamos primero?", preguntó Sara emocionada. "A Valencia, donde nacen los mejores naranjos del mundo", respondió la abuela con una sonrisa llena de cariño.',
        emoji: '🚂🌻',
        bgColor: '#fff8e1'
      },
      {
        pageNum: 2,
        text: 'En Valencia, las calles olían a naranja desde primera hora de la mañana. Una señora muy amable les ofreció a Sara y a la abuela un vaso de zumo recién exprimido. Era el zumo más rico que Sara había probado en su vida: dulce, fresco y lleno de color. La abuela Lola le enseñó cómo se recogen las naranjas con mucho cuidado para no dañar las ramas del árbol.',
        emoji: '🍊🌳',
        bgColor: '#fff3e0'
      },
      {
        pageNum: 3,
        text: 'Luego el tren las llevó hasta Sevilla. En una plaza llena de flores, vieron a una bailaora de flamenco con un vestido rojo lleno de lunares blancos. Sus pies golpeaban el suelo con fuerza: ¡tac, tac, tac! Las palmas sonaban como truenos. "¡Qué bonito!", exclamó Sara, y ella también empezó a aplaudir al ritmo de la música.',
        emoji: '💃🌹',
        bgColor: '#fce4ec'
      },
      {
        pageNum: 4,
        text: 'Al día siguiente visitaron un mercado en Granada. Los puestos estaban llenos de frutas, verduras, frutos secos y especias de todos los colores. Un vendedor muy simpático le regaló a Sara un higo seco. "Es de nuestra tierra", dijo con orgullo. Sara lo probó y le pareció delicioso: dulce como el caramelo.',
        emoji: '🏪🍇',
        bgColor: '#f3e5f5'
      },
      {
        pageNum: 5,
        text: 'En el camino de vuelta, el tren pasó por las montañas de la sierra. Las cimas estaban cubiertas de nieve aunque abajo hacía calor. Sara y la abuela Lola se sentaron en silencio a contemplar el paisaje. El cielo era de color naranja y rosa, y las montañas parecían pintadas.',
        emoji: '⛰️🌄',
        bgColor: '#e8eaf6'
      },
      {
        pageNum: 6,
        text: 'En el tren de vuelta a casa, Sara sacó su cuaderno y dibujó todo lo que había visto: los naranjos, la bailaora, el mercado y la sierra. Cuando terminó, le enseñó los dibujos a su abuela. "Algún día te llevaré a ver el resto de España", dijo la abuela. Sara sonrió y se quedó dormida con la cabeza apoyada en su hombro.',
        emoji: '✏️📒',
        bgColor: '#e0f7fa'
      }
    ],
    vocabulary: [
      { word: 'naranjos', emoji: '🍊', hint: 'Árboles que dan naranjas' },
      { word: 'zumo', emoji: '🥤', hint: 'El líquido que se saca de una fruta exprimiéndola' },
      { word: 'flamenco', emoji: '💃', hint: 'Un baile muy famoso de España con palmas y zapateado' },
      { word: 'sierra', emoji: '⛰️', hint: 'Una cadena de montañas con picos altos' },
      { word: 'contemplar', emoji: '👀', hint: 'Mirar algo con mucha atención y calma' },
      { word: 'higo', emoji: '🍈', hint: 'Una fruta dulce de color morado o verde por dentro' }
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
        text: 'Mateo era un ratón que soñaba con tocar la trompeta desde que era muy pequeño. Su amiga Gala, una rana verde y saltarina, tocaba la batería con mucha energía. Y Bruno, un oso grande y tranquilo, tocaba la guitarra con ternura. Los tres querían formar una banda de música, pero nunca habían tocado juntos ni un solo día.',
        emoji: '🐭🐸🐻',
        bgColor: '#f3e5f5'
      },
      {
        pageNum: 2,
        text: 'El primer ensayo fue un auténtico desastre. Mateo tocaba la trompeta demasiado rápido. Gala golpeaba los platillos con tanta fuerza que nadie podía escuchar nada más. Bruno se equivocaba con los acordes y paraba a cada momento. La música sonaba tan desafinada que un pájaro que pasaba por allí salió volando asustado.',
        emoji: '🎺🥁🎸',
        bgColor: '#ede7f6'
      },
      {
        pageNum: 3,
        text: 'Los tres se sentaron en el suelo sin saber qué hacer. Entonces Gala tuvo una idea. "El problema es que cada uno toca a su aire. Tenemos que escucharnos los unos a los otros." Empezaron de nuevo, pero esta vez muy despacio. Mateo esperó a Gala. Gala esperó a Bruno. Poco a poco, las notas encajaron y la música empezó a sonar afinada y bonita.',
        emoji: '👂🎶',
        bgColor: '#e8eaf6'
      },
      {
        pageNum: 4,
        text: 'Practicaron cada tarde durante dos semanas. Hubo días en que todo salía bien y días en que todo salía mal. Pero ninguno se rindió. Mateo aprendió a llevar el ritmo. Gala aprendió a tocar más suave. Bruno memorizó todos los acordes. La música que tocaban juntos era cada vez más bonita.',
        emoji: '📅🎼',
        bgColor: '#e3f2fd'
      },
      {
        pageNum: 5,
        text: 'La noche antes del concierto, Mateo no podía dormir. Tenía mariposas en el estómago. "¿Y si me equivoco delante de todos?", pensaba. Gala y Bruno fueron a su casa. "Todos cometemos errores", dijo Gala. "Pero lo importante es disfrutar juntos", añadió Bruno. Los tres calentaron tocando su canción favorita muy bajito, y Mateo se tranquilizó.',
        emoji: '🌙😟🤗',
        bgColor: '#fff8e1'
      },
      {
        pageNum: 6,
        text: 'El día del concierto, el parque estaba lleno de animales de todas partes. Mateo, Gala y Bruno tocaron con todo su corazón. El público aplaudió, bailó y pidió más. Al terminar, un pequeño erizo se acercó tímidamente. "¿Puedo aprender a tocar con vosotros?" Los tres se miraron y sonrieron. "¡Claro que sí!"',
        emoji: '🎉🎵🦔',
        bgColor: '#e0f7fa'
      }
    ],
    vocabulary: [
      { word: 'ensayo', emoji: '🎼', hint: 'Practicar algo muchas veces para hacerlo bien' },
      { word: 'desafinada', emoji: '😬', hint: 'Música que no suena bien porque las notas no están en su sitio' },
      { word: 'acordes', emoji: '🎸', hint: 'Varias notas de guitarra que suenan a la vez' },
      { word: 'paciencia', emoji: '⏳', hint: 'Esperar con calma sin ponerse nervioso' },
      { word: 'ritmo', emoji: '🥁', hint: 'El pulso regular que marca el tiempo en la música' },
      { word: 'concierto', emoji: '🎤', hint: 'Una actuación musical delante de un público' }
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
        text: 'Noa vivía con su abuelo en una casa con un jardín grande y algo descuidado. Un sábado por la mañana, el abuelo sacó una bolsa de tela llena de semillas de diferentes formas y tamaños. "Estas semillas son tuyas", dijo con voz suave. "Si las cuidas cada día, te darán algo maravilloso." Noa abrió la bolsa y olió las semillas: olían a tierra y a futuro.',
        emoji: '🌱👴',
        bgColor: '#f1f8e9'
      },
      {
        pageNum: 2,
        text: 'Noa preparó la tierra con una palita, haciendo pequeños hoyos. Metió una semilla en cada hoyo y los tapó con cuidado. Cada mañana antes del colegio, Noa regaba las semillas con una regadera de color verde. Cada tarde, quitaba las malas hierbas que intentaban robar el agua. Los días pasaban y la tierra parecía dormida.',
        emoji: '🚿🌿',
        bgColor: '#e8f5e9'
      },
      {
        pageNum: 3,
        text: 'Una mañana, Noa salió al jardín y vio algo que le quitó el aliento: decenas de pequeños brotes verdes asomaban por la tierra. Eran finísimos, casi transparentes, pero estaban ahí. "¡Abuelo, abuelo, están creciendo!", gritó Noa corriendo hacia la casa. El abuelo salió y sonrió orgulloso. "Ya sabía yo que lo conseguirías."',
        emoji: '🌱✨',
        bgColor: '#f9fbe7'
      },
      {
        pageNum: 4,
        text: 'Semanas después, el jardín era irreconocible. Había tomates rojos y redondos, lechugas de hojas rizadas, pepinos largos y girasoles altísimos que miraban al sol. Era la cosecha más bonita del barrio. Los vecinos se asomaban por la valla y exclamaban: "¡Qué jardín tan hermoso, Noa!"',
        emoji: '🍅🌻🥬',
        bgColor: '#f1f8e9'
      },
      {
        pageNum: 5,
        text: 'Noa recogió todas las verduras con cuidado y las metió en cestas. Luego fue llamando a la puerta de cada vecino para repartirlas. La señora del primero recibió tomates. El señor del tercero recibió lechugas. La familia del final de la calle recibió pepinos. "Eres muy generosa", dijo el abuelo con los ojos brillantes de orgullo.',
        emoji: '🧺🏡',
        bgColor: '#fff9c4'
      },
      {
        pageNum: 6,
        text: 'Antes de que terminara el otoño, Noa guardó algunas semillas de cada planta en sobrecitos de papel con dibujos pintados a mano. Los repartió entre todos los vecinos para que pudieran tener su propio jardín en primavera. Noa aprendió que cuidar las cosas con constancia y compartir los frutos con los demás es la mejor forma de hacer crecer la alegría.',
        emoji: '🌸💌',
        bgColor: '#e8f5e9'
      }
    ],
    vocabulary: [
      { word: 'semillas', emoji: '🌱', hint: 'Las partes pequeñas de una planta de las que nace una nueva planta' },
      { word: 'brotes', emoji: '🌿', hint: 'Los primeros tallitos verdes que salen de la tierra' },
      { word: 'cosecha', emoji: '🧺', hint: 'Recoger los frutos y verduras que han crecido en el jardín' },
      { word: 'generosa', emoji: '🤝', hint: 'Una persona que comparte lo que tiene con los demás' },
      { word: 'constancia', emoji: '⭐', hint: 'Seguir haciendo algo cada día sin rendirse' },
      { word: 'sobrecito', emoji: '✉️', hint: 'Un sobre pequeño de papel para guardar cosas' }
    ]
  },

  {
    id: 'colores-del-mercado',
    title: 'Los Colores del Mercado',
    theme: 'culture',
    difficulty: 'beginner',
    ageMin: 5,
    ageMax: 8,
    coverEmoji: '🏪🎨',
    coverColor: '#FF7043',
    author: 'CuentoMágico',
    pages: [
      {
        pageNum: 1,
        text: 'Alma tenía seis años y vivía en un pueblo de Andalucía. Cada sábado por la mañana, su abuela Concha la llevaba al mercado del pueblo. Era el plan favorito de Alma. Desde lejos ya se veían los colores de las frutas y las verduras, y se olía el aroma de las especias y las flores recién cortadas.',
        emoji: '🏪🌈',
        bgColor: '#fff3e0'
      },
      {
        pageNum: 2,
        text: 'El primer puesto era el de las frutas. Había melones rayados, sandías enormes, cerezas brillantes y melocotones de color dorado. El frutero, un señor con bigote y delantal verde, le ofreció a Alma un trozo de melocotón. Alma lo probó y cerró los ojos de lo bueno que estaba. "Es de aquí mismo, de la huerta de al lado", dijo el frutero con orgullo.',
        emoji: '🍑🍒🍉',
        bgColor: '#fce4ec'
      },
      {
        pageNum: 3,
        text: 'Más adelante estaba el puesto de especias. Había montañitas de polvos de colores: amarillo, rojo, naranja, verde. "¿Qué es eso, abuela?" preguntó Alma señalando una montaña amarilla. "Azafrán", respondió la abuela Concha. "Es el oro de España. Con él hacemos la paella." Alma metió la nariz y olió: era un olor fuerte, extraño y maravilloso.',
        emoji: '🌶️🧡',
        bgColor: '#fff8e1'
      },
      {
        pageNum: 4,
        text: 'Luego llegaron al puesto de las flores. Había ramos de lavanda morada, claveles rojos y girasoles amarillos tan grandes como la cara de Alma. Una señora estaba trenzando flores para hacer una corona. "¿Puedo aprender?", preguntó Alma. La señora le enseñó a entrelazar los tallos. Alma hizo su primera corona de lavanda y se la puso en la cabeza.',
        emoji: '💐👑',
        bgColor: '#f3e5f5'
      },
      {
        pageNum: 5,
        text: 'En el centro del mercado había una pequeña plaza donde un músico tocaba la guitarra. La gente paraba a escuchar. Algunos niños bailaban. Alma también bailó, un poco tímida al principio, pero luego con mucha alegría. La abuela Concha aplaudía y reía. Ese sonido era la música del mercado.',
        emoji: '🎸💃',
        bgColor: '#e8eaf6'
      },
      {
        pageNum: 6,
        text: 'De vuelta a casa, Alma llevaba una cesta con melocotones, una ramita de lavanda y un sobre de azafrán. La abuela Concha le prometió que esa tarde harían una paella juntas en casa. Alma había aprendido que el mercado no era solo un sitio para comprar cosas: era un lugar donde las personas se encontraban, compartían y se alegraban juntas.',
        emoji: '🧺🏡',
        bgColor: '#e8f5e9'
      }
    ],
    vocabulary: [
      { word: 'mercado', emoji: '🏪', hint: 'Un lugar donde la gente vende y compra productos frescos' },
      { word: 'azafrán', emoji: '🌼', hint: 'Una especia amarilla muy especial que se usa para cocinar' },
      { word: 'paella', emoji: '🥘', hint: 'Un plato muy famoso de España que se hace en una sartén grande' },
      { word: 'lavanda', emoji: '💜', hint: 'Una planta de flores moradas con un olor muy agradable' },
      { word: 'huerta', emoji: '🌱', hint: 'Un terreno donde se cultivan frutas y verduras' },
      { word: 'especias', emoji: '🌶️', hint: 'Polvos o semillas que se usan para dar sabor a la comida' }
    ]
  },

  {
    id: 'delfin-azul',
    title: 'El Delfín Azul',
    theme: 'animals',
    difficulty: 'beginner',
    ageMin: 5,
    ageMax: 7,
    coverEmoji: '🐬🌊',
    coverColor: '#0288D1',
    author: 'CuentoMágico',
    pages: [
      {
        pageNum: 1,
        text: 'Nico tenía siete años y vivía en un pueblo de la costa mediterránea. Cada verano, Nico y su padre salían muy temprano en una barca de madera a ver el mar. Un día, en medio del agua azul y tranquila, vieron algo saltar fuera del agua: era un delfín. Nico se quedó con la boca abierta de la emoción.',
        emoji: '🐬🌅',
        bgColor: '#e3f2fd'
      },
      {
        pageNum: 2,
        text: 'El delfín se acercó a la barca sin miedo. Tenía los ojos brillantes y la piel lisa y suave de color gris azulado. Nico se tumbó en la proa y estiró la mano. El delfín se dejó rozar con la punta de los dedos. Era cálido y suave. "Le llamaré Rayo", dijo Nico en voz baja para no asustarlo.',
        emoji: '🤚🐬',
        bgColor: '#e1f5fe'
      },
      {
        pageNum: 3,
        text: 'Rayo empezó a nadar alrededor de la barca, dando saltos y haciendo piruetas en el aire. Nico aplaudía y reía. Pero de repente Rayo paró y emitió un sonido agudo. Señalaba con el morro hacia algo que flotaba en el agua: era una bolsa de plástico enredada en su aleta.',
        emoji: '😟🛍️',
        bgColor: '#fff8e1'
      },
      {
        pageNum: 4,
        text: 'El padre de Nico sacó la bolsa de plástico del agua con cuidado. La desenredó de la aleta de Rayo sin hacerle daño. "Las bolsas de plástico son muy peligrosas para los animales del mar", explicó su padre. Nico miró la bolsa y luego miró el mar. Quería que el mar estuviera siempre limpio y lleno de vida.',
        emoji: '♻️🌊',
        bgColor: '#e8f5e9'
      },
      {
        pageNum: 5,
        text: 'Nico y su padre recogieron todas las bolsas y los trozos de plástico que encontraron flotando cerca. Las metieron en un saco grande que llevaban en la barca. Rayo los miraba nadar en círculos, como si estuviera ayudando a buscar más basura. Cuando terminaron, el agua estaba más limpia y azul que nunca.',
        emoji: '🧹🌊✨',
        bgColor: '#e0f7fa'
      },
      {
        pageNum: 6,
        text: 'Al volver a la orilla, Rayo los acompañó hasta la playa dando un último salto en el aire, como diciendo adiós. Nico agitó la mano. De vuelta en casa, Nico pintó un dibujo de Rayo y lo colgó en su habitación. Había aprendido que los animales del mar necesitan nuestra ayuda para vivir felices, y que un pequeño gesto puede cambiarlo todo.',
        emoji: '🎨🐬💙',
        bgColor: '#e3f2fd'
      }
    ],
    vocabulary: [
      { word: 'delfín', emoji: '🐬', hint: 'Un animal marino muy inteligente y juguetón' },
      { word: 'mediterráneo', emoji: '🌊', hint: 'El mar que baña las costas de España, Italia y Grecia' },
      { word: 'aleta', emoji: '🐟', hint: 'La parte del cuerpo que usan los peces y delfines para nadar' },
      { word: 'pirueta', emoji: '🌀', hint: 'Un salto o giro acrobático en el aire' },
      { word: 'proa', emoji: '⛵', hint: 'La parte delantera de una barca o barco' },
      { word: 'reciclar', emoji: '♻️', hint: 'Reutilizar materiales para no contaminar el medio ambiente' }
    ]
  },

  {
    id: 'mia-biblioteca',
    title: 'Mía y la Biblioteca Mágica',
    theme: 'friendship',
    difficulty: 'intermediate',
    ageMin: 6,
    ageMax: 9,
    coverEmoji: '📚💛',
    coverColor: '#F9A825',
    author: 'CuentoMágico',
    pages: [
      {
        pageNum: 1,
        text: 'Mía era una niña muy tímida a la que le encantaba leer. En el recreo, mientras los demás jugaban en el patio, ella iba a la biblioteca y se sentaba siempre en el mismo rincón, detrás de la estantería de los cuentos de animales. Allí se sentía segura y tranquila, rodeada de historias.',
        emoji: '📚🌟',
        bgColor: '#fff8e1'
      },
      {
        pageNum: 2,
        text: 'Un día de octubre llegó al colegio un niño nuevo llamado Tomás. Era alto, llevaba gafas redondas y una mochila con un cohete dibujado. En el recreo, Tomás miró el patio, luego miró la puerta de la biblioteca, y entró. Se sentó justo en el rincón de Mía. Mía lo miró sin decir nada.',
        emoji: '👦🎒',
        bgColor: '#f3e5f5'
      },
      {
        pageNum: 3,
        text: '"¿Puedo sentarme aquí?", preguntó Tomás en voz baja. Mía asintió. Tomás sacó un libro enorme sobre planetas y estrellas. Mía lo miró de reojo. "¿Te gusta el espacio?", preguntó al fin, sorprendiéndose a sí misma. "Es lo que más me gusta del mundo", respondió Tomás con una gran sonrisa.',
        emoji: '🌙⭐',
        bgColor: '#e8eaf6'
      },
      {
        pageNum: 4,
        text: 'A partir de ese día, Mía y Tomás se encontraban cada recreo en la biblioteca. Ella le prestaba cuentos de animales. Él le contaba cosas sobre las constelaciones. Un día, Tomás señaló un libro sobre animales del océano. "¿Y si leemos este juntos?", propuso. Y así lo hicieron, leyendo en voz alta, cada uno una página.',
        emoji: '📖👫',
        bgColor: '#e0f7fa'
      },
      {
        pageNum: 5,
        text: 'La bibliotecaria, la señorita Amparo, se fijó en los dos amigos. Un día les propuso algo especial: "¿Queréis preparar una presentación para contarle a la clase vuestro libro favorito?" Mía sintió un miedo enorme en el estómago. Pero Tomás dijo: "¡Lo haremos juntos!" Y eso lo cambió todo.',
        emoji: '👩‍🏫💡',
        bgColor: '#f1f8e9'
      },
      {
        pageNum: 6,
        text: 'El día de la presentación, Mía y Tomás se pusieron de pie delante de la clase. Mía habló sobre los delfines. Tomás habló sobre las estrellas de mar. Sus compañeros escucharon fascinados. Al terminar, todos aplaudieron. Mía se dio cuenta de que cuando tienes a un buen amigo a tu lado, el miedo se hace pequeño y las cosas imposibles se vuelven posibles.',
        emoji: '🎤👏💛',
        bgColor: '#fff9c4'
      }
    ],
    vocabulary: [
      { word: 'tímida', emoji: '🙈', hint: 'Una persona que se pone nerviosa cuando tiene que hablar con otros' },
      { word: 'biblioteca', emoji: '📚', hint: 'Un lugar lleno de libros donde puedes leer y aprender' },
      { word: 'constelación', emoji: '✨', hint: 'Un grupo de estrellas que forman una figura en el cielo' },
      { word: 'presentación', emoji: '🎤', hint: 'Explicar algo delante de otras personas' },
      { word: 'estantería', emoji: '📐', hint: 'Un mueble con baldas para poner libros u objetos' },
      { word: 'fascinados', emoji: '😮', hint: 'Muy interesados y sorprendidos por algo' }
    ]
  },

  {
    id: 'camino-de-carlos',
    title: 'El Camino de Carlos',
    theme: 'values',
    difficulty: 'intermediate',
    ageMin: 7,
    ageMax: 10,
    coverEmoji: '🥾⛰️',
    coverColor: '#6D4C41',
    author: 'CuentoMágico',
    pages: [
      {
        pageNum: 1,
        text: 'Carlos tenía ocho años y no era muy aficionado al deporte. Prefería quedarse en casa leyendo o dibujando. Pero un fin de semana, su abuelo Pepe le propuso algo diferente: "¿Qué te parece si hacemos juntos el Camino de la Sierra? Solo dos días, tú y yo." Carlos dudó, pero la cara emocionada del abuelo le hizo decir que sí.',
        emoji: '🥾🧔',
        bgColor: '#efebe9'
      },
      {
        pageNum: 2,
        text: 'El primer día amanecieron con el cielo naranja. Carlos llevaba una mochila con agua, fruta y un cuaderno para dibujar. El camino empezó entre pinos y encinas. Al principio todo era fácil y bonito. Pero después de una hora, Carlos empezó a sentir las piernas pesadas. "¿Cuánto falta, abuelo?" El abuelo sonrió. "Lo mejor está por llegar."',
        emoji: '🌄🌲',
        bgColor: '#fff8e1'
      },
      {
        pageNum: 3,
        text: 'La cuesta se hizo más empinada. Carlos tropezó y se cayó. Tenía un poco de tierra en las rodillas y le dolían los pies. Quería rendirse. "No puedo más", dijo con voz triste. El abuelo Pepe se sentó a su lado en una roca. "¿Ves ese pino grande de allá arriba?" Carlos asintió. "No pienses en toda la cuesta. Solo llega hasta ese pino." Carlos respiró hondo y siguió.',
        emoji: '😤🌲',
        bgColor: '#fce4ec'
      },
      {
        pageNum: 4,
        text: 'El truco del abuelo funcionó. De pino en pino, de roca en roca, Carlos fue subiendo sin darse cuenta. Por el camino vio un lagarto tomando el sol, un nido de pájaros entre las ramas y una mariposa enorme de alas naranjas. Sacó el cuaderno y lo dibujó todo. Caminar era mucho más interesante de lo que pensaba.',
        emoji: '🦎🦋📒',
        bgColor: '#e8f5e9'
      },
      {
        pageNum: 5,
        text: 'Al llegar a la cima, Carlos se quedó sin palabras. Ante ellos se extendía un paisaje enorme: valles verdes, pueblos blancos y un río que brillaba como un hilo de plata. El abuelo Pepe puso la mano en el hombro de Carlos. "¿Ves? Aquí está lo que te prometí." Carlos respiró el aire frío de la montaña y sintió que podía con todo.',
        emoji: '⛰️🌅',
        bgColor: '#e3f2fd'
      },
      {
        pageNum: 6,
        text: 'De vuelta en casa, Carlos pegó sus dibujos del camino en la pared de su habitación. Luego escribió en su cuaderno: "Hoy aprendí que cuando algo es difícil, no hay que mirar hasta el final. Solo hay que llegar al próximo pino." El abuelo Pepe leyó esas palabras y le dio un abrazo muy fuerte. Ya estaban planeando el siguiente camino.',
        emoji: '📒💪🌟',
        bgColor: '#fff9c4'
      }
    ],
    vocabulary: [
      { word: 'empinada', emoji: '⛰️', hint: 'Una cuesta muy inclinada y difícil de subir' },
      { word: 'encinas', emoji: '🌳', hint: 'Árboles típicos de España con bellotas' },
      { word: 'cima', emoji: '🏔️', hint: 'El punto más alto de una montaña' },
      { word: 'esfuerzo', emoji: '💪', hint: 'Trabajar duro para conseguir algo difícil' },
      { word: 'paisaje', emoji: '🌄', hint: 'Todo lo que se ve cuando miras a lo lejos en la naturaleza' },
      { word: 'rendirse', emoji: '🏳️', hint: 'Parar de intentarlo porque algo es muy difícil' }
    ]
  }
];

/* ─── SECTION 2: APP STATE + STORAGE ──────────────────────── */

const STORAGE_KEYS = {
  STORIES: 'cm-stories',
  SETTINGS: 'cm-settings'
};

const state = {
  currentView: 'library',
  currentStory: null,
  currentPage: 0,
  speaking: false,
  fontSize: 'medium',
  activeFilter: 'all',
  customStories: [],
  ttsRate: 1.0,               // 0.5 | 0.75 | 1.0
  ttsProvider: '',            // '' | 'google' | 'azure'
  googleApiKey: '',
  azureApiKey: '',
  azureRegion: 'westeurope',
  customizerSelections: {
    name: '',
    companion: '',
    companionEmoji: '',
    place: '',
    placeEmoji: '',
    value: '',
    valueEmoji: ''
  }
};

const Storage = {
  loadStories() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.STORIES);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  saveStories(stories) {
    try {
      localStorage.setItem(STORAGE_KEYS.STORIES, JSON.stringify(stories));
    } catch {
      console.warn('Could not save stories to localStorage');
    }
  },

  loadSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  },

  saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch {}
  }
};

/* ─── SECTION 3: TTS ENGINE ────────────────────────────────── */

const PREFERRED_ES_VOICES = [
  'Google español',
  'Google español de Estados Unidos',
  'Microsoft Elvira Online (Natural) - Spanish (Spain)',
  'Microsoft Helena Online (Natural) - Spanish (Spain)',
  'Microsoft Pablo Online (Natural) - Spanish (Spain)',
  'Microsoft Elvira Online - Spanish (Spain)',
  'Microsoft Helena Online - Spanish (Spain)',
  'Microsoft Elvira - Spanish (Spain)',
  'Microsoft Helena - Spanish (Spain)',
  'Mónica (Enhanced)', 'Mónica',
  'Jorge (Enhanced)', 'Jorge',
  'Paulina (Enhanced)', 'Paulina',
];

const TTS = {
  voice: null,
  activeSpans: [],
  _timers: [],
  _ctx: null,       // AudioContext — stays unlocked after first user gesture
  _source: null,    // AudioBufferSourceNode currently playing

  init() {
    const tryLoad = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      for (const name of PREFERRED_ES_VOICES) {
        const match = voices.find(v => v.name === name);
        if (match) { this.voice = match; return; }
      }
      this.voice =
        voices.find(v => v.lang === 'es-ES' && v.localService === false) ||
        voices.find(v => v.lang === 'es-ES') ||
        voices.find(v => v.lang.startsWith('es')) || null;
    };
    tryLoad();
    window.speechSynthesis.addEventListener('voiceschanged', tryLoad);
  },

  /* ── Public API ── */

  async speakWord(word) {
    this.stop();
    // Create AudioContext synchronously inside this gesture call
    this._ensureCtx();
    if (state.ttsProvider === 'google' && state.googleApiKey) {
      try { await this._playB64(await this._googleB64({ text: word })); return; }
      catch(e) { console.warn('Google word TTS:', e.message); }
    }
    if (state.ttsProvider === 'azure' && state.azureApiKey) {
      try { await this._playB64(await this._azureB64(word)); return; }
      catch(e) { console.warn('Azure word TTS:', e.message); }
    }
    this._webSpeak(word, null);
  },

  async readPage(text, spans) {
    this.stop();
    this.activeSpans = spans || [];
    state.speaking = true;
    UI.updateReadButton(true);
    this.showTTSBar(text.slice(0, 60) + (text.length > 60 ? '…' : ''));
    // Create AudioContext synchronously while still inside the click handler
    this._ensureCtx();

    if (state.ttsProvider === 'google' && state.googleApiKey) {
      try { await this._googlePage(text, spans); return; }
      catch(e) { console.error('Google TTS:', e.message); UI.showTTSError(e.message); }
    }
    if (state.ttsProvider === 'azure' && state.azureApiKey) {
      try { await this._azurePage(text); return; }
      catch(e) { console.error('Azure TTS:', e.message); UI.showTTSError(e.message); }
    }
    this._webSpeak(text, spans);
  },

  stop() {
    window.speechSynthesis.cancel();
    if (this._source) { try { this._source.stop(); } catch(e) {} this._source = null; }
    this._timers.forEach(t => clearTimeout(t)); this._timers = [];
    this.activeSpans.forEach(s => s.classList.remove('speaking'));
    this.activeSpans = [];
    state.speaking = false;
    UI.updateReadButton(false);
    this.hideTTSBar();
  },

  /* ── Google Cloud TTS ── */

  async _googlePage(text, spans) {
    const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const words = text.split(/(\s+)/);
    let ci = 0;
    const wordData = [];
    let ssmlBody = '', wi = 0;
    words.forEach(tok => {
      if (/^\s+$/.test(tok)) { ssmlBody += tok; ci += tok.length; return; }
      wordData.push({ charIdx: ci });
      ssmlBody += `<mark name="w${wi}"/>${esc(tok)}`; wi++; ci += tok.length;
    });

    const data = await this._googleB64({
      ssml: `<speak>${ssmlBody}</speak>`,
      enableTimePointing: true
    });

    // Schedule word highlights using precise API timepoints
    if (data.timepoints && spans) {
      data.timepoints.forEach(tp => {
        const idx = parseInt(tp.markName.slice(1));
        const wd = wordData[idx];
        if (!wd) return;
        const span = spans.find(s => Math.abs(parseInt(s.dataset.start) - wd.charIdx) <= 1);
        if (!span) return;
        this._timers.push(setTimeout(() => {
          if (!state.speaking) return;
          spans.forEach(s => s.classList.remove('speaking'));
          span.classList.add('speaking');
          span.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }, tp.timeSeconds * 1000));
      });
    }

    await this._playB64(data.audioContent);
    this._finish();
  },

  // Returns { audioContent, timepoints? } or just the base64 string
  async _googleB64(input) {
    const body = {
      voice: { languageCode: 'es-ES', name: 'es-ES-Neural2-A' },
      audioConfig: { audioEncoding: 'MP3', speakingRate: state.ttsRate }
    };
    if (input.text)   body.input = { text: input.text };
    if (input.ssml)   body.input = { ssml: input.ssml };
    if (input.enableTimePointing) body.enableTimePointing = ['SSML_MARK'];

    const resp = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${state.googleApiKey}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
    );
    if (!resp.ok) { const e = await resp.json(); throw new Error(e.error?.message || `HTTP ${resp.status}`); }
    const data = await resp.json();
    if (!data.audioContent) throw new Error('Google TTS: respuesta sin audio');
    return input.enableTimePointing ? data : data.audioContent;
  },

  /* ── Azure Neural TTS ── */

  async _azurePage(text) {
    await this._playB64(await this._azureB64(text));
    this._finish();
  },

  async _azureB64(text) {
    const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const ssml = `<speak version='1.0' xml:lang='es-ES'><voice name='es-ES-ElviraNeural'><prosody rate="${state.ttsRate}">${esc(text)}</prosody></voice></speak>`;
    const resp = await fetch(
      `https://${state.azureRegion}.tts.speech.microsoft.com/cognitiveservices/v1`,
      { method: 'POST',
        headers: { 'Ocp-Apim-Subscription-Key': state.azureApiKey,
                   'Content-Type': 'application/ssml+xml',
                   'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3' },
        body: ssml }
    );
    if (!resp.ok) throw new Error(`Azure TTS: HTTP ${resp.status}`);
    // Convert blob → base64
    const blob = await resp.blob();
    return new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onload = () => res(fr.result.split(',')[1]);
      fr.onerror = rej;
      fr.readAsDataURL(blob);
    });
  },

  /* ── AudioContext playback (bypasses autoplay policy) ── */

  _ensureCtx() {
    if (!this._ctx) this._ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this._ctx.state === 'suspended') this._ctx.resume();
  },

  async _playB64(b64) {
    const raw = atob(b64);
    const bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
    const decoded = await this._ctx.decodeAudioData(bytes.buffer);
    if (this._source) { try { this._source.stop(); } catch(e) {} }
    const src = this._ctx.createBufferSource();
    src.buffer = decoded;
    src.connect(this._ctx.destination);
    this._source = src;
    return new Promise(resolve => { src.onended = resolve; src.start(0); });
  },

  /* ── Web Speech API fallback ── */

  _webSpeak(text, spans) {
    // 50 ms delay avoids Chrome/Edge bug where speak() after cancel() is ignored
    setTimeout(() => {
      if (!state.speaking && spans) return;
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'es-ES';
      utt.rate = Math.max(0.1, state.ttsRate * 0.9);
      utt.pitch = 1.0; utt.volume = 1.0;
      if (this.voice) utt.voice = this.voice;

      utt.onboundary = (e) => {
        if (e.name !== 'word' || !spans) return;
        spans.forEach(s => s.classList.remove('speaking'));
        const t = spans.find(sp =>
          parseInt(sp.dataset.start) >= e.charIndex &&
          parseInt(sp.dataset.start) < e.charIndex + (e.charLength || 20)
        );
        if (t) { t.classList.add('speaking'); t.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      };
      utt.onend = () => this._finish();
      utt.onerror = (e) => { console.error('Web Speech error:', e.error); this._finish(); };
      window.speechSynthesis.speak(utt);
    }, 50);
  },

  /* ── Shared helpers ── */

  _finish() {
    if (this._source) { try { this._source.stop(); } catch(e) {} this._source = null; }
    this._timers.forEach(t => clearTimeout(t)); this._timers = [];
    this.activeSpans.forEach(s => s.classList.remove('speaking'));
    this.activeSpans = [];
    state.speaking = false;
    UI.updateReadButton(false);
    this.hideTTSBar();
  },

  showTTSBar(text) {
    document.getElementById('tts-bar-text').textContent = text;
    document.getElementById('tts-bar').classList.remove('hidden');
  },
  hideTTSBar() { document.getElementById('tts-bar').classList.add('hidden'); }
};


/* ─── SECTION 4: STORY MANAGER ─────────────────────────────── */

const StoryManager = {
  getAllStories() {
    return [...BUILTIN_STORIES, ...state.customStories];
  },

  getFiltered(theme) {
    const all = this.getAllStories();
    if (!theme || theme === 'all') return all;
    return all.filter(s => s.theme === theme);
  },

  getById(id) {
    return this.getAllStories().find(s => s.id === id) || null;
  },

  importStory(obj) {
    const existing = state.customStories.findIndex(s => s.id === obj.id);
    if (existing >= 0) {
      state.customStories[existing] = obj;
    } else {
      state.customStories.push(obj);
    }
    Storage.saveStories(state.customStories);
  },

  deleteStory(id) {
    state.customStories = state.customStories.filter(s => s.id !== id);
    Storage.saveStories(state.customStories);
  },

  isBuiltin(id) {
    return BUILTIN_STORIES.some(s => s.id === id);
  },

  validateStory(obj) {
    const errors = [];
    if (!obj || typeof obj !== 'object') return ['El JSON no es un objeto válido'];
    if (!obj.title || typeof obj.title !== 'string') errors.push('Falta el campo "title"');
    if (!obj.theme || typeof obj.theme !== 'string') errors.push('Falta el campo "theme"');
    if (!Array.isArray(obj.pages) || obj.pages.length === 0) errors.push('El cuento debe tener al menos una página en "pages"');
    if (obj.pages) {
      obj.pages.forEach((p, i) => {
        if (!p.text) errors.push(`La página ${i + 1} no tiene texto`);
      });
    }
    return errors;
  }
};

/* ─── SECTION 5: VIEW MANAGER ──────────────────────────────── */

const DIFFICULTY_LABELS = {
  beginner: { label: 'Fácil', cls: 'badge-easy' },
  intermediate: { label: 'Medio', cls: 'badge-medium' },
  advanced: { label: 'Difícil', cls: 'badge-hard' }
};

const UI = {
  showView(name) {
    TTS.stop();
    document.querySelectorAll('.view').forEach(v => {
      v.classList.toggle('active', v.id === `view-${name}`);
      v.classList.toggle('hidden', v.id !== `view-${name}`);
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === name);
    });
    const backBtn = document.getElementById('btn-back');
    backBtn.classList.toggle('hidden', name !== 'reader');
    state.currentView = name;
  },

  renderLibrary() {
    const grid = document.getElementById('story-grid');
    const empty = document.getElementById('no-stories');
    const stories = StoryManager.getFiltered(state.activeFilter);

    grid.innerHTML = '';
    if (stories.length === 0) {
      empty.classList.remove('hidden');
      return;
    }
    empty.classList.add('hidden');

    stories.forEach(story => {
      const card = document.createElement('div');
      card.className = 'story-card';
      card.dataset.id = story.id;

      const diff = DIFFICULTY_LABELS[story.difficulty] || DIFFICULTY_LABELS.beginner;
      const pages = story.pages ? story.pages.length : '?';

      card.innerHTML = `
        <div class="story-card-cover" style="background:${story.coverColor || '#4ECDC4'}">
          <span class="cover-emoji">${story.coverEmoji || '📖'}</span>
        </div>
        <div class="story-card-body">
          <div class="story-card-title">${story.title}</div>
          <div class="story-card-meta">
            <span class="badge ${diff.cls}">${diff.label}</span>
            <span class="badge badge-age">${story.ageMin || 5}-${story.ageMax || 10} años</span>
            <span class="badge badge-pages">${pages} pág.</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => Reader.openStory(story));
      grid.appendChild(card);
    });
  },

  updateReadButton(isReading) {
    const btn = document.getElementById('btn-read-aloud');
    const icon = document.getElementById('read-icon');
    const label = document.getElementById('read-label');
    btn.classList.toggle('is-reading', isReading);
    icon.textContent = isReading ? '⏹' : '🔊';
    label.textContent = isReading ? 'Parar' : 'Leer';
  },

  showTTSError(msg) {
    const bar = document.getElementById('tts-bar');
    const barText = document.getElementById('tts-bar-text');
    barText.textContent = `⚠️ ${msg} — usando navegador`;
    bar.classList.remove('hidden');
    setTimeout(() => bar.classList.add('hidden'), 5000);
  },

  showImportMessage(text, isError) {
    const el = document.getElementById('import-message');
    el.textContent = text;
    el.className = `import-message ${isError ? 'error' : 'success'}`;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 4000);
  }
};

/* ─── SECTION 6: READER ────────────────────────────────────── */

const Reader = {
  openStory(story) {
    state.currentStory = story;
    state.currentPage = 0;
    document.getElementById('reader-story-title').textContent = story.title;
    UI.showView('reader');
    this.renderPage(0);
  },

  renderPage(index) {
    TTS.stop();
    const story = state.currentStory;
    const page = story.pages[index];
    state.currentPage = index;

    // Page indicator
    document.getElementById('page-indicator').textContent =
      `${index + 1} / ${story.pages.length}`;

    // Illustration
    const illus = document.getElementById('page-illustration');
    illus.style.background = page.bgColor || '#f0f4ff';
    illus.setAttribute('aria-label', `Ilustración página ${index + 1}`);
    illus.innerHTML = `<span class="page-emoji">${page.emoji || '📖'}</span>`;

    // Text with clickable word spans
    const container = document.getElementById('page-text');
    container.innerHTML = this.buildWordSpans(page.text);

    // Attach word-click listeners
    container.querySelectorAll('.word-span').forEach(span => {
      span.addEventListener('click', () => TTS.speakWord(span.dataset.word));
    });

    // Nav buttons
    document.getElementById('btn-prev').disabled = index === 0;
    document.getElementById('btn-next').disabled = index === story.pages.length - 1;

    // Vocabulary section
    this.renderVocab(story.vocabulary);

    // Scroll reader to top
    document.getElementById('reader-container').scrollTop = 0;
  },

  buildWordSpans(text) {
    let html = '';
    let charIndex = 0;

    // Split on whitespace but keep original spacing
    const tokens = text.split(/(\s+)/);
    tokens.forEach(token => {
      if (/^\s+$/.test(token)) {
        html += token;
        charIndex += token.length;
      } else if (token.length > 0) {
        // Strip punctuation for TTS word, keep original for display
        const word = token.replace(/[¿?¡!.,;:«»"'()—–]/g, '').trim();
        if (word) {
          html += `<span class="word-span" data-start="${charIndex}" data-word="${word}">${token}</span>`;
        } else {
          html += token;
        }
        charIndex += token.length;
      }
    });
    return html;
  },

  renderVocab(vocabulary) {
    const section = document.getElementById('vocab-section');
    const list = document.getElementById('vocab-list');
    if (!vocabulary || vocabulary.length === 0) {
      section.classList.add('hidden');
      return;
    }
    section.classList.remove('hidden');
    list.innerHTML = vocabulary.map(v => `
      <div class="vocab-card" title="${v.hint || ''}">
        <span class="vocab-emoji">${v.emoji || '📝'}</span>
        <span class="vocab-word">${v.word}</span>
        <span class="vocab-hint">${v.hint || ''}</span>
      </div>
    `).join('');

    list.querySelectorAll('.vocab-card').forEach((card, i) => {
      card.addEventListener('click', () => TTS.speakWord(vocabulary[i].word));
    });
  },

  nextPage() {
    const story = state.currentStory;
    if (state.currentPage < story.pages.length - 1) {
      this.renderPage(state.currentPage + 1);
    } else {
      this.showComplete();
    }
  },

  prevPage() {
    if (state.currentPage > 0) {
      this.renderPage(state.currentPage - 1);
    }
  },

  showComplete() {
    document.getElementById('modal-story-title').textContent =
      `"${state.currentStory.title}"`;
    document.getElementById('modal-complete').classList.remove('hidden');
  },

  toggleReadAloud() {
    if (state.speaking) {
      TTS.stop();
      return;
    }
    const page = state.currentStory.pages[state.currentPage];
    const spans = Array.from(
      document.querySelectorAll('#page-text .word-span')
    );
    TTS.readPage(page.text, spans);
  }
};

/* ─── SECTION 7: CUSTOMIZER ────────────────────────────────── */

const Customizer = {
  updateSelection(key, value, emoji) {
    state.customizerSelections[key] = value;
    if (emoji !== undefined) state.customizerSelections[`${key}Emoji`] = emoji;
    this.checkReady();
  },

  setName(name) {
    state.customizerSelections.name = name.trim();
    this.checkReady();
  },

  checkReady() {
    const s = state.customizerSelections;
    const ready = s.name && s.companion && s.place && s.value;
    document.getElementById('btn-create-story').disabled = !ready;
    if (ready) this.updatePreview();
    return !!ready;
  },

  updatePreview() {
    const s = state.customizerSelections;
    const preview = document.getElementById('customizer-preview');
    const cover = document.getElementById('preview-cover');
    const info = document.getElementById('preview-info');

    cover.textContent = `${s.companionEmoji || '✨'} ${s.placeEmoji || '🌍'}`;
    info.innerHTML = `
      <strong>${s.name}</strong> y ${s.companion}<br>
      en ${s.place}<br>
      <em>aprende ${s.value}</em>
    `;
    preview.classList.remove('hidden');
  },

  generateStory() {
    const s = state.customizerSelections;
    const name = s.name;
    const companion = s.companion;
    const ce = s.companionEmoji || '🐾';
    const place = s.place;
    const pe = s.placeEmoji || '🌍';
    const value = s.value;
    const ve = s.valueEmoji || '⭐';

    const id = `custom-${Date.now()}`;
    const story = {
      id,
      title: `${name} y ${companion}`,
      theme: 'values',
      difficulty: 'beginner',
      ageMin: 5,
      ageMax: 9,
      coverEmoji: `${ce}${pe}`,
      coverColor: '#7986CB',
      author: 'Creado por ti',
      pages: [
        {
          pageNum: 1,
          text: `${name} vivía cerca de ${place}. Era un lugar lleno de colores y sonidos maravillosos. Un día, ${name} salió a explorar y encontró a ${companion} sentado solo debajo de un árbol. "Hola", dijo ${name}. "¿Quieres ser mi amigo?"`,
          emoji: `${ce}${pe}`,
          bgColor: '#e8f5e9'
        },
        {
          pageNum: 2,
          text: `${companion} asintió con alegría. Los dos empezaron a caminar juntos por ${place}. Pero de repente encontraron un problema: el camino estaba bloqueado por unas ramas caídas. ${name} se quedó pensando. "Juntos podemos moverlas", dijo con confianza.`,
          emoji: `${ce}🌿`,
          bgColor: '#e3f2fd'
        },
        {
          pageNum: 3,
          text: `${name} y ${companion} empujaron las ramas con fuerza. Primero una, luego otra, luego otra más. Era un trabajo duro, pero no se rindieron. Cuando terminaron, los dos se miraron y sonrieron. El camino estaba despejado y brillaba al sol.`,
          emoji: `💪✨`,
          bgColor: '#fff8e1'
        },
        {
          pageNum: 4,
          text: `Aquella tarde, ${name} y ${companion} volvieron a casa felices. ${name} había aprendido ${value}. "Gracias por estar conmigo", le dijo ${name} a ${companion}. Y ${companion} respondió: "Gracias a ti, amigo." Desde ese día, los dos fueron inseparables.`,
          emoji: `${ve}🤝`,
          bgColor: '#fce4ec'
        }
      ],
      vocabulary: [
        { word: 'explorar', emoji: '🗺️', hint: 'Ir a descubrir lugares nuevos' },
        { word: 'confianza', emoji: '💪', hint: 'Creer que puedes hacer algo bien' },
        { word: 'inseparables', emoji: '🤝', hint: 'Dos amigos que siempre están juntos' }
      ]
    };

    StoryManager.importStory(story);
    return story;
  },

  resetForm() {
    state.customizerSelections = {
      name: '', companion: '', companionEmoji: '',
      place: '', placeEmoji: '', value: '', valueEmoji: ''
    };
    document.getElementById('custom-name').value = '';
    document.querySelectorAll('.name-btn, .option-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-create-story').disabled = true;
    document.getElementById('customizer-preview').classList.add('hidden');
  }
};

/* ─── SECTION 8: IMPORTER ──────────────────────────────────── */

const AI_PROMPT_TEMPLATE = `Crea un cuento infantil en español (España) para niños de 5 a 10 años.
El cuento debe ser en formato JSON con esta estructura exacta:

{
  "id": "identificador-unico-sin-espacios",
  "title": "Título del cuento",
  "theme": "nature|animals|travel|culture|music|friendship|values",
  "difficulty": "beginner|intermediate|advanced",
  "ageMin": 5,
  "ageMax": 8,
  "coverEmoji": "🌿🦋",
  "coverColor": "#4CAF50",
  "author": "IA",
  "pages": [
    {
      "pageNum": 1,
      "text": "Texto de la página (2-4 frases simples).",
      "emoji": "🌱",
      "bgColor": "#e8f5e9"
    }
  ],
  "vocabulary": [
    {
      "word": "palabra",
      "emoji": "🌱",
      "hint": "Explicación breve para niños"
    }
  ]
}

Requisitos: Sin violencia, sin religión, sin política, apto para veganos.
Usa vocabulario de España (zumo, patatas, ordenador, vosotros).
4 páginas mínimo. 5 palabras de vocabulario.`;

const JSON_FORMAT_EXAMPLE = `{
  "id": "mi-cuento-001",
  "title": "El Árbol Generoso",
  "theme": "nature",
  "difficulty": "beginner",
  "ageMin": 5,
  "ageMax": 8,
  "coverEmoji": "🌳🐦",
  "coverColor": "#66BB6A",
  "author": "IA",
  "pages": [
    {
      "pageNum": 1,
      "text": "En el jardín del colegio había un árbol muy viejo y sabio.",
      "emoji": "🌳",
      "bgColor": "#e8f5e9"
    }
  ],
  "vocabulary": [
    {
      "word": "generoso",
      "emoji": "🤝",
      "hint": "Alguien que da sin esperar nada a cambio"
    }
  ]
}`;

const Importer = {
  parseAndImport(jsonString) {
    let obj;
    try {
      obj = JSON.parse(jsonString.trim());
    } catch {
      UI.showImportMessage('❌ El texto no es un JSON válido. Comprueba que no falten llaves o comillas.', true);
      return false;
    }

    // Support array of stories
    const stories = Array.isArray(obj) ? obj : [obj];
    let imported = 0;
    let errors = [];

    stories.forEach((story, i) => {
      if (!story.id) story.id = `imported-${Date.now()}-${i}`;
      const errs = StoryManager.validateStory(story);
      if (errs.length) {
        errors.push(...errs);
      } else {
        StoryManager.importStory(story);
        imported++;
      }
    });

    if (errors.length) {
      UI.showImportMessage(`❌ ${errors[0]}`, true);
      return false;
    }

    UI.showImportMessage(`✅ ${imported} cuento${imported !== 1 ? 's' : ''} importado${imported !== 1 ? 's' : ''} correctamente.`, false);
    this.renderImportedList();
    UI.renderLibrary();
    return true;
  },

  handleFile(file) {
    if (!file || !file.name.endsWith('.json')) {
      UI.showImportMessage('❌ Por favor, selecciona un archivo .json', true);
      return;
    }
    const reader = new FileReader();
    reader.onload = e => this.parseAndImport(e.target.result);
    reader.onerror = () => UI.showImportMessage('❌ No se pudo leer el archivo.', true);
    reader.readAsText(file);
  },

  renderImportedList() {
    const list = document.getElementById('imported-stories-list');
    if (state.customStories.length === 0) {
      list.innerHTML = '<p class="empty-imported">Todavía no has importado ningún cuento.</p>';
      return;
    }
    list.innerHTML = state.customStories.map(s => `
      <div class="imported-item">
        <span class="imported-emoji">${s.coverEmoji || '📖'}</span>
        <span class="imported-title">${s.title}</span>
        <button class="btn-delete-story" data-id="${s.id}" aria-label="Eliminar ${s.title}">🗑️</button>
      </div>
    `).join('');

    list.querySelectorAll('.btn-delete-story').forEach(btn => {
      btn.addEventListener('click', () => {
        StoryManager.deleteStory(btn.dataset.id);
        this.renderImportedList();
        UI.renderLibrary();
      });
    });
  },

  initPromptTemplates() {
    document.getElementById('ai-prompt-template').textContent = AI_PROMPT_TEMPLATE;
    document.getElementById('format-example').textContent = JSON_FORMAT_EXAMPLE;
  }
};

/* ─── SECTION 9: EVENT LISTENERS ───────────────────────────── */

function attachEventListeners() {
  // Bottom nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      UI.showView(btn.dataset.view);
      if (btn.dataset.view === 'library') UI.renderLibrary();
      if (btn.dataset.view === 'importer') Importer.renderImportedList();
    });
  });

  // Back button
  document.getElementById('btn-back').addEventListener('click', () => {
    UI.showView('library');
    UI.renderLibrary();
  });

  // Font size toggle (cycles small → medium → large → xlarge → small)
  const fontSizes = ['small', 'medium', 'large', 'xlarge'];
  document.getElementById('btn-font').addEventListener('click', () => {
    const idx = fontSizes.indexOf(state.fontSize);
    state.fontSize = fontSizes[(idx + 1) % fontSizes.length];
    const text = document.getElementById('page-text');
    if (text) {
      text.className = `font-${state.fontSize}`;
    }
    Storage.saveSettings({ fontSize: state.fontSize });
  });

  // Library filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = btn.dataset.filter;
      UI.renderLibrary();
    });
  });

  // Reader: prev / next / read-aloud
  document.getElementById('btn-prev').addEventListener('click', () => Reader.prevPage());
  document.getElementById('btn-next').addEventListener('click', () => Reader.nextPage());
  document.getElementById('btn-read-aloud').addEventListener('click', () => Reader.toggleReadAloud());

  // TTS bar stop button
  document.getElementById('btn-stop-tts').addEventListener('click', () => TTS.stop());

  // Story complete modal
  document.getElementById('btn-finish-story').addEventListener('click', () => {
    document.getElementById('modal-complete').classList.add('hidden');
    UI.showView('library');
    UI.renderLibrary();
  });

  // Customizer: name buttons
  document.querySelectorAll('.name-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.name-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('custom-name').value = btn.dataset.name;
      Customizer.setName(btn.dataset.name);
    });
  });

  // Customizer: custom name input
  document.getElementById('custom-name').addEventListener('input', e => {
    document.querySelectorAll('.name-btn').forEach(b => b.classList.remove('active'));
    Customizer.setName(e.target.value);
  });

  // Customizer: option buttons (companion, place, value)
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      document.querySelectorAll(`.option-btn[data-key="${key}"]`)
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      Customizer.updateSelection(key, btn.dataset.value, btn.dataset.emoji);
    });
  });

  // Customizer: create story button
  document.getElementById('btn-create-story').addEventListener('click', () => {
    if (!Customizer.checkReady()) return;
    const story = Customizer.generateStory();
    Customizer.resetForm();
    Reader.openStory(story);
  });

  // Importer: file input
  document.getElementById('file-input').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) Importer.handleFile(file);
    e.target.value = '';
  });

  // Importer: drag and drop
  const dropZone = document.getElementById('drop-zone');
  dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) Importer.handleFile(file);
  });

  // Importer: paste and import
  document.getElementById('btn-import-json').addEventListener('click', () => {
    const text = document.getElementById('json-paste').value.trim();
    if (!text) {
      UI.showImportMessage('❌ El campo de texto está vacío.', true);
      return;
    }
    const ok = Importer.parseAndImport(text);
    if (ok) document.getElementById('json-paste').value = '';
  });

  // Importer: copy prompt button
  document.getElementById('btn-copy-prompt').addEventListener('click', () => {
    navigator.clipboard.writeText(AI_PROMPT_TEMPLATE).then(() => {
      const btn = document.getElementById('btn-copy-prompt');
      btn.textContent = '✅ Copiado';
      setTimeout(() => { btn.textContent = '📋 Copiar instrucción'; }, 2000);
    }).catch(() => {
      UI.showImportMessage('No se pudo copiar. Selecciona el texto manualmente.', true);
    });
  });

  // Importer: copy format button
  document.getElementById('btn-copy-format').addEventListener('click', () => {
    navigator.clipboard.writeText(JSON_FORMAT_EXAMPLE).then(() => {
      const btn = document.getElementById('btn-copy-format');
      btn.textContent = '✅ Copiado';
      setTimeout(() => { btn.textContent = '📋 Copiar esquema JSON'; }, 2000);
    }).catch(() => {});
  });

  // Speed control buttons
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.ttsRate = parseFloat(btn.dataset.rate);
      Storage.saveSettings(_currentSettings());
    });
  });

  // TTS provider selector
  document.getElementById('tts-provider').addEventListener('change', e => {
    const v = e.target.value;
    document.getElementById('google-key-row').classList.toggle('hidden', v !== 'google');
    document.getElementById('azure-key-row').classList.toggle('hidden', v !== 'azure');
  });

  // Save TTS API key
  document.getElementById('btn-save-tts-key').addEventListener('click', () => {
    const provider = document.getElementById('tts-provider').value;
    const gKey = document.getElementById('google-api-key').value.trim();
    const aKey = document.getElementById('azure-api-key').value.trim();
    const aRegion = document.getElementById('azure-region').value.trim() || 'westeurope';
    state.ttsProvider = provider;
    state.googleApiKey = gKey;
    state.azureApiKey = aKey;
    state.azureRegion = aRegion;
    Storage.saveSettings(_currentSettings());
    const status = document.getElementById('tts-key-status');
    status.className = 'tts-key-status ok';
    status.textContent = provider
      ? `✅ Configuración guardada (${provider === 'google' ? 'Google Cloud' : 'Azure'})`
      : '✅ Usando el motor del navegador';
    status.classList.remove('hidden');
    setTimeout(() => status.classList.add('hidden'), 3000);
  });
}

function _currentSettings() {
  return {
    fontSize: state.fontSize,
    ttsRate: state.ttsRate,
    ttsProvider: state.ttsProvider,
    googleApiKey: state.googleApiKey,
    azureApiKey: state.azureApiKey,
    azureRegion: state.azureRegion
  };
}

/* ─── SECTION 10: INIT ─────────────────────────────────────── */

function init() {
  state.customStories = Storage.loadStories();
  const s = Storage.loadSettings();
  if (s.fontSize)    state.fontSize    = s.fontSize;
  if (s.ttsRate)     state.ttsRate     = s.ttsRate;
  if (s.ttsProvider) state.ttsProvider = s.ttsProvider;
  if (s.googleApiKey) state.googleApiKey = s.googleApiKey;
  if (s.azureApiKey)  state.azureApiKey  = s.azureApiKey;
  if (s.azureRegion)  state.azureRegion  = s.azureRegion;

  // Apply saved font size
  const pageText = document.getElementById('page-text');
  if (pageText) pageText.className = `font-${state.fontSize}`;

  // Apply saved speed button state
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.classList.toggle('active', parseFloat(btn.dataset.rate) === state.ttsRate);
  });

  // Apply saved TTS provider UI
  if (state.ttsProvider) {
    const sel = document.getElementById('tts-provider');
    if (sel) {
      sel.value = state.ttsProvider;
      document.getElementById('google-key-row').classList.toggle('hidden', state.ttsProvider !== 'google');
      document.getElementById('azure-key-row').classList.toggle('hidden', state.ttsProvider !== 'azure');
    }
    if (state.googleApiKey) document.getElementById('google-api-key').value = state.googleApiKey;
    if (state.azureApiKey)  document.getElementById('azure-api-key').value  = state.azureApiKey;
    if (state.azureRegion)  document.getElementById('azure-region').value   = state.azureRegion;
  }

  TTS.init();
  Importer.initPromptTemplates();
  attachEventListeners();
  UI.renderLibrary();
  UI.showView('library');
}

document.addEventListener('DOMContentLoaded', init);
