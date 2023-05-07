<h1 align="center">
Next Apollo With Output File tracing feature enabled
</h1>

<h4 align="center">
  Project To show how to enable Output File tracing (standalone) feature
</h4>

<p align="center">
  <a href="#whats-included">What's included</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#docker-usage">Docker usage</a>
</p>

## What's included

### Features

- Custom server in Next JS (https://nextjs.org/docs/pages/building-your-application/configuring/custom-server)
- Output File Tracing (Standalone) feature of Next JS (https://nextjs.org/docs/pages/api-reference/next-config-js/output) 
- Latest [Next.js](https://nextjs.org/) version.
- Latest packages updates.
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with built-in
  cookie-based [JWT](https://jwt.io/) token authentication.
- Works both via _Client-Side Rendering_ and _Server-Side Rendering_;
- [TypeScript](https://www.typescriptlang.org/) environment.
- [Normalize.css](https://necolas.github.io/normalize.css/) included.

### Developer experience

- [Docker](https://www.docker.com/) configuration to run in independent environment with Output File Tracing feature enabled and disabled.

It also includes other tools and technologies like, 
- Testing environment via [Jest](https://jestjs.io/)
  and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro).
- Configured [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen). Simply run `yarn codegen`.
- [Prettier](https://prettier.io/) for code formatting.

## Getting started

See [Next.js documentation](https://nextjs.org/docs) and It's advance feature of version 12.


## Apollo usage

- [Client-Side Rendering (CSR) example](./src/pages/users-csr.tsx).
- [Server-Side Rendering (SSR) example](./src/pages/users-ssr.tsx).

---

Pretty much everything you need to know about project structure, SSR, etc., you can find in
the [official Next.js documentation](https://nextjs.org/docs).

## Docker usage

To build and run Dockerized **production-ready** container, run:

```bash
docker build -t my-feature .
```


## Project's screenshorts and video

### Before Output File Tracing Feature Disabled

<img width="1715" alt="feature disabled" src="https://user-images.githubusercontent.com/76865575/236692520-dad19bd3-870c-430b-80a6-18b232e2f50c.png">


### After Output Tracing Feature Enabled

<img width="1727" alt="feature enabled" src="https://user-images.githubusercontent.com/76865575/236692527-e222b278-73db-4371-869e-168a25edc814.png">

Video Link (https://drive.google.com/file/d/1PMqXemhBKD5OSGgjnr_gJvIh8el6wbgn/view?usp=sharing)
