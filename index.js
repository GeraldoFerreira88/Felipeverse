const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint simples para testar
app.get('/', (req, res) => {
  res.send('FelipeVerse is running!');
});

// Simulação de geração de vídeo a partir de imagem e prompt
app.post('/generate-video', (req, res) => {
  const { imageUrl, prompt } = req.body;
  // Aqui você integraria a API de IA para transformar imagem+prompt em vídeo
  console.log('Recebido:', imageUrl, prompt);
  res.json({ message: 'Vídeo gerado com sucesso (simulado)' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});