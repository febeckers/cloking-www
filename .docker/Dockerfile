FROM node:18

RUN mkdir /app

COPY ./application /app/

WORKDIR /app/

# COPY application/package*.json .

RUN npm install

# COPY ./application/. .

EXPOSE 5173

CMD ["npm", "run", "dev"]
