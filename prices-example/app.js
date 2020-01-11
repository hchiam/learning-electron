// https://github.com/electron/simple-samples/tree/master/prices

const {app, BrowserWindow} = require('electron') // http://electronjs.org/docs/api
const path = require('path') // https://nodejs.org/api/path.html
const url = require('url') // https://nodejs.org/api/url.html

let window = null

// once app is ready:
app.once('ready', () => {
  window = new BrowserWindow({
    width: 400,
    height: 500,
    show: false, // prevent while flickering: don't show window until ready
    resizable: false
  })

  // // show dev tools:
  // window.webContents.openDevTools()

  // load local index.html file as window URL:
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // show window once ready to show:
  window.once('ready-to-show', () => {
    window.show()
  })
})
