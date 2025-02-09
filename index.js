const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// 🔹 Criando um backup do estado inicial da API
const initialUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" }
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" }
    }
  }
];

// 🔹 Inicializando os usuários com base no backup
let users = [...initialUsers];

// Rota GET para listar usuários
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// Rota POST para criar um usuário
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios!' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    address: {
      street: 'Unknown',
      suite: 'Unknown',
      city: 'Unknown',
      zipcode: 'Unknown',
      geo: { lat: '0', lng: '0' }
    }
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// 🔹 Rota para resetar a API para o estado inicial
app.post('/reset', (req, res) => {
  users = [...initialUsers]; // 🔹 Restaura a lista de usuários original
  res.status(200).json({ message: 'Lista de usuários resetada com sucesso!' });
});

// Simular erro 500
app.get('/error', (req, res) => {
  res.status(500).json({ error: 'Erro no servidor' });
});

app.listen(port, () => {
  console.log(`API mock rodando na porta ${port}`);
});
