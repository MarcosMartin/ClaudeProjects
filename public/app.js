/* ============================================================
   Lee Conmigo — Client-side app
   ============================================================ */

// ---- Data ----

const CATEGORIES = [
  { id: 'todos',       label: 'Todos',      emoji: '📚', color: '#2C3E50' },
  { id: 'animales',    label: 'Animales',   emoji: '🦁', color: '#4ECDC4' },
  { id: 'naturaleza',  label: 'Naturaleza', emoji: '🌿', color: '#A8E6CF' },
  { id: 'amistad',     label: 'Amistad',    emoji: '👫', color: '#C9B1FF' },
  { id: 'viajes',      label: 'Viajes',     emoji: '🌍', color: '#FF6B6B' },
  { id: 'música',      label: 'Música',     emoji: '🎵', color: '#FFB347' },
  { id: 'cultura',     label: 'Cultura',    emoji: '💃', color: '#FF85A1' },
  { id: 'valores',     label: 'Valores',    emoji: '⭐', color: '#74B9FF' },
];

const CAT_HOME = CATEGORIES.filter(c => c.id !== 'todos');

const STORIES = [
  {
    id: 1,
    title: 'El bosque de los amigos',
    emoji: '🦊',
    category: 'animales',
    ageGroup: '5-7',
    color: '#4ECDC4',
    paragraphs: [
      'En un bosque muy verde vive una zorra llamada Lola. Lola tiene el pelo naranja y los ojos brillantes. Le gusta correr entre los árboles.',
      'Un día, Lola encuentra a un erizo llamado Pino. Pino está triste porque no puede abrazar a nadie. Sus pinchos pinchan a todos.',
      'Lola piensa un momento. Luego dice: «¡Yo tengo una idea! Puedo darte un abrazo con mi cola esponjosa». Pino sonríe muy contento.',
      'Desde ese día, Lola y Pino son mejores amigos. Juegan juntos cada tarde. El bosque es más alegre con su amistad.',
    ],
  },
  {
    id: 2,
    title: 'Viaje a Barcelona',
    emoji: '🏛️',
    category: 'viajes',
    ageGroup: '7-10',
    color: '#FF6B6B',
    paragraphs: [
      'Sofía y su familia viajan en tren a Barcelona. Sofía mira por la ventana y ve campos de girasoles y montañas azules. Está muy emocionada.',
      'Cuando llegan, van a ver la Sagrada Família. Es un edificio muy grande y colorido. Sofía dice: «¡Parece un castillo de arena gigante!»',
      'Por la tarde, pasean por Las Ramblas. Ven a artistas que pintan y músicos que tocan la guitarra. Sofía compra un helado de fresa.',
      'Al final del día, comen en un restaurante con muchas verduras y frutas. La paella de verduras está deliciosa. Sofía ya quiere volver mañana.',
    ],
  },
  {
    id: 3,
    title: 'La canción del río',
    emoji: '🎵',
    category: 'música',
    ageGroup: '5-7',
    color: '#FFB347',
    paragraphs: [
      'Cerca del río vive una niña llamada Luna. Luna ama la música. Cada mañana escucha el sonido del agua.',
      'El río hace música al correr sobre las piedras. «¡El río canta!», dice Luna. Las ranas también cantan: «¡croac, croac!»',
      'Luna coge unas piedras y las golpea suavemente. ¡Hace música también! Los pájaros escuchan y cantan con ella.',
      'Toda la naturaleza hace música. Luna aprende que la mejor música está en el mundo que nos rodea.',
    ],
  },
  {
    id: 4,
    title: 'El huerto de la abuela',
    emoji: '🥕',
    category: 'naturaleza',
    ageGroup: '5-7',
    color: '#A8E6CF',
    paragraphs: [
      'La abuela Carmen tiene un huerto muy bonito. Hay tomates rojos, zanahorias naranjas y lechugas verdes. Todo huele muy bien.',
      'Marcos ayuda a su abuela a regar las plantas. Usa una regadera azul. Las plantas beben el agua y crecen felices.',
      '«Las plantas son como nosotros», dice la abuela. «Necesitan agua, sol y cariño para crecer». Marcos lo entiende.',
      'Al final, recogen tomates y zanahorias. La abuela hace una ensalada riquísima. Marcos come todo porque él mismo lo ha cuidado.',
    ],
  },
  {
    id: 5,
    title: 'Amigos en el parque',
    emoji: '👫',
    category: 'amistad',
    ageGroup: '5-7',
    color: '#C9B1FF',
    paragraphs: [
      'Aisha va al parque y ve a un niño solo en el columpio. El niño se llama Tomás. Parece triste.',
      'Aisha se acerca y dice: «¡Hola! ¿Quieres jugar conmigo?» Tomás sonríe tímidamente. «Sí, por favor», dice.',
      'Juegan juntos al escondite y al balón. Ríen mucho. Tomás ya no está solo ni triste.',
      'Cuando se va a casa, Aisha piensa: «Un amigo nuevo es el mejor regalo del parque». Y Tomás piensa lo mismo.',
    ],
  },
  {
    id: 6,
    title: 'La tortuga Paz',
    emoji: '🐢',
    category: 'animales',
    ageGroup: '7-10',
    color: '#4ECDC4',
    paragraphs: [
      'Paz es una tortuga que vive en un lago tranquilo. Camina despacio pero siempre llega a donde quiere ir. Nunca tiene prisa.',
      'Un día, una liebre le dice: «¡Eres muy lenta, tortuga!» Paz sonríe y responde: «Cada uno tiene su ritmo y está bien».',
      'La liebre corre muy rápido pero a veces se cae y se lastima. Paz camina segura y disfruta del paisaje.',
      'Al atardecer, Paz llega al árbol más grande del bosque. Ve la puesta de sol desde allí. Está orgullosa de ser ella misma.',
    ],
  },
  {
    id: 7,
    title: 'El flamenco de Sevilla',
    emoji: '💃',
    category: 'cultura',
    ageGroup: '7-10',
    color: '#FF85A1',
    paragraphs: [
      'En Sevilla, la ciudad de los naranjos, vive una niña llamada Carmen. Carmen aprende flamenco con su profesora Dolores.',
      'El flamenco es una danza española muy especial. Los pies golpean el suelo con ritmo. Las manos se mueven como pájaros.',
      'Carmen practica cada día. Al principio es difícil, pero con esfuerzo mejora mucho. «El arte necesita paciencia», dice Dolores.',
      'En la primera actuación, Carmen baila con fuerza y alegría. El público aplaude. Carmen aprende que el esfuerzo vale la pena.',
    ],
  },
  {
    id: 8,
    title: 'Los delfines del Mediterráneo',
    emoji: '🐬',
    category: 'naturaleza',
    ageGroup: '7-10',
    color: '#74B9FF',
    paragraphs: [
      'En el mar Mediterráneo viven muchos delfines alegres. Nadan juntos en familia y se cuidan los unos a los otros.',
      'Marta y su madre los ven desde un barco. Los delfines saltan y hacen piruetas en el agua azul. «¡Son libres y felices!», dice Marta.',
      'Su madre explica: «Los delfines son muy inteligentes. Se comunican con sonidos y nunca abandonan a su familia».',
      'Marta observa y aprende. Decide cuidar el mar para que los delfines siempre tengan un hogar limpio y seguro.',
    ],
  },
  {
    id: 9,
    title: 'El regalo de compartir',
    emoji: '🎁',
    category: 'valores',
    ageGroup: '5-7',
    color: '#74B9FF',
    paragraphs: [
      'Leo tiene muchos juguetes pero juega solo. Un día, su vecina Sara llega a casa y no tiene juguetes.',
      'Leo mira sus juguetes y piensa. Luego coge su pelota favorita y se la da a Sara. «Podemos jugar juntos», dice.',
      'Juegan toda la tarde y se ríen mucho. Leo se da cuenta: compartir es más divertido que tener todo solo.',
      'Aquella noche, Leo le dice a su mamá: «Compartir hace que todo sea mejor». Su mamá le da un gran abrazo.',
    ],
  },
  {
    id: 10,
    title: 'Montañas de los Pirineos',
    emoji: '⛰️',
    category: 'viajes',
    ageGroup: '7-10',
    color: '#A8E6CF',
    paragraphs: [
      'La familia de Iñaki vive cerca de los Pirineos. Cada verano suben a ver las montañas. Es su tradición favorita.',
      'En las montañas hay flores silvestres de todos los colores. También hay mariposas y águilas que vuelan muy alto.',
      'Iñaki respira el aire fresco y dice: «¡Aquí todo es enorme y bonito!» Su padre sonríe: «La naturaleza es el mejor espectáculo».',
      'Cuando bajan, Iñaki lleva flores para su abuela. Ella las pone en un jarrón. Las montañas están ahora en su casa también.',
    ],
  },
  {
    id: 11,
    title: 'Maya y la mariposa',
    emoji: '🦋',
    category: 'naturaleza',
    ageGroup: '5-7',
    color: '#A8E6CF',
    paragraphs: [
      'Maya encuentra una mariposa en el jardín. Sus alas son de color naranja y negro. Es muy bonita.',
      'Maya quiere cogerla, pero su hermano dice: «Las mariposas son libres. Las miramos sin tocarlas».',
      'Maya se queda quieta y la mariposa se posa en su mano. Están las dos muy tranquilas.',
      'La mariposa vuela y se va. Maya sonríe. Ha aprendido que respetar a los animales es muy importante.',
    ],
  },
  {
    id: 12,
    title: 'El mercado de Valencia',
    emoji: '🍊',
    category: 'cultura',
    ageGroup: '5-7',
    color: '#FF85A1',
    paragraphs: [
      'Pablo va al mercado de Valencia con su mamá. Hay muchos colores y olores. Le encanta ir allí.',
      'Ven naranjas, sandías, melones y muchas frutas más. El señor del puesto le da una naranja a Pablo.',
      'Pablo la pela y la come. Está jugosa y muy dulce. «¡Qué ricas están las naranjas de Valencia!», dice.',
      'En casa, hacen zumo de naranja para toda la familia. Es el mejor zumo del mundo, dice el abuelo.',
    ],
  },
];

const PROMPT_IDEAS = [
  '🐘 Un elefante viajero',
  '🌊 El mar en verano',
  '🎸 Un concierto de música',
  '🦜 Un loro que habla',
  '🌈 Después de la lluvia',
  '🍄 Un bosque mágico',
  '🐝 Las abejas del campo',
  '🎨 Un pintor famoso',
];

// ---- State ----

const state = {
  view: 'home',
  ageGroup: '5-7',
  selectedCategory: 'todos',
  currentStory: null,
  slowMode: false,
  speaking: false,
  generatedStory: null,
};

// ---- TTS ----

let currentUtterance = null;
let activeWordEl = null;
let activeParaBtn = null;

function stopSpeech() {
  window.speechSynthesis.cancel();
  state.speaking = false;
  if (activeWordEl) { activeWordEl.classList.remove('active'); activeWordEl = null; }
  if (activeParaBtn) { activeParaBtn.classList.remove('playing'); activeParaBtn = null; }
  document.getElementById('ctrl-stop').classList.remove('active');
  document.getElementById('ctrl-play-all').classList.remove('active');
}

function speakText(text, onEnd, btnEl) {
  stopSpeech();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'es-ES';
  utter.rate = state.slowMode ? 0.6 : 0.9;
  utter.pitch = 1.1;
  currentUtterance = utter;
  state.speaking = true;
  if (btnEl) { activeParaBtn = btnEl; btnEl.classList.add('playing'); }
  document.getElementById('ctrl-stop').classList.add('active');
  utter.onend = () => {
    state.speaking = false;
    if (btnEl) btnEl.classList.remove('playing');
    document.getElementById('ctrl-stop').classList.remove('active');
    if (onEnd) onEnd();
  };
  utter.onerror = () => {
    state.speaking = false;
    if (btnEl) btnEl.classList.remove('playing');
    document.getElementById('ctrl-stop').classList.remove('active');
  };
  window.speechSynthesis.speak(utter);
}

function speakWord(wordEl) {
  const word = wordEl.textContent.replace(/[«»¿?¡!.,;:]/g, '').trim();
  if (!word) return;
  stopSpeech();
  if (activeWordEl) activeWordEl.classList.remove('active');
  activeWordEl = wordEl;
  wordEl.classList.add('active');
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'es-ES';
  utter.rate = 0.8;
  utter.pitch = 1.1;
  utter.onend = () => { wordEl.classList.remove('active'); wordEl.classList.add('spoken'); };
  window.speechSynthesis.speak(utter);
}

function playAllParagraphs() {
  const blocks = document.querySelectorAll('.paragraph-block');
  if (!blocks.length) return;
  document.getElementById('ctrl-play-all').classList.add('active');
  let i = 0;
  const playNext = () => {
    if (i >= blocks.length) {
      document.getElementById('ctrl-play-all').classList.remove('active');
      return;
    }
    const btn = blocks[i].querySelector('.paragraph-play-btn');
    const text = blocks[i].querySelector('.paragraph-text').textContent;
    i++;
    speakText(text, playNext, btn);
  };
  playNext();
}

// ---- Rendering helpers ----

function makeClickableText(text) {
  return text.split(/(\s+)/).map(token => {
    if (/^\s+$/.test(token)) return token;
    return `<span class="word" onclick="speakWord(this)">${token}</span>`;
  }).join('');
}

function getCategoryMeta(catId) {
  return CATEGORIES.find(c => c.id === catId) || CATEGORIES[0];
}

function getStoriesForView() {
  return STORIES.filter(s => {
    const catOk = state.selectedCategory === 'todos' || s.category === state.selectedCategory;
    const ageOk = s.ageGroup === state.ageGroup || state.ageGroup === 'todos';
    return catOk && ageOk;
  });
}

// ---- Home view ----

function renderHome() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = CAT_HOME.map(cat => {
    const count = STORIES.filter(s => s.category === cat.id && s.ageGroup === state.ageGroup).length;
    return `
      <button class="category-card" style="background:${cat.color};" onclick="openCategory('${cat.id}')">
        <span class="cat-emoji">${cat.emoji}</span>
        <span class="cat-name">${cat.label}</span>
        <span class="cat-count">${count} ${count === 1 ? 'historia' : 'historias'}</span>
      </button>`;
  }).join('');
}

function openCategory(catId) {
  state.selectedCategory = catId;
  navigate('stories');
}

// ---- Stories view ----

function renderStories() {
  const cat = getCategoryMeta(state.selectedCategory);
  document.getElementById('stories-category-title').textContent =
    state.selectedCategory === 'todos' ? '📚 Todas las historias' : `${cat.emoji} ${cat.label}`;

  // Filter tabs
  const tabs = document.getElementById('filter-tabs');
  tabs.innerHTML = CATEGORIES.map(c => {
    const active = c.id === state.selectedCategory ? 'active' : '';
    return `<button class="filter-tab ${active}" onclick="setCategory('${c.id}')">${c.emoji} ${c.label}</button>`;
  }).join('');

  // Story cards
  const filtered = getStoriesForView();
  const grid = document.getElementById('stories-grid');
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-emoji">🔍</div><p>No hay historias para esta selección.<br>Prueba con otro grupo de edad.</p></div>`;
    return;
  }
  grid.innerHTML = filtered.map(s => `
    <button class="story-card" onclick="openStory(${s.id})">
      <div class="story-card-cover" style="background:${s.color}20;">${s.emoji}</div>
      <div class="story-card-info">
        <div class="story-card-title">${s.title}</div>
        <div class="story-card-meta">
          <span class="story-badge">${getCategoryMeta(s.category).label}</span>
          <span class="story-badge">${s.ageGroup} años</span>
        </div>
      </div>
      <span class="story-arrow">›</span>
    </button>`).join('');
}

function setCategory(catId) {
  state.selectedCategory = catId;
  renderStories();
}

// ---- Reader view ----

function openStory(id) {
  const story = STORIES.find(s => s.id === id) || state.generatedStory;
  if (!story) return;
  state.currentStory = story;
  renderReader(story);
  navigate('reader');
}

function openGeneratedStory(story) {
  state.generatedStory = { ...story, id: 'generated', ageGroup: state.ageGroup };
  state.currentStory = state.generatedStory;
  renderReader(state.generatedStory);
  navigate('reader');
}

function renderReader(story) {
  stopSpeech();

  const hero = document.getElementById('reader-hero');
  hero.style.background = `linear-gradient(135deg, ${story.color || '#4ECDC4'}, ${story.color || '#4ECDC4'}cc)`;
  document.getElementById('reader-emoji').textContent = story.emoji || '📖';
  document.getElementById('reader-title').textContent = story.title;

  const cat = getCategoryMeta(story.category);
  document.getElementById('reader-meta').textContent = `${cat.emoji} ${cat.label} · ${story.ageGroup || state.ageGroup} años`;

  document.getElementById('story-paragraphs').innerHTML = story.paragraphs.map((p, i) => `
    <div class="paragraph-block">
      <button class="paragraph-play-btn" onclick="playParagraph(this, ${i})" title="Escuchar párrafo">▶</button>
      <div class="paragraph-text">${makeClickableText(p)}</div>
    </div>`).join('');

  document.getElementById('ctrl-slow').classList.toggle('active', state.slowMode);
}

function playParagraph(btn, idx) {
  const story = state.currentStory;
  if (!story) return;
  speakText(story.paragraphs[idx], null, btn);
}

// ---- Create view ----

function renderCreate() {
  const chips = document.getElementById('ideas-chips');
  chips.innerHTML = PROMPT_IDEAS.map(idea => `
    <button class="idea-chip" onclick="selectIdea(this, '${idea.replace(/'/g, "\\'")}')">
      ${idea}
    </button>`).join('');

  document.getElementById('story-prompt').value = '';
  document.getElementById('char-count').textContent = '0';
  showCreateForm();
}

function selectIdea(el, idea) {
  document.querySelectorAll('.idea-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const clean = idea.replace(/^[\p{Emoji}\s]+/u, '').trim();
  document.getElementById('story-prompt').value = clean;
  document.getElementById('char-count').textContent = clean.length;
}

function showCreateForm() {
  document.getElementById('create-form').classList.remove('hidden');
  document.getElementById('loading-state').classList.add('hidden');
  document.getElementById('error-state').classList.add('hidden');
}

async function generateStory() {
  const prompt = document.getElementById('story-prompt').value.trim();
  if (prompt.length < 2) {
    document.getElementById('story-prompt').focus();
    document.getElementById('story-prompt').style.borderColor = '#FF6B6B';
    setTimeout(() => { document.getElementById('story-prompt').style.borderColor = ''; }, 1500);
    return;
  }

  document.getElementById('create-form').classList.add('hidden');
  document.getElementById('loading-state').classList.remove('hidden');
  document.getElementById('error-state').classList.add('hidden');

  try {
    const res = await fetch('/api/generate-story', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, ageGroup: state.ageGroup }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || 'Error desconocido');

    document.getElementById('loading-state').classList.add('hidden');
    openGeneratedStory(data);
  } catch (err) {
    document.getElementById('loading-state').classList.add('hidden');
    document.getElementById('error-state').classList.remove('hidden');
    document.getElementById('error-msg').textContent = err.message || '¡Vaya! Algo salió mal. Inténtalo de nuevo.';
  }
}

// ---- Navigation ----

function navigate(viewName) {
  stopSpeech();

  const prev = document.getElementById(`view-${state.view}`);
  const next = document.getElementById(`view-${viewName}`);

  prev.classList.remove('active');
  prev.classList.add('slide-left');
  setTimeout(() => prev.classList.remove('slide-left'), 300);

  next.classList.add('active');

  state.view = viewName;
  updateNav(viewName);
  updateHeader(viewName);

  if (viewName === 'home')    renderHome();
  if (viewName === 'stories') renderStories();
  if (viewName === 'create')  renderCreate();
}

function updateNav(viewName) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });
}

function updateHeader(viewName) {
  const backBtn    = document.getElementById('back-btn');
  const logo       = document.getElementById('header-logo');
  const pageTitle  = document.getElementById('page-title');
  const ageToggle  = document.getElementById('age-toggle');

  if (viewName === 'reader') {
    backBtn.classList.remove('hidden');
    logo.classList.add('hidden');
    pageTitle.classList.remove('hidden');
    pageTitle.textContent = state.currentStory?.title || '';
    ageToggle.classList.add('hidden');
  } else {
    backBtn.classList.add('hidden');
    logo.classList.remove('hidden');
    pageTitle.classList.add('hidden');
    ageToggle.classList.remove('hidden');
  }
}

// ---- Init ----

function init() {
  // Age toggle
  document.querySelectorAll('.age-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.ageGroup = btn.dataset.age;
      document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (state.view === 'home')    renderHome();
      if (state.view === 'stories') renderStories();
    });
  });

  // Bottom nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // Back button
  document.getElementById('back-btn').addEventListener('click', () => {
    const dest = state.generatedStory && state.currentStory?.id === 'generated'
      ? 'create' : 'stories';
    navigate(dest);
  });

  // Play all
  document.getElementById('ctrl-play-all').addEventListener('click', playAllParagraphs);

  // Stop
  document.getElementById('ctrl-stop').addEventListener('click', stopSpeech);

  // Slow toggle
  document.getElementById('ctrl-slow').addEventListener('click', () => {
    state.slowMode = !state.slowMode;
    document.getElementById('ctrl-slow').classList.toggle('active', state.slowMode);
    if (state.speaking) {
      const story = state.currentStory;
      stopSpeech();
      if (story) speakText(story.paragraphs.join(' '));
    }
  });

  // Read again
  document.getElementById('read-again-btn').addEventListener('click', () => {
    document.querySelectorAll('.word.spoken').forEach(w => w.classList.remove('spoken'));
    playAllParagraphs();
  });

  // Home create button
  document.getElementById('home-create-btn').addEventListener('click', () => navigate('create'));

  // Generate button
  document.getElementById('generate-btn').addEventListener('click', generateStory);

  // Retry button
  document.getElementById('retry-btn').addEventListener('click', showCreateForm);

  // Prompt textarea char counter
  document.getElementById('story-prompt').addEventListener('input', e => {
    document.getElementById('char-count').textContent = e.target.value.length;
  });

  // Prompt textarea enter key
  document.getElementById('story-prompt').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); generateStory(); }
  });

  // Initial render
  renderHome();
}

document.addEventListener('DOMContentLoaded', init);
