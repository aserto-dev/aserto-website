# Aserto Website

- [Sanity Studio](https://studio.aserto.com)

## Developing locally
`yarn dev`
This command starts the server on localhost:3000 with hot reload enabled. Before you run this command, be sure to execute:

`. ./scripts/aserto-website` 

Provide that script with your GitHub PAT so it can talk to https://vault.eng.aserto.com and pull secrets required to interact with Sanity. Otherwise, you will see an error referencing `only Absolute URLs are supported`.

## Developing locally
`yarn dev`
This command starts the server on localhost:3000 with hot reload enabled. Before you run this command, be sure to execute:

`. ./scripts/aserto-website` 

Provide that script with your GitHub PAT so it can talk to https://vault.eng.aserto.com and pull secrets required to interact with Sanity. Otherwise, you will see an error referencing `only Absolute URLs are supported`.

## Featured aspects of the stack

- Typescript
- NextJS

## Things to note

- It comes with Inter (it's better to host fonts here rather than getting them from google fonts). Remove it if you are not going to use it.
- Pages, components, etc... are located under `/src`. If you are changing this, be sure to also update `tsconfig.json`'s `baseUrl`.

---

If you found you needed to make extra config to make this work better, feel free to submit a pr suggesting your changes. Our focus is for you to get up and running with the least steps and burden as possible.

---

Let's go 🚀
