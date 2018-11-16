FROM node 

COPY . .

RUN npm install --production

CMD node dist/server.js