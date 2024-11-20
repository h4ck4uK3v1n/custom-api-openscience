## how setup the api application

- 1. yarn install
- 2. yarn db:start:local // startup the database
- 3. yarn dev
- 4. If you change the code in your own branch it is necessary to run the build `yarn build`

## Notes

if you want to check if the database is running the docker container, you can check using this command `docker ps`

## node version

v20.13.0


## Solution

### This is a guide to dockerizing your backoffice API

- step 1: using a base image in alpine version `node:20.18.0-alpine`
```yml
FROM node:20.18.0-alpine
```
- step 2: define a base directory
```yml
WORKDIR app
```
- step 3: Copy all configuration files
```yml
COPY yarn.lock /app
COPY package.json /app
  ```
- step 4: Install all dependency
```yml
RUN yarn install
```

- step 5: Copy all files 
```yml
COPY . /app
```

- step 6: Build project
```yml
RUN yarn build
```

- step 7: Expose port of app
```yml
EXPOSE $API_PORT
```

- step 8: Command to run this project
```yml
CMD ["yarn", "dev"]
```

- execute 
```bash
schmod +x runner.sh
./runner.sh
```