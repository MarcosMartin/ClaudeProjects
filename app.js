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
  fontSize: 'medium',         // small | medium | large | xlarge
  activeFilter: 'all',
  customStories: [],           // imported + generated stories
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

const TTS = {
  voice: null,
  utterance: null,
  activeSpans: [],

  init() {
    const tryLoad = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      this.voice =
        voices.find(v => v.lang === 'es-ES') ||
        voices.find(v => v.lang.startsWith('es')) ||
        voices.find(v => v.lang.toLowerCase().includes('es')) ||
        null;
    };
    tryLoad();
    window.speechSynthesis.addEventListener('voiceschanged', tryLoad);
  },

  speakWord(word) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(word);
    utt.lang = 'es-ES';
    utt.rate = 0.85;
    if (this.voice) utt.voice = this.voice;
    window.speechSynthesis.speak(utt);
  },

  readPage(text, spans) {
    window.speechSynthesis.cancel();
    this.activeSpans = spans || [];

    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'es-ES';
    utt.rate = 0.8;
    if (this.voice) utt.voice = this.voice;

    utt.onboundary = (e) => {
      if (e.name !== 'word') return;
      this.activeSpans.forEach(s => s.classList.remove('speaking'));
      const target = this.activeSpans.find(s =>
        parseInt(s.dataset.start, 10) === e.charIndex
      );
      if (target) {
        target.classList.add('speaking');
        target.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    };

    utt.onend = () => {
      this.activeSpans.forEach(s => s.classList.remove('speaking'));
      state.speaking = false;
      UI.updateReadButton(false);
      TTS.hideTTSBar();
    };

    utt.onerror = () => {
      state.speaking = false;
      UI.updateReadButton(false);
      TTS.hideTTSBar();
    };

    this.utterance = utt;
    state.speaking = true;
    UI.updateReadButton(true);
    this.showTTSBar(text.slice(0, 60) + (text.length > 60 ? '…' : ''));
    window.speechSynthesis.speak(utt);
  },

  stop() {
    window.speechSynthesis.cancel();
    this.activeSpans.forEach(s => s.classList.remove('speaking'));
    this.activeSpans = [];
    state.speaking = false;
    UI.updateReadButton(false);
    this.hideTTSBar();
  },

  showTTSBar(text) {
    const bar = document.getElementById('tts-bar');
    const barText = document.getElementById('tts-bar-text');
    barText.textContent = text;
    bar.classList.remove('hidden');
  },

  hideTTSBar() {
    document.getElementById('tts-bar').classList.add('hidden');
  }
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
}

/* ─── SECTION 10: INIT ─────────────────────────────────────── */

function init() {
  // Load persisted data
  state.customStories = Storage.loadStories();
  const settings = Storage.loadSettings();
  if (settings.fontSize) state.fontSize = settings.fontSize;

  // Apply saved font size
  const pageText = document.getElementById('page-text');
  if (pageText) pageText.className = `font-${state.fontSize}`;

  // Boot subsystems
  TTS.init();
  Importer.initPromptTemplates();
  attachEventListeners();

  // Render initial view
  UI.renderLibrary();
  UI.showView('library');
}

document.addEventListener('DOMContentLoaded', init);
