FROM node:alpine

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./ /usr/app
COPY package.json ./usr/

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
RUN npm install

EXPOSE 8083
ENTRYPOINT  [ "npm","run" ]