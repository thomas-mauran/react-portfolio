# Base image

FROM node:18-alpine AS build

# Set the working directory

WORKDIR /app

# Copy package.json and package-lock.json

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the rest of the app

COPY . .

RUN npm run build

# Serve the app with a web server

FROM nginx:stable-alpine AS prod

COPY --from=0 /app/dist /usr/share/nginx/html

# Config to serve the app on the root path and handle 404 errors

COPY nginx.conf /etc/nginx/conf.d/default.conf