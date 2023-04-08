### Express App

Projeto criado com o intuito de testes e aprendizado. 
As seguintes stacks estão sendo utilizadas:
- Expressjs
- Nextjs
- Nginx
- Docker
- Docker Compose

Utilizei as stacks tecnológicas acima para fazer alguns testes de containerização e orquestração de várias apps usando o docker e docker-compose e alguns testes usando o Nginx como proxy reverso.

### Anotações
Copiar configs e dar restart no Nginx
```sh
docker cp .\nginx.conf express-app-reverse-proxy-1:/etc/nginx/conf.d/
docker exec express-app-reverse-proxy-1 nginx -t
docker exec express-app-reverse-proxy-1 nginx -s reload
```