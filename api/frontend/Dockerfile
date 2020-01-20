FROM node:10

# Map volume
VOLUME /var/www/html

# Create html directory
WORKDIR /var/www/html

# Bundle app source
COPY . .

# Install app dependencies
COPY package.json .
# RUN npm install
# RUN mkdir -p dist
# WORKDIR /usr/src/app/dist
# ADD ../frontend/dist ./
# WORKDIR /usr/src/app/dist

# If you are building your code for staging/prod.
#RUN npm run build

EXPOSE 8080

#Run Nodejs server
#RUN npm run server
# CMD [ "npm", "run", "server" ]