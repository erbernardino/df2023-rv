const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevFest Rio Verde 2023</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #333;
          }
          .content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            margin: 20px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>Bem-vindo ao DevFest Rio Verde 2023!</h1>
          <p>Um evento incrível para entusiastas e profissionais de tecnologia.</p>
          
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
