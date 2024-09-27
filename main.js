const { app, BrowserWindow } = require('electron')
const path = require('path')
let win

function createWindow() {
    win = new BrowserWindow({
        fullscreen:true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            javascript: true
        }
    })
    win.loadFile('./index.html')
    // win.webContents.openDevTools();
}

app.on('ready', () => {
    createWindow()
    console.warn("Coding Running")
})

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})
