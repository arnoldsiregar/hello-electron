const electron = require('electron');   // electron
const url = require('url');             // node
const path = require('path');           // node

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));
});

app.on('close', () => {

});