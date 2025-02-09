const request = require('supertest');

const API_URL = 'http://localhost:3000';

describe('Testes da API de Usuários', () => {

  it('Deve retornar a lista de usuários (GET)', async () => {
    const response = await request(API_URL).get('/users');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('email');
  });

  it('Deve criar um novo usuário', async () => {
    const response = await request(API_URL)
      .post('/users')
      .send({
        name: 'Teste Usuário',
        email: 'teste@email.com',
        phone: '123456789'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Teste Usuário');
    expect(response.body.email).toBe('teste@email.com');
  });

  it('Deve retornar erro 400 ao tentar criar um usuário sem nome', async () => {
    const response = await request(API_URL)
      .post('/users')
      .send({ email: 'teste@email.com' });

    expect(response.status).toBe(400);
  });

  it('Deve simular um erro 500 no servidor', async () => {
    const response = await request(API_URL)
      .get('/error')
      .send();
    expect(response.status).toBe(500);
  });

});
