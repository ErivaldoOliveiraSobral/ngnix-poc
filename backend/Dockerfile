FROM node:18-alpine

# ENV NODE_ENV=production
# WORKDIR /app

# COPY ["package.json", "package-lock.json", "."]
# RUN npm install --production

# COPY ["app.js", "api.js", "."]
# COPY db ./db

# EXPOSE 3001

# CMD ["npm", "start"]

ADD . .
WORKDIR /app

EXPOSE 3001

CMD ["npm", "run", "dev"]
