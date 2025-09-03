FROM node:20-alpine
WORKDIR /app
COPY ./state-management-lab/package*.json .
RUN npm install
COPY ./state-management-lab/* .
EXPOSE 5173
CMD ["npm", "run","dev"]
