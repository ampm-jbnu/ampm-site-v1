FROM node:10

# Create Directory for app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# global install & update
RUN npm i -g npm && npm i -g yarn

# Install Dependencies
COPY package*.json ./
RUN yarn
RUN yarn build

# Add sources
COPY . .

# Bind
EXPOSE 3000

CMD [ "yarn", "start" ]