// Importa i moduli necessari
const express = require('express');
const path = require('path');

// Crea un'app Express
const app = express();

// Imposta la porta su cui il server ascolterà (Render fornirà una porta dinamica)
const PORT = process.env.PORT || 3000;

// Servi i file statici dalla root del progetto
app.use(express.static(path.join(__dirname)));

// Endpoint di default che serve il file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});
