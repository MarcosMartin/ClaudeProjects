require('dotenv').config();
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Eres un profesor de español de España para niños de 5 a 10 años.
Generas historias cortas, alegres y educativas en español de España basadas en el tema del niño.

Reglas estrictas:
- Vocabulario simple, oraciones cortas, positivas y claras
- 4 a 5 párrafos, cada uno con 2 a 3 oraciones
- Contenido apto para veganos: los animales son amigos, sin carne, sin explotación animal
- Sin contenido político ni religioso
- Temas permitidos: animales, naturaleza, amistad, viajes por España, música, cultura española, valores positivos
- Usa español de España (vosotros, vocabulario peninsular)
- Responde ÚNICAMENTE con JSON válido, sin texto adicional, en este formato:
{
  "title": "Título de la historia",
  "emoji": "un emoji relevante",
  "category": "una de: animales|naturaleza|amistad|viajes|música|cultura|valores",
  "paragraphs": [
    "Párrafo 1...",
    "Párrafo 2...",
    "Párrafo 3...",
    "Párrafo 4..."
  ]
}`;

app.post('/api/generate-story', async (req, res) => {
  const { prompt, ageGroup } = req.body;

  if (!prompt || prompt.trim().length < 2) {
    return res.status(400).json({ error: 'Necesito un tema para crear tu historia.' });
  }

  const safePrompt = prompt.trim().slice(0, 200);
  const ageHint = ageGroup === '5-7'
    ? 'El niño tiene 5-7 años. Usa palabras muy sencillas y oraciones muy cortas.'
    : 'El niño tiene 8-10 años. Puedes usar vocabulario algo más variado pero siempre claro.';

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `${ageHint}\n\nEl niño quiere una historia sobre: ${safePrompt}\n\nDevuelve solo el JSON.`
        }
      ]
    });

    const raw = message.content[0].text.trim();
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('JSON not found in response');

    const story = JSON.parse(match[0]);

    if (!story.title || !Array.isArray(story.paragraphs) || story.paragraphs.length < 2) {
      throw new Error('Invalid story structure');
    }

    res.json(story);
  } catch (err) {
    console.error('Story generation error:', err.message);
    res.status(500).json({ error: '¡Vaya! No pude crear la historia. ¡Inténtalo de nuevo!' });
  }
});

app.listen(port, () => {
  console.log(`¡Lee Conmigo! corriendo en http://localhost:${port}`);
});
