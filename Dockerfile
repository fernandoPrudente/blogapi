FROM node 

COPY ./dist .
COPY ./package.json .

RUN npm install --production

CMD node dist/server.js