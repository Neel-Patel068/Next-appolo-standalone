# base image
FROM alpine AS BUILD_IMAGE

######################## Setup Internal Monorepo Structure ###############################
RUN apk add --update nodejs npm
RUN apk add yarn


COPY . ./next-advanced-apollo-starter
WORKDIR /next-advanced-apollo-starter

RUN yarn install
RUN yarn build
RUN node esbuildfile.js
# EXPOSE 3000 5555
# CMD yarn dev


######################## Multistage Build ###############################
FROM alpine 

RUN apk add --update nodejs npm

# COPY --from=BUILD_IMAGE if [ -d "./next-advanced-apollo-starter/public" ] ; then COPY --from=BUILD_IMAGE ./next-advanced-apollo-starter/public ./standalone/public/ 
COPY --from=BUILD_IMAGE ./next-advanced-apollo-starter/.next/standalone ./standalone
COPY --from=BUILD_IMAGE ./next-advanced-apollo-starter/.next/static ./standalone/.next/static

WORKDIR /standalone
RUN ls -a
EXPOSE 3000 5555
CMD node custom-server.js







# RUN if [ -d "public" ] ; then cp public ./next/standalone/public fi
# COPY .next/static .next/standalone/.next/static
# RUN find ./next-advanced-apollo-starter -mindepth 1 ! -regex '^./.next/standalone\(/.*\)?' -delete
# RUN ls -a
# WORKDIR /.next/standalone
# RUN ls -a
# RUN node server.js
# For standalone folder


# Following commands from previous file
# FROM node:16-alpine as builder

# RUN apk add curl --no-cache

# USER node
# WORKDIR /home/node

# COPY --chown=node:node package*.json ./
# COPY --chown=node:node yarn.lock ./
# RUN yarn

# COPY --chown=node:node . .

# ARG NODE_ENV=production
# ARG APP_ENV=production

# ENV NODE_ENV ${NODE_ENV}

# RUN ["yarn", "build"]

# CMD ["yarn", "start"]