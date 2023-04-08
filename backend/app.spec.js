const request = require('supertest');
const app = require('./app');

describe('Teste da aplicação', () => {
  it('deve retornar uma mensagem de "Olá, mundo!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Olá, mundo!');
  });
});
