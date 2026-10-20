const express = require('express');

const URL_AGENDA = 'http://www.raydelto.org/agenda.php';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Listar contactos
app.get('/contactos', async (req, res) => {
  try {
    const r = await fetch(URL_AGENDA);
    if (!r.ok) throw new Error(`La agenda respondió ${r.status}`);
    res.json(await r.json());
  } catch (e) {
    res.status(502).json({ error: 'No se pudo obtener la agenda' });
  }
});

// Almacenar contacto
app.post('/contactos', async (req, res) => {
  const { nombre, apellido, telefono } = req.body || {};
  if (!nombre || !apellido || !telefono) {
    return res.status(400).json({ error: 'nombre, apellido y telefono son requeridos' });
  }
  try {
    const r = await fetch(URL_AGENDA, {
      method: 'POST',
      body: JSON.stringify({ nombre, apellido, telefono })
    });
    if (!r.ok) throw new Error(`La agenda respondió ${r.status}`);
    res.status(201).json({ nombre, apellido, telefono });
  } catch (e) {
    res.status(502).json({ error: 'No se pudo guardar el contacto' });
  }
});

app.listen(PORT, () => console.log(`Servicio en http://localhost:${PORT}/contactos`));
