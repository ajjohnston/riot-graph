FROM mhart/alpine-node:8.1.3

COPY . /app
WORKDIR /app

ENV NODE_ENV production
EXPOSE 4000
RUN npm run build
CMD ["npm", "start"]
