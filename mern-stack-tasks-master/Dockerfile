FROM mhart/alpine-node

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install dependencies
COPY package.json /usr/src/app
RUN npm install 

#bundle app source
COPY src/ /usr/src/app/


COPY . .
EXPOSE 3000
CMD ["npm", "start"]