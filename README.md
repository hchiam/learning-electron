# Learning Electron.js

Just one of the things I'm learning. https://github.com/hchiam/learning

Electron lets you build native desktop apps with web technologies (JS, HTML, CSS, Node.js, etc).

Main code flow: `main.js` -> `index.html` -> `renderer.js`

## Minimum files:

- `package.json` - Points to app's main file and lists details and dependencies.
- `main.js` - Starts app and creates browser window to render HTML. The app's **main process**.
- `index.html` - Web page to render. The app's **renderer process**.

## Quick start from the `electron-quick-start` template

```bash
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install
npm start
```

## General links to learn from

<https://github.com/electron/electron-quick-start>

<https://electronjs.org/docs/tutorial/first-app>

<https://github.com/electron/electron-api-demos/releases>

<https://github.com/electron/simple-samples>

<https://electronjs.org/community#boilerplates>

## Boilerplates

### Electron with React

<https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/>

* src/`electron-starter.js`: `mainWindow`, `createWindow`, and `app.on` event listeners
* src/`index.js` -> `App` from `App.js` -> `render()`

<https://github.com/electron-react-boilerplate/electron-react-boilerplate>

* app/`main.dev.js`: `mainWindow`, `createWindow`, and `app.on` event listeners
* app/`index.js` -> `Root` from app/containers/`Root.js` -> `Routes` from app/`Routes.js` -> containers/`HomePage.js`, containers/`CounterPage.js`, app/containers/`App.js` -> app/components/`Home.js`, app/components/`Counter.js`, app/actions/`counter.js`

### Electron with Vue

<https://github.com/SimulatedGREG/electron-vue>

### Electron with Angular

<https://github.com/maximegris/angular-electron>
