FROM node:10

# Create Directory for app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# global install & update
RUN npm i -g npm && npm i -g yarn

RUN yarn config set prefix ~/.yarn-global
RUN echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bashrc
RUN yarn global add pm2

# Install Dependencies
COPY package*.json ./
RUN yarn

# Build App
RUN yarn build

# Add sources
COPY . .

# Bind
EXPOSE 3000

CMD [ "pm2", "start", "ecosystem.config.js" ]
