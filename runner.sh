#!/bin/bash

# Stop and remove all running containers
docker stop $(docker ps -a -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all images
# docker rmi $(docker images -q)

# Build the image
docker build -t api.open .

# Run the container
docker run --rm -p 3000:3000 -e NODE_ENV=development -e API_PORT=3000 -e API_MONGO_HOST=10.10.214.227 -e API_MONGO_PORT=27017 -e API_MONGO_USER=admin -e API_MONGO_PASS=admin -e API_MONGO_DB=db-open-science api.open