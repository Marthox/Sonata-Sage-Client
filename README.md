# Sonata Sage Client

Hello and welcome to the Sonata Sage Client documentation. This is a work in progress and will be updated as we go along. But for now, here is a quick start guide to get you up and running.

## About
This project is divided into two sub projects. The first is the `sonata-sage-server` project which holds all the logic and backend development of Sonata Sage. The second one is the `sonata-sage-client` project which is the graphic user interface of project.

This project is the client which is a Svelte.js project.

## Download the project
To download the project, you can use one of the following commands:

#### Using SSH (Recomended):
```bash
git clone git@github.com:MarthoxGJ/Sonata-Sage-Client.git
```

#### Using HTTPS:
```bash
git clone https://github.com/MarthoxGJ/Sonata-Sage-Client.git
```

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
