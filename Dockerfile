# pull the official base image
FROM node:alpine
EXPOSE 3000
COPY . ./
CMD ["npm", "start"]
