FROM node:18-alpine

ENV NODE_ENV=production
WORKDIR /frontend

COPY . .
RUN npm install --production
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
