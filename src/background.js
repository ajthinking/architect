'use strict'

import { app, protocol, dialog, BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const { ipcMain } = require('electron')
const { exec } = require("child_process");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label:'Open',
                    click() {
                        //app.emit('select-current-project')
                        //ipcRenderer.send('select-current-project')

                    },
                    accelerator: 'CmdOrCtrl+O'
                },
                {
                    label:'Exit',
                    click() { 
                        app.quit() 
                    }
                },                
            ]
        }
    ])

    Menu.setApplicationMenu(menu);   

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

ipcMain.on('select-current-project', async (event, arg) => {
  const result = await dialog.showOpenDialog(win, {
    properties: ['openDirectory']
  })

  if(!result.canceled) event.reply('current-project-updated', result.filePaths[0])
})

ipcMain.on('architect-api-request', (event, request) => {
    let phpBinary = 'php'
    let architect = '/Users/anders/Code/architect/src/php/cli/architect.php'
    let target = request.target
    let endpoint = request.endpoint
    let data = JSON.stringify(
        request.data ? request.data : {}
    )
    let signature = `${phpBinary} ${architect} ${target} ${endpoint} ${data}`

    exec(signature, (error, stdout, stderr) => {
        if (error) {
            event.reply('architect-api-request-failed', error.message)
            return;
        }
        if (stderr) {
            event.reply('architect-api-request-failed', stderr)
            return;
        }

        event.reply('architect-api-request-successful', JSON.parse(stdout))
        return;
    });
})