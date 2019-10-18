# use debian for build-time tooling support
FROM node:12 as build
WORKDIR /app
# copy and install dependencies for docker-caching
COPY package.json package-lock.json ./
RUN npm ci
# copy everything and remove development libraries
COPY . ./
RUN npm run build && npm prune --production

# use lightweight Alpine for production
FROM node:12-alpine as production
WORKDIR /app
# copy all built files for production
COPY --from=build --chown=node /app ./
# use non-root and enable production mode
USER node
ENV NODE_ENV production

# start project in production mode
CMD ["npm", "run", "serve"]
