const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// 🔹 Dados iniciais
const initialUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  }
];

const initialPosts = [
  {
    id: 1,
    userId: 1,
    title: "Post do Leanne",
    body: "Conteúdo do post de Leanne"
  },
  {
    id: 2,
    userId: 2,
    title: "Post do Ervin",
    body: "Conteúdo do post de Ervin"
  }
];

let users = [...initialUsers];
let posts = [...initialPosts];

// 🔹 USERS

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: 'Usuário não encontrado' });
});

app.post('/users', (req, res) => {
  const { name, username, email } = req.body;
  if (!name || !username || !email) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  const newUser = {
    id: users.length + 1,
    name,
    username,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const { name, username, email } = req.body;
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  user.name = name || user.name;
  user.username = username || user.username;
  user.email = email || user.email;
  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

// 🔹 POSTS (dependem de um usuário válido)

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  post ? res.json(post) : res.status(404).json({ error: 'Post não encontrado' });
});

app.post('/posts', (req, res) => {
  const { userId, title, body } = req.body;
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(400).json({ error: 'Usuário inválido' });

  const newPost = {
    id: posts.length + 1,
    userId,
    title,
    body
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const { title, body } = req.body;
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post não encontrado' });

  post.title = title || post.title;
  post.body = body || post.body;
  res.json(post);
});

app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

// 🔹 RESET
app.post('/reset', (req, res) => {
  users = [...initialUsers];
  posts = [...initialPosts];
  res.status(200).json({ message: 'Dados resetados com sucesso' });
});

// 🔹 ERRO
app.get('/error', (req, res) => {
  res.status(500).json({ error: 'Erro no servidor' });
});

app.listen(port, () => {
  console.log(`API mock rodando na porta ${port}`);
});
