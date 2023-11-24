const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevFest Rio Verde 2023</title>
      </head>
      <body>
        <h1>Bem-vindo ao DevFest Rio Verde 2023!</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
